/**
 * Mena's Nest Group - Cloud Firebase Firestore Sync Engine
 * Real-time cloud database syncing products, orders, articles, subscribers & coupons
 * across all devices worldwide on Vercel and production hosts.
 */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAVpV4rxRSz9N_PH_co5VfPgI8eDVAR84k",
  authDomain: "mena-s-nest-116c4.firebaseapp.com",
  projectId: "mena-s-nest-116c4",
  storageBucket: "mena-s-nest-116c4.firebasestorage.app",
  messagingSenderId: "813484731199",
  appId: "1:813484731199:web:6399f4b667f9e47d63418a",
  measurementId: "G-D6LLXMS949"
};

let db = null;
let isFirebaseReady = false;

// Initialize Firebase if compat SDK is loaded
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    db = firebase.firestore();
    isFirebaseReady = true;
    console.log("🌿 Mena's Nest: Firebase Cloud Firestore Connected!");
  }
} catch (err) {
  console.warn("Firebase initialization warning (using local fallback):", err);
}

const FirebaseDB = {
  isReady: () => isFirebaseReady && db !== null,

  /* ================= PRODUCTS ================= */
  async getProducts() {
    if (this.isReady()) {
      try {
        const snap = await db.collection('products').get();
        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => list.push({ ...doc.data(), id: doc.id }));
          return list;
        }
      } catch (err) {
        console.warn("Firestore products read error (falling back):", err);
      }
    }
    // Fallback: check localStorage, then data/products.json
    try {
      const saved = localStorage.getItem('menas_nest_custom_products');
      if (saved) return JSON.parse(saved);
      const res = await fetch('data/products.json');
      if (res.ok) return await res.json();
    } catch (e) {}
    return [];
  },

  async saveProduct(product) {
    if (!product || !product.id) return false;
    // Always persist locally
    try {
      let list = JSON.parse(localStorage.getItem('menas_nest_custom_products') || '[]');
      const idx = list.findIndex(p => p.id === product.id);
      if (idx >= 0) list[idx] = product;
      else list.unshift(product);
      localStorage.setItem('menas_nest_custom_products', JSON.stringify(list));
    } catch (e) {}

    // Cloud Firestore save
    if (this.isReady()) {
      try {
        await db.collection('products').doc(product.id).set(product, { merge: true });
        console.log("✓ Product synced to Cloud Firestore:", product.id);
        return true;
      } catch (err) {
        console.warn("Firestore save error:", err);
      }
    }
    return false;
  },

  async deleteProduct(productId) {
    try {
      let list = JSON.parse(localStorage.getItem('menas_nest_custom_products') || '[]');
      list = list.filter(p => p.id !== productId);
      localStorage.setItem('menas_nest_custom_products', JSON.stringify(list));
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('products').doc(productId).delete();
        console.log("✓ Product removed from Cloud Firestore:", productId);
        return true;
      } catch (err) {
        console.warn("Firestore delete error:", err);
      }
    }
    return false;
  },

  async seedInitialProducts(products) {
    if (!this.isReady() || !Array.isArray(products) || products.length === 0) return false;
    try {
      const snap = await db.collection('products').limit(1).get();
      if (!snap.empty) return false; // Already seeded
      console.log(`🌿 Mena's Nest: Seeding ${products.length} catalog items into Cloud Firestore...`);
      const batch = db.batch();
      products.forEach(p => {
        if (p && p.id) {
          const docRef = db.collection('products').doc(p.id);
          batch.set(docRef, p);
        }
      });
      await batch.commit();
      console.log("✓ Cloud Firestore catalog successfully seeded!");
      return true;
    } catch (err) {
      console.warn("Could not seed initial products to Firestore:", err);
      return false;
    }
  },

  /* ================= ORDERS ================= */
  async getOrders() {
    if (this.isReady()) {
      try {
        const snap = await db.collection('orders').orderBy('createdAt', 'desc').get();
        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => list.push({ ...doc.data(), orderId: doc.id }));
          return list;
        }
      } catch (err) {
        // Fallback without orderBy in case index is not built
        try {
          const snap = await db.collection('orders').get();
          if (!snap.empty) {
            const list = [];
            snap.forEach(doc => list.push({ ...doc.data(), orderId: doc.id }));
            return list;
          }
        } catch (e) {}
      }
    }
    try {
      const saved = localStorage.getItem('menas_nest_orders_ghs');
      if (saved) return JSON.parse(saved);
      const res = await fetch('data/orders.json');
      if (res.ok) return await res.json();
    } catch (e) {}
    return [];
  },

  async saveOrder(order) {
    if (!order || !order.orderId) return false;
    try {
      let list = JSON.parse(localStorage.getItem('menas_nest_orders_ghs') || '[]');
      const idx = list.findIndex(o => o.orderId === order.orderId);
      if (idx >= 0) list[idx] = order;
      else list.unshift(order);
      localStorage.setItem('menas_nest_orders_ghs', JSON.stringify(list));
    } catch (e) {}

    if (this.isReady()) {
      try {
        const toSave = { ...order, createdAt: Date.now() };
        await db.collection('orders').doc(order.orderId).set(toSave, { merge: true });
        console.log("✓ Order synced to Cloud Firestore:", order.orderId);
        return true;
      } catch (err) {
        console.warn("Firestore order save error:", err);
      }
    }
    return false;
  },

  async updateOrderStatus(orderId, status) {
    try {
      let list = JSON.parse(localStorage.getItem('menas_nest_orders_ghs') || '[]');
      const o = list.find(it => it.orderId === orderId);
      if (o) {
        o.status = status;
        localStorage.setItem('menas_nest_orders_ghs', JSON.stringify(list));
      }
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('orders').doc(orderId).update({ status: status, updatedAt: Date.now() });
        return true;
      } catch (err) {
        console.warn("Firestore status update error:", err);
      }
    }
    return false;
  },

  /* ================= ARTICLES ================= */
  async getArticles() {
    if (this.isReady()) {
      try {
        const snap = await db.collection('articles').get();
        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => list.push({ ...doc.data(), id: doc.id }));
          return list;
        }
      } catch (e) {}
    }
    try {
      const saved = localStorage.getItem('menas_articles');
      if (saved) return JSON.parse(saved);
      const res = await fetch('data/articles.json');
      if (res.ok) return await res.json();
    } catch (e) {}
    return [];
  },

  async saveArticle(article) {
    if (!article || !article.id) return false;
    try {
      let list = JSON.parse(localStorage.getItem('menas_articles') || '[]');
      const idx = list.findIndex(a => a.id === article.id);
      if (idx >= 0) list[idx] = article;
      else list.unshift(article);
      localStorage.setItem('menas_articles', JSON.stringify(list));
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('articles').doc(article.id).set(article, { merge: true });
        return true;
      } catch (e) {}
    }
    return false;
  },

  async deleteArticle(artId) {
    try {
      let list = JSON.parse(localStorage.getItem('menas_articles') || '[]');
      list = list.filter(a => a.id !== artId);
      localStorage.setItem('menas_articles', JSON.stringify(list));
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('articles').doc(artId).delete();
        return true;
      } catch (e) {}
    }
    return false;
  },

  /* ================= SUBSCRIBERS ================= */
  async getSubscribers() {
    if (this.isReady()) {
      try {
        const snap = await db.collection('subscribers').get();
        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => list.push(doc.data()));
          return list;
        }
      } catch (e) {}
    }
    try {
      const saved = localStorage.getItem('menas_subscribers');
      if (saved) return JSON.parse(saved);
      const res = await fetch('data/subscribers.json');
      if (res.ok) return await res.json();
    } catch (e) {}
    return [];
  },

  async addSubscriber(sub) {
    if (!sub || !sub.email) return false;
    const emailKey = sub.email.toLowerCase().replace(/[^a-z0-9]/g, '_');
    try {
      let list = JSON.parse(localStorage.getItem('menas_subscribers') || '[]');
      if (!list.some(s => s.email.toLowerCase() === sub.email.toLowerCase())) {
        list.unshift(sub);
        localStorage.setItem('menas_subscribers', JSON.stringify(list));
      }
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('subscribers').doc(emailKey).set(sub, { merge: true });
        return true;
      } catch (e) {}
    }
    return false;
  },

  async deleteSubscriber(email) {
    const emailKey = email.toLowerCase().replace(/[^a-z0-9]/g, '_');
    try {
      let list = JSON.parse(localStorage.getItem('menas_subscribers') || '[]');
      list = list.filter(s => s.email.toLowerCase() !== email.toLowerCase());
      localStorage.setItem('menas_subscribers', JSON.stringify(list));
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('subscribers').doc(emailKey).delete();
        return true;
      } catch (e) {}
    }
    return false;
  },

  /* ================= COUPONS ================= */
  async getCoupons() {
    if (this.isReady()) {
      try {
        const snap = await db.collection('coupons').get();
        if (!snap.empty) {
          const list = [];
          snap.forEach(doc => list.push({ ...doc.data(), code: doc.id }));
          return list;
        }
      } catch (e) {}
    }
    try {
      const saved = localStorage.getItem('menas_coupons');
      if (saved) return JSON.parse(saved);
      const res = await fetch('data/coupons.json');
      if (res.ok) return await res.json();
    } catch (e) {}
    return [];
  },

  async saveCoupon(coupon) {
    if (!coupon || !coupon.code) return false;
    const code = coupon.code.toUpperCase();
    try {
      let list = JSON.parse(localStorage.getItem('menas_coupons') || '[]');
      const idx = list.findIndex(c => c.code.toUpperCase() === code);
      if (idx >= 0) list[idx] = coupon;
      else list.unshift(coupon);
      localStorage.setItem('menas_coupons', JSON.stringify(list));
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('coupons').doc(code).set(coupon, { merge: true });
        return true;
      } catch (e) {}
    }
    return false;
  },

  async deleteCoupon(code) {
    const upper = code.toUpperCase();
    try {
      let list = JSON.parse(localStorage.getItem('menas_coupons') || '[]');
      list = list.filter(c => c.code.toUpperCase() !== upper);
      localStorage.setItem('menas_coupons', JSON.stringify(list));
    } catch (e) {}

    if (this.isReady()) {
      try {
        await db.collection('coupons').doc(upper).delete();
        return true;
      } catch (e) {}
    }
    return false;
  }
};

window.FirebaseDB = FirebaseDB;
