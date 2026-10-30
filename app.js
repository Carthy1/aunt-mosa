/**
 * MENA'S NEST — HERBAL & ORGANIC WELLNESS
 * Advanced E-Commerce Architecture & State Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     DATA: PRODUCTS APOTHECARY WITH VARIANTS, STOCK & REVIEWS
     ========================================================================== */
  const PRODUCTS = [
    {
      id: 'prod-1',
      name: 'Nurture & Bloom Pregnancy Tea',
      category: ['pregnancy', 'teas'],
      categoryLabel: 'Pregnancy Care',
      priceUSD: 28.00,
      stock: 7, // Low stock small batch!
      image: 'assets/images/product-pregnancy-tea.jpg',
      badge: 'Trimester 2 & 3 Essential',
      variants: [
        { id: 'v1-std', name: '8 oz Amber Glass Jar', priceUSD: 28.00, size: '8 oz / 226g' },
        { id: 'v1-lrg', name: '16 oz Refill Pouch (Save 15%)', priceUSD: 46.00, size: '16 oz / 450g' },
        { id: 'v1-bndl', name: '3-Month Nesting Bundle (3 Jars)', priceUSD: 72.00, size: '24 oz Total' }
      ],
      selectedVariantIndex: 0,
      rating: 4.9,
      reviewsCount: 128,
      shortDesc: 'Certified organic red raspberry leaf, soothing chamomile blossoms, nettle & rose petals for maternal tone and gentle mineral hydration.',
      fullDesc: 'Specially formulated for expectant mothers navigating the second and third trimesters. Red raspberry leaf has been revered for generations by midwives to tone and nourish the uterine muscle in preparation for birth, while oat straw, chamomile, and nettle infuse rich trace minerals and deep calmness to maternal physiology.',
      ingredients: 'Organic Red Raspberry Leaf (Rubus idaeus), Organic German Chamomile (Matricaria chamomilla), Organic Stinging Nettle (Urtica dioica), Organic Rose Petals, Organic Spearmint.',
      directions: 'Steep 1 rounded tablespoon in 8-10 oz of freshly boiled spring water for 10-15 minutes. Strain and enjoy warm or lightly iced. Midwives recommend 1-3 cups daily starting at week 24 through birth.',
      precautions: 'Always consult your midwife or OB-GYN before introducing new herbs. Not intended for use during the first trimester.',
      sourcing: 'Hand-blended in small micro-batches. Packed in recyclable UV-protective amber glass jars to protect delicate essential oils.',
      reviews: [
        { author: 'Chiamaka N.', rating: 5, date: '2 weeks ago', text: 'Drank this religiously from week 28 onwards. My labor was smooth and recovery was amazingly quick. Tastes sweet and comforting!' },
        { author: 'Emily Watson', rating: 5, date: '1 month ago', text: 'The loose leaf blend is so fresh you can literally see whole chamomile blossoms and dried rose petals. Heavenly.' }
      ]
    },
    {
      id: 'prod-2',
      name: 'Golden Flow Lactation Drops',
      category: ['breastfeeding'],
      categoryLabel: 'Breastfeeding Support',
      priceUSD: 34.00,
      stock: 14,
      image: 'assets/images/product-lactation-drops.jpg',
      badge: 'Bestselling Elixir',
      variants: [
        { id: 'v2-std', name: '1 fl oz / 30 ml Dropper', priceUSD: 34.00, size: '30 ml (30 servings)' },
        { id: 'v2-lrg', name: '2 fl oz / 60 ml Family Size', priceUSD: 58.00, size: '60 ml (60 servings)' }
      ],
      selectedVariantIndex: 0,
      rating: 5.0,
      reviewsCount: 214,
      shortDesc: 'Fast-absorbing botanical tincture with fenugreek, fennel, oat straw & blessed thistle to gently boost rich breast milk supply.',
      fullDesc: 'Formulated to nourish and support nursing mothers experiencing supply dips or navigating the demanding early cluster-feeding weeks. Crafted with cold-macerated galactagogue herbs that naturally encourage prolactin stimulation and ease maternal postpartum nervous exhaustion.',
      ingredients: 'Organic Fenugreek Seed (Trigonella foenum-graecum), Organic Sweet Fennel Seed (Foeniculum vulgare), Organic Blessed Thistle, Organic Oat Straw (Avena sativa), Certified Organic Vegetable Glycerin, Mountain Spring Water.',
      directions: 'Take 1 to 2 full droppers (1-2 ml) directly under the tongue or in 2 oz of warm water/juice, 2 to 3 times daily between feeding sessions.',
      precautions: 'For nursing mothers only. Not suitable during pregnancy. Those with peanut allergies or active thyroid conditions should speak to their physician before use.',
      sourcing: 'Extracted slowly for 6 weeks in glass carboys without artificial heat or denatured alcohol to protect bioactive botanical saponins.',
      reviews: [
        { author: 'Hannah Davies, IBCLC', rating: 5, date: '3 days ago', text: 'I recommend Golden Flow to all my postpartum lactation clients. It works gently without causing stomach upset in baby.' },
        { author: 'Mariam K.', rating: 5, date: '3 weeks ago', text: 'Within 36 hours I pumped an extra 3 ounces. Absolute lifesaver for my return-to-work pumping stash!' }
      ]
    },
    {
      id: 'prod-3',
      name: 'Botanical Belly & Stretch Oil',
      category: ['pregnancy', 'womens'],
      categoryLabel: 'Pregnancy Care & Skin',
      priceUSD: 38.00,
      stock: 19,
      image: 'assets/images/product-belly-oil.jpg',
      badge: 'Award-Winning Care',
      variants: [
        { id: 'v3-std', name: '3.4 fl oz / 100 ml Pump', priceUSD: 38.00, size: '100 ml Bottle' },
        { id: 'v3-lrg', name: '6.8 fl oz / 200 ml Double Size', priceUSD: 66.00, size: '200 ml Value Pump' }
      ],
      selectedVariantIndex: 0,
      rating: 4.9,
      reviewsCount: 182,
      shortDesc: 'Velvety cold-pressed oil with sun-infused calendula, argan, rosehip and true lavender for expanding bellies and hips.',
      fullDesc: 'An indulgent, deeply hydrating botanical body elixir designed to cushion stretching skin with essential omegas and natural antioxidants. Soothes the dry pregnancy itch, boosts epidermal resilience, and creates an affectionate daily connection ritual between mother and growing baby.',
      ingredients: 'Cold-Pressed Golden Jojoba Oil, Organic Moroccan Argan Oil, Calendula Petals Slow-Infused in Sweet Almond Oil, Organic Cold-Pressed Rosehip Seed Oil, True English Lavender Flower Oil (0.25% gentle dilution).',
      directions: 'Warm 3 to 4 pumps between clean hands. Gently massage onto the belly, breasts, hips, and lower back in mindful clockwise motions morning and night.',
      precautions: 'Safe from the first trimester through postpartum. 100% natural and edible-grade safe around nursing infants. For external use only.',
      sourcing: 'Made with heirloom organic calendula blossoms hand-picked at dawn and slow solar-infused for 40 sunny days.',
      reviews: [
        { author: 'Sophie T.', rating: 5, date: '5 days ago', text: 'Zero stretch marks across my entire twin pregnancy! The oil absorbs effortlessly without staining linen or pajamas.' }
      ]
    },
    {
      id: 'prod-4',
      name: 'Little Nest Calming Baby Balm',
      category: ['children'],
      categoryLabel: 'Little Nest (Baby & Child)',
      priceUSD: 24.00,
      stock: 5, // Low stock small batch!
      image: 'assets/images/product-baby-balm.jpg',
      badge: 'Newborn Safe (0m+)',
      variants: [
        { id: 'v4-std', name: '2 oz / 60 ml Glass Pot', priceUSD: 24.00, size: '60 ml Pot' },
        { id: 'v4-twin', name: 'Duo Pack (Nursery + Diaper Bag)', priceUSD: 42.00, size: '2 x 60 ml Pots' }
      ],
      selectedVariantIndex: 0,
      rating: 5.0,
      reviewsCount: 96,
      shortDesc: 'Ultra-pure whipped balm with organic fair-trade shea butter, blue chamomile & marshmallow root for diaper rash and sensitive cheeks.',
      fullDesc: 'Gentle enough for premature, reactive, and sensitive newborn skin. Formulated with zero essential oils, no synthetic fragrance, no preservatives, and no petroleum by-products. Melts into a breathable barrier that comforts eczema, dry cradle cap, and teething dribble rashes.',
      ingredients: 'Certified Organic Fair-Trade Nilotica Shea Butter, Local Biodynamic Beeswax, Calendula Officinalis Flower Infused Jojoba Oil, Marshmallow Root Extract, German Chamomile CO2.',
      directions: 'Warm a pea-sized dab between clean fingertips. Smooth gently onto baby’s diaper area, cheeks, dry joints, or irritated skin folds.',
      precautions: 'Pediatrician evaluated. 100% gentle and hypoallergenic. Store below 25°C in a cool, shaded environment.',
      sourcing: 'Directly sourced from women’s fair-trade harvesting cooperatives in East Africa and small biodynamic apiaries.',
      reviews: [
        { author: 'Elena Rostova', rating: 5, date: '1 week ago', text: 'My son had awful teething rash under his chin. This cleared it up in literally two days without any burning or tears.' }
      ]
    },
    {
      id: 'prod-5',
      name: 'Vital Balance Women’s Tincture',
      category: ['womens'],
      categoryLabel: 'Women’s Wellness',
      priceUSD: 36.00,
      stock: 12,
      image: 'assets/images/product-balance-tincture.jpg',
      badge: 'Hormonal Harmony',
      variants: [
        { id: 'v5-std', name: '1.7 fl oz / 50 ml Dropper', priceUSD: 36.00, size: '50 ml Bottle' },
        { id: 'v5-trio', name: '3-Month Cycle Reset (3 Bottles)', priceUSD: 94.00, size: '3 x 50 ml Bottles' }
      ],
      selectedVariantIndex: 0,
      rating: 4.8,
      reviewsCount: 89,
      shortDesc: 'Holistic botanical support with chasteberry (vitex), motherwort & cramp bark for regular cycles and emotional equilibrium.',
      fullDesc: 'Crafted to harmonize cyclical rhythms throughout every season of womanhood—from postpartum cycle return to everyday premenstrual wellness. Nourishes the pituitary-ovarian axis, eases pelvic spasms, and promotes calm mood stability.',
      ingredients: 'Organic Chaste Tree Berry (Vitex agnus-castus), Organic Motherwort Herb, Organic Cramp Bark, Organic Ashwagandha Root, Organic Cane Alcohol & Pure Spring Water.',
      directions: 'Take 30 drops (approx. 1 ml) once daily in the morning in a splash of water or herbal tea. Most effective when taken consistently for 2-3 months.',
      precautions: 'Not for use during pregnancy or alongside hormonal medications without consulting a licensed herbal practitioner.',
      sourcing: 'Wildcrafted chasteberries harvested at peak ripeness from organic Mediterranean coastal groves.',
      reviews: [
        { author: 'Clara M.', rating: 5, date: '2 weeks ago', text: 'Helped my cycle return smoothly after weaning my daughter. My monthly cramps are so much more manageable now.' }
      ]
    },
    {
      id: 'prod-6',
      name: 'Restful Slumber & Gentle Nest Tea',
      category: ['teas', 'womens', 'children'],
      categoryLabel: 'Herbal Teas & Infusions',
      priceUSD: 26.00,
      stock: 8,
      image: 'assets/images/product-pregnancy-tea.jpg',
      badge: 'Family Evening Ritual',
      variants: [
        { id: 'v6-std', name: '7 oz / 200g Loose Leaf', priceUSD: 26.00, size: '200g Jar' },
        { id: 'v6-bndl', name: 'Slumber & Calm Twin Jars', priceUSD: 46.00, size: '2 x 200g Jars' }
      ],
      selectedVariantIndex: 0,
      rating: 4.9,
      reviewsCount: 112,
      shortDesc: 'Serene botanical blend of lavender, linden flower, catnip & sweet lemon balm to quiet active nervous systems.',
      fullDesc: 'A soothing evening tonic created for tired mothers, active nervous systems, and toddlers (ages 1+). Linden and lemon balm gently release tension, while French lavender and mild catnip invite deep restorative sleep without morning grogginess.',
      ingredients: 'Organic Linden Flower, Organic French Lavender Blossoms, Organic Lemon Balm Leaf, Organic German Chamomile Flowers, Organic Catnip Herb.',
      directions: 'Infuse 1 tablespoon in 8 oz hot water for 7-10 minutes. For toddlers over 12 months, prepare at half-strength (1/2 tsp in 4 oz water) and cool to lukewarm.',
      precautions: 'Safe for nursing mothers and children aged 1+. If pregnant, consult your care provider before use.',
      sourcing: 'Crafted with certified organic herbs grown on family herb farms in Provence and Oregon.',
      reviews: [
        { author: 'Khadija B.', rating: 5, date: '4 days ago', text: 'The aroma alone relaxes our entire household every night. My toddler sleeps peacefully through the night.' }
      ]
    }
  ];

  /* ==========================================================================
     DATA: WELLNESS ARTICLES & GLOSSARY & FAQS
     ========================================================================== */
  const ARTICLES = [
    {
      id: 'art-1',
      category: 'pregnancy',
      categoryLabel: 'Pregnancy Care',
      title: 'The Midwife’s Guide to Red Raspberry Leaf Across Trimesters',
      readTime: '5 min read',
      snippet: 'Unpack the science behind the most famous uterine tonic in obstetric phytotherapy, including exact timing and dosage recommendations.',
      body: `
        <p>Red Raspberry Leaf (<em>Rubus idaeus</em>) holds an ancient, venerated place in obstetric herbalism. Known as the premier uterine tonic, its leaves contain rich concentrations of fragarine—an alkaloid compound known to tone and balance pelvic muscles.</p>
        <p>Far from inducing preterm contractions, raspberry leaf acts as a mild amphoteric regulator: it helps uterine tissue contract with coordinated efficiency during labor while facilitating gentle relaxation between surges.</p>
        <div class="article-takeaways-box">
          <h4>Key Clinical Takeaways:</h4>
          <ul>
            <li><strong>First Trimester:</strong> Best avoided or used only under the direct supervision of an obstetric herbalist.</li>
            <li><strong>Second Trimester (Week 14–27):</strong> 1 cup daily of mild infusion provides iron, calcium, and magnesium.</li>
            <li><strong>Third Trimester (Week 28+):</strong> 2 to 3 cups daily encourages tissue tone and postpartum recovery speed.</li>
            <li><strong>Postpartum:</strong> Continues to aid uterine involution and reduce lingering lochia bleeding.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'art-2',
      category: 'lactation',
      categoryLabel: 'Breastfeeding & Postpartum',
      title: 'Nourishing the Fourth Trimester: Science-Backed Galactagogues',
      readTime: '6 min read',
      snippet: 'Discover how botanical herbs like fenugreek, fennel, and oat straw synergize to support milk ejection and maternal vitality.',
      body: `
        <p>The postpartum period—often termed the Fourth Trimester—is a time of intense physiological metamorphosis. Breast milk production requires enormous caloric energy, hydration, and precise neurohormonal coordination involving prolactin and oxytocin.</p>
        <div class="article-takeaways-box">
          <h4>Holistic Lactation Protocol:</h4>
          <ul>
            <li><strong>Hydration Base:</strong> Drink warm herbal infusions containing fennel and oat straw 30 minutes before nursing.</li>
            <li><strong>Frequent Milk Removal:</strong> Herbs work best as amplifiers; regular latching or pumping remains essential.</li>
            <li><strong>Nervous System Rest:</strong> High cortisol can block letdown. Chamomile drops soothe maternal adrenaline.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'art-3',
      category: 'children',
      categoryLabel: 'Children\'s Wellbeing',
      title: 'Gentle Calming Botanicals for Teething & Restless Little Ones',
      readTime: '4 min read',
      snippet: 'Safe, low-dose herbal solutions for soothing swollen infant gums, sensitive diaper areas, and turbulent bedtimes.',
      body: `
        <p>Infant skin and nervous systems are extraordinarily receptive and delicate. Our golden rule at Mena’s Nest is: low dose, pure ingredients, zero harsh essential oils, and maximum nourishment.</p>
        <div class="article-takeaways-box">
          <h4>Pediatric Safe Guidelines:</h4>
          <ul>
            <li><strong>External Comfort:</strong> Use whipped pure calendula and shea balm on irritated diaper zones and teething chins.</li>
            <li><strong>Mild Infusions:</strong> For children over 12 months, dilute chamomile-lemon balm tea gently soothes evening agitation.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'art-4',
      category: 'herbs',
      categoryLabel: 'Herbal Guides',
      title: 'Herbal Adaptogens & Tonics: Reclaiming Energy in Motherhood',
      readTime: '7 min read',
      snippet: 'How gentle nourishing adaptogens help mothers balance adrenal depletion, sleep disruption, and mood fluctuations.',
      body: `
        <p>Between nighttime feedings, infant care, and life demands, maternal depletion is a real phenomenon recognized by postpartum practitioners globally. Adaptogenic and nervine herbs assist the body in modulating cortisol and recovering from chronic sleep fragmentation.</p>
      `
    }
  ];

  const GLOSSARY = [
    {
      name: 'German Chamomile',
      latin: 'Matricaria chamomilla',
      stages: ['pregnancy', 'lactation', 'children'],
      safetyLabel: 'Universally Gentle',
      safetyClass: 'safety-safe',
      benefits: 'Calms spasmodic digestion, quiets the nervous system, eases pregnancy nausea, and provides anti-inflammatory skin soothing.',
      products: ['Nurture & Bloom Tea', 'Golden Flow Drops', 'Little Nest Balm', 'Restful Slumber Tea']
    },
    {
      name: 'Red Raspberry Leaf',
      latin: 'Rubus idaeus',
      stages: ['pregnancy', 'lactation'],
      safetyLabel: '2nd & 3rd Trimester',
      safetyClass: 'safety-safe',
      benefits: 'Contains fragarine to tone pelvic musculature; rich in bioavailable iron, magnesium, and calcium.',
      products: ['Nurture & Bloom Tea']
    },
    {
      name: 'Calendula Blossom',
      latin: 'Calendula officinalis',
      stages: ['pregnancy', 'lactation', 'children'],
      safetyLabel: 'Safe for All Stages',
      safetyClass: 'safety-safe',
      benefits: 'Skin-repair botanical that soothes eczema, speeds tissue recovery, prevents stretch marks, and cushions sensitive diaper zones.',
      products: ['Botanical Belly & Stretch Oil', 'Little Nest Calming Baby Balm']
    },
    {
      name: 'Fenugreek Seed',
      latin: 'Trigonella foenum-graecum',
      stages: ['lactation'],
      safetyLabel: 'Postpartum / Lactation Only',
      safetyClass: 'safety-caution',
      benefits: 'Potent traditional galactagogue containing phytoestrogens to stimulate milk duct tissue and promote steady letdown.',
      products: ['Golden Flow Lactation Drops']
    },
    {
      name: 'Milky Oat Straw',
      latin: 'Avena sativa',
      stages: ['pregnancy', 'lactation', 'children'],
      safetyLabel: 'Safe for All Stages',
      safetyClass: 'safety-safe',
      benefits: 'Deep restorative nutritive tonic for exhausted nervous systems; rich in silica, calcium, and B-complex vitamins.',
      products: ['Nurture & Bloom Tea', 'Golden Flow Drops']
    },
    {
      name: 'True Lavender',
      latin: 'Lavandula angustifolia',
      stages: ['pregnancy', 'lactation', 'children'],
      safetyLabel: 'Gentle Dilution Safe',
      safetyClass: 'safety-safe',
      benefits: 'Calming linalool aroma gently reduces pre-sleep agitation, eases muscular cramping, and soothes stressed skin.',
      products: ['Botanical Belly & Stretch Oil', 'Restful Slumber Tea']
    },
    {
      name: 'Chaste Tree Berry (Vitex)',
      latin: 'Vitex agnus-castus',
      stages: ['womens'],
      safetyLabel: 'Cycle Support Only',
      safetyClass: 'safety-caution',
      benefits: 'Modulates luteinizing hormone and progesterone balance, supporting regular ovulation and reducing premenstrual breast tenderness.',
      products: ['Vital Balance Women’s Tincture']
    }
  ];

  const FAQS = [
    {
      q: 'Are your herbal formulations safe during the first trimester of pregnancy?',
      a: 'During the first trimester (weeks 1–13), we advocate a low-intervention approach. Our Botanical Belly Oil is 100% safe from day one. However, internal herbal remedies such as our Nurture & Bloom Tea are formulated specifically for weeks 24 onwards. Always consult your healthcare provider.'
    },
    {
      q: 'How quickly do the Golden Flow Lactation Drops begin working?',
      a: 'Most nursing mothers observe fuller breasts and increased yield within 24 to 72 hours of consistent use when paired with adequate water intake and frequent nursing or pumping sessions.'
    },
    {
      q: 'Can the Little Nest Calming Baby Balm be used on newborns?',
      a: 'Yes! Formulated with 0% essential oils, fragrances, or chemical preservatives. It relies solely on edible-grade organic shea butter, beeswax, and slow-infused calendula, making it completely newborn safe.'
    },
    {
      q: 'How do discount codes and free shipping work?',
      a: 'Orders over $50 automatically unlock free standard shipping! You can also enter promo codes like MAMA10 (10% off) or NESTLOVE ($5 off) directly in your cart or checkout.'
    },
    {
      q: 'How do I track my order once placed?',
      a: 'Every confirmed order generates an Order Reference Number (e.g. #MN-84920). You can enter this into our "Track Order" lookup section anytime to view real-time laboratory blending and courier transit.'
    }
  ];

  /* ==========================================================================
     CURRENCY RATES & FORMATTER
     ========================================================================== */
  const CURRENCY_RATES = {
    USD: { symbol: '$', rate: 1.0 },
    GBP: { symbol: '£', rate: 0.79 },
    EUR: { symbol: '€', rate: 0.92 },
    NGN: { symbol: '₦', rate: 1500 },
    CAD: { symbol: 'CA$', rate: 1.38 }
  };
  let currentCurrency = 'USD';

  function formatPrice(amountUSD) {
    const { symbol, rate } = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
    const converted = amountUSD * rate;
    if (currentCurrency === 'NGN') {
      return `${symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  }

  /* ==========================================================================
     STATE: CART, WISHLIST, COUPONS & SHIPPING
     ========================================================================== */
  let cart = [];
  let wishlist = [];
  let appliedCoupon = null; // { code: 'MAMA10', type: 'pct', val: 0.10 } or { code: 'NESTLOVE', type: 'fixed', val: 5.0 }
  let selectedShippingMethod = 'standard'; // 'standard', 'express', 'courier'

  const COUPONS = {
    'MAMA10': { type: 'pct', val: 0.10, desc: '10% Off Your Entire Nest' },
    'NESTLOVE': { type: 'fixed', val: 5.00, desc: '$5 Off Order' },
    'FREESHIP': { type: 'freeship', val: 0, desc: 'Complimentary Free Express Shipping' }
  };

  function loadStorage() {
    try {
      const savedCart = localStorage.getItem('menas_nest_cart');
      if (savedCart) cart = JSON.parse(savedCart);
    } catch (e) { cart = []; }

    try {
      const savedWish = localStorage.getItem('menas_nest_wishlist');
      if (savedWish) wishlist = JSON.parse(savedWish);
    } catch (e) { wishlist = []; }

    updateCartUI();
    updateWishlistUI();
  }

  function saveCart() {
    try {
      localStorage.setItem('menas_nest_cart', JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  function saveWishlist() {
    try {
      localStorage.setItem('menas_nest_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
    updateWishlistUI();
  }

  /* Wishlist Functions */
  function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast(`Removed from Wishlist`, 'info');
    } else {
      wishlist.push(productId);
      showToast(`Saved "${product ? product.name : 'Remedy'}" to your Wishlist! 🤍`, 'success');
    }
    saveWishlist();
    renderProducts();
  }

  function updateWishlistUI() {
    const badge = document.getElementById('wishlist-count-badge');
    const drawerCount = document.getElementById('wishlist-item-count');
    const container = document.getElementById('wishlist-items-container');

    if (badge) badge.textContent = wishlist.length;
    if (drawerCount) drawerCount.textContent = `${wishlist.length} saved`;

    if (!container) return;

    if (wishlist.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-message">
          <div class="cart-empty-icon">🤍</div>
          <h4>Your Wishlist is Empty</h4>
          <p>Save favorite botanicals to revisit when you are ready to order.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = wishlist.map(pid => {
      const prod = PRODUCTS.find(p => p.id === pid);
      if (!prod) return '';
      return `
        <div class="cart-item-row">
          <img src="${prod.image}" alt="${prod.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${prod.name}</h4>
            <p class="cart-item-price">${formatPrice(prod.priceUSD)}</p>
            <button class="btn btn-primary btn-sm" onclick="window.addToCart('${prod.id}', 1); window.toggleWishlist('${prod.id}');" style="margin-top:0.4rem; padding:0.35rem 0.85rem; font-size:0.75rem;">
              Move to Cart
            </button>
          </div>
          <button class="cart-item-remove-btn" onclick="window.toggleWishlist('${prod.id}')" title="Remove">✕</button>
        </div>
      `;
    }).join('');
  }

  /* Cart Functions */
  function addToCart(productId, quantity = 1, variantIndex = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const vIdx = variantIndex !== null ? variantIndex : product.selectedVariantIndex || 0;
    const variant = product.variants && product.variants[vIdx] ? product.variants[vIdx] : {
      id: `${product.id}-default`,
      name: product.size || 'Standard Size',
      priceUSD: product.priceUSD,
      size: product.size
    };

    const cartKey = `${product.id}-${variant.id}`;
    const existing = cart.find(item => item.cartKey === cartKey);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        cartKey: cartKey,
        id: product.id,
        variantId: variant.id,
        variantName: variant.name,
        name: product.name,
        priceUSD: variant.priceUSD,
        image: product.image,
        size: variant.size || product.size,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`Added ${quantity}x "${product.name}" (${variant.name}) to cart! 🌿`, 'success');
    openCartDrawer();
  }

  function updateQuantity(cartKey, delta) {
    const item = cart.find(i => i.cartKey === cartKey);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.cartKey !== cartKey);
    }
    saveCart();
  }

  function removeFromCart(cartKey) {
    cart = cart.filter(i => i.cartKey !== cartKey);
    saveCart();
    showToast('Remedy removed from cart', 'info');
  }

  function getCartSubtotalUSD() {
    return cart.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);
  }

  function getCartDiscountUSD() {
    const subtotal = getCartSubtotalUSD();
    if (!appliedCoupon) return 0;
    if (appliedCoupon.type === 'pct') {
      return subtotal * appliedCoupon.val;
    } else if (appliedCoupon.type === 'fixed') {
      return Math.min(subtotal, appliedCoupon.val);
    }
    return 0;
  }

  function getShippingCostUSD() {
    const subtotal = getCartSubtotalUSD();
    if (appliedCoupon && appliedCoupon.type === 'freeship') return 0;

    if (selectedShippingMethod === 'standard') {
      return subtotal >= 50.0 ? 0.00 : 4.99;
    } else if (selectedShippingMethod === 'express') {
      return 12.00;
    } else if (selectedShippingMethod === 'courier') {
      return 6.50;
    }
    return 0.00;
  }

  function getEstimatedTaxUSD() {
    const discounted = Math.max(0, getCartSubtotalUSD() - getCartDiscountUSD());
    return discounted * 0.05; // 5% estimated tax
  }

  function getGrandTotalUSD() {
    const subtotal = getCartSubtotalUSD();
    const discount = getCartDiscountUSD();
    const shipping = getShippingCostUSD();
    const tax = getEstimatedTaxUSD();
    return Math.max(0, subtotal - discount + shipping + tax);
  }

  function getCartTotalItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }

  function updateCartUI() {
    const countBadge = document.getElementById('cart-count-badge');
    const drawerItemCount = document.getElementById('drawer-item-count');
    const container = document.getElementById('cart-items-container');
    const subtotalDisplay = document.getElementById('cart-subtotal-price');
    const discountRow = document.getElementById('cart-discount-row');
    const discountAmtDisplay = document.getElementById('cart-discount-amount');
    const couponNameDisplay = document.getElementById('applied-coupon-name');
    const shippingDisplay = document.getElementById('cart-shipping-price');
    const grandTotalDisplay = document.getElementById('cart-grand-total');
    const shippingText = document.getElementById('shipping-status-text');
    const shippingProgress = document.getElementById('shipping-progress-fill');

    const totalCount = getCartTotalItemCount();
    const subtotal = getCartSubtotalUSD();
    const discount = getCartDiscountUSD();
    const shipping = getShippingCostUSD();
    const grandTotal = getGrandTotalUSD();

    if (countBadge) countBadge.textContent = totalCount;
    if (drawerItemCount) drawerItemCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    if (subtotalDisplay) subtotalDisplay.textContent = formatPrice(subtotal);

    // Discount line
    if (discountRow) {
      if (appliedCoupon && discount > 0) {
        discountRow.classList.remove('hidden');
        if (couponNameDisplay) couponNameDisplay.textContent = appliedCoupon.code;
        if (discountAmtDisplay) discountAmtDisplay.textContent = `-${formatPrice(discount)}`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    if (shippingDisplay) {
      shippingDisplay.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    }
    if (grandTotalDisplay) grandTotalDisplay.textContent = formatPrice(grandTotal);

    // Free shipping thermometer ($50 threshold)
    const threshold = 50.0;
    if (subtotal >= threshold) {
      if (shippingText) shippingText.innerHTML = '🎉 You unlocked <strong>FREE Shipping & Herbal Sample</strong>!';
      if (shippingProgress) shippingProgress.style.width = '100%';
    } else {
      const remaining = threshold - subtotal;
      if (shippingText) shippingText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> for FREE Shipping & Tea Sample`;
      const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
      if (shippingProgress) shippingProgress.style.width = `${pct}%`;
    }

    // Render items
    if (!container) return;
    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-message">
          <div class="cart-empty-icon">🌿</div>
          <h4>Your nest is empty</h4>
          <p>Explore our organic apothecary remedies to begin your wellness ritual.</p>
          <a href="#shop" class="btn btn-secondary btn-sm" onclick="closeCartDrawer();" style="margin-top: 1rem;">Explore Products</a>
        </div>
      `;
      return;
    }

    container.innerHTML = cart.map(item => `
      <div class="cart-item-row" data-key="${item.cartKey}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <p style="font-size:0.75rem; color:var(--color-neutral-500);">${item.variantName || item.size}</p>
          <p class="cart-item-price">${formatPrice(item.priceUSD)}</p>
          <div class="cart-quantity-stepper">
            <button class="qty-btn" onclick="window.updateQuantity('${item.cartKey}', -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="window.updateQuantity('${item.cartKey}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove-btn" onclick="window.removeFromCart('${item.cartKey}')" aria-label="Remove item" title="Remove">✕</button>
      </div>
    `).join('');
  }

  /* Coupon Code Application */
  const btnApplyCoupon = document.getElementById('btn-apply-coupon');
  const cartCouponInput = document.getElementById('cart-coupon-input');
  const couponFeedback = document.getElementById('coupon-feedback');

  function applyCouponCode(codeStr) {
    if (!codeStr) return;
    const code = codeStr.trim().toUpperCase();
    if (COUPONS[code]) {
      appliedCoupon = { code, ...COUPONS[code] };
      if (couponFeedback) {
        couponFeedback.className = 'coupon-feedback success';
        couponFeedback.textContent = `✓ Coupon "${code}" applied: ${COUPONS[code].desc}!`;
      }
      updateCartUI();
      updateCheckoutSummary();
      showToast(`Coupon "${code}" applied! 🎉`, 'success');
    } else {
      if (couponFeedback) {
        couponFeedback.className = 'coupon-feedback error';
        couponFeedback.textContent = 'Invalid promo code. Try "MAMA10" or "NESTLOVE".';
      }
    }
  }

  if (btnApplyCoupon && cartCouponInput) {
    btnApplyCoupon.addEventListener('click', () => {
      applyCouponCode(cartCouponInput.value);
    });
  }

  window.applyCheckoutCoupon = function() {
    const coInput = document.getElementById('co-coupon-input');
    if (coInput) applyCouponCode(coInput.value);
  };

  /* ==========================================================================
     DRAWERS & MODALS LOGIC
     ========================================================================== */
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartTriggerBtn = document.getElementById('cart-trigger-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');

  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const wishlistOverlay = document.getElementById('wishlist-overlay');
  const wishlistTriggerBtn = document.getElementById('wishlist-trigger-btn');
  const wishlistCloseBtn = document.getElementById('wishlist-close-btn');

  function openCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove('hidden');
    if (cartOverlay) cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.add('hidden');
    if (cartOverlay) cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function openWishlistDrawer() {
    if (wishlistDrawer) wishlistDrawer.classList.remove('hidden');
    if (wishlistOverlay) wishlistOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlistDrawer() {
    if (wishlistDrawer) wishlistDrawer.classList.add('hidden');
    if (wishlistOverlay) wishlistOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  if (wishlistTriggerBtn) wishlistTriggerBtn.addEventListener('click', openWishlistDrawer);
  if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
  if (wishlistOverlay) wishlistOverlay.addEventListener('click', closeWishlistDrawer);

  const btnAddAllWishlist = document.getElementById('btn-add-all-wishlist');
  if (btnAddAllWishlist) {
    btnAddAllWishlist.addEventListener('click', () => {
      if (wishlist.length === 0) return;
      wishlist.forEach(pid => addToCart(pid, 1));
      wishlist = [];
      saveWishlist();
      closeWishlistDrawer();
      showToast('All saved remedies moved to cart! 🌿', 'success');
    });
  }

  /* ==========================================================================
     PRODUCT CATALOG & VARIANT SELECTOR
     ========================================================================== */
  const productsGrid = document.getElementById('products-grid');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const shopSearch = document.getElementById('shop-filter-search');
  const productCountDisplay = document.getElementById('product-count-display');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function renderProducts() {
    if (!productsGrid) return;

    const filtered = PRODUCTS.filter(product => {
      const matchesCategory = currentCategory === 'all' || product.category.includes(currentCategory);
      const matchesSearch = !currentSearchQuery || 
        product.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        product.ingredients.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(currentSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (productCountDisplay) {
      productCountDisplay.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-neutral-500);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>No formulations found</h3>
          <p>Try clearing your search or switching categories.</p>
          <button class="btn btn-secondary btn-sm" onclick="window.resetShopFilters()" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(prod => {
      const isWish = wishlist.includes(prod.id);
      const selVariant = prod.variants[prod.selectedVariantIndex || 0];
      const isLowStock = prod.stock && prod.stock <= 8;

      return `
        <div class="product-card" data-id="${prod.id}">
          <span class="product-card-badge">${prod.badge}</span>
          
          <!-- Wishlist Heart Button -->
          <button class="btn-wishlist-toggle ${isWish ? 'active' : ''}" onclick="window.toggleWishlist('${prod.id}')" aria-label="Save to wishlist" title="Save remedy">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>

          <div class="product-image-wrapper">
            <img src="${prod.image}" alt="${prod.name}" loading="lazy">
            <div class="product-quick-view-overlay">
              <button class="btn-quick-view" onclick="window.openProductModal('${prod.id}')">
                Quick View & Reviews
              </button>
            </div>
          </div>

          <div class="product-card-body">
            <span class="product-category-tag">${prod.categoryLabel}</span>
            <h3 class="product-card-title" onclick="window.openProductModal('${prod.id}')">${prod.name}</h3>
            <p class="product-card-desc">${prod.shortDesc}</p>
            
            <!-- Variant Selector Chips on Card -->
            <div class="variant-selector-wrap">
              <span class="variant-label">Select Option:</span>
              <div class="variant-chips-row">
                ${prod.variants.map((v, vIdx) => `
                  <button type="button" class="variant-chip ${vIdx === (prod.selectedVariantIndex || 0) ? 'active' : ''}" onclick="window.setProductVariant('${prod.id}', ${vIdx})">
                    ${v.name.split(' (')[0]}
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="product-meta-row">
              <div class="product-stars-row">
                <span class="product-stars">★★★★★</span>
                <span>${prod.rating} (${prod.reviewsCount})</span>
              </div>
              <span class="stock-status-pill ${isLowStock ? 'low-stock' : ''}">
                <span class="stock-pulse-dot"></span>
                ${isLowStock ? `Only ${prod.stock} left in batch` : 'In Stock'}
              </span>
            </div>

            <div class="product-card-footer">
              <div class="product-price-box">
                <span class="product-price">${formatPrice(selVariant.priceUSD)}</span>
                <span style="font-size:0.72rem; color:var(--color-neutral-500);">${selVariant.size}</span>
              </div>
              <button class="btn btn-primary btn-add-cart" onclick="window.addToCart('${prod.id}', 1, ${prod.selectedVariantIndex || 0})">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.setProductVariant = function(productId, variantIndex) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    prod.selectedVariantIndex = variantIndex;
    renderProducts();
  };

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderProducts();
    });
  });

  if (shopSearch) {
    shopSearch.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  window.resetShopFilters = function() {
    currentCategory = 'all';
    currentSearchQuery = '';
    if (shopSearch) shopSearch.value = '';
    categoryTabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
    renderProducts();
  };

  /* ==========================================================================
     PRODUCT DETAIL MODAL WITH REVIEWS SYSTEM
     ========================================================================== */
  const productModalOverlay = document.getElementById('product-modal-overlay');
  const productModalClose = document.getElementById('product-modal-close');
  const productModalLayout = document.getElementById('product-modal-layout');

  window.openProductModal = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !productModalLayout) return;

    const selVariant = product.variants[product.selectedVariantIndex || 0];

    productModalLayout.innerHTML = `
      <div class="product-modal-gallery">
        <img src="${product.image}" alt="${product.name}" class="product-modal-img">
      </div>
      <div class="product-modal-details">
        <span class="modal-product-cat">${product.categoryLabel}</span>
        <h2 class="modal-product-title">${product.name}</h2>
        <div class="product-stars-row" style="margin-bottom: 0.75rem;">
          <span class="product-stars">★★★★★</span>
          <span>${product.rating} Rating (${product.reviewsCount} customer reviews) • <strong style="color:var(--color-sage-dark);">Small Batch Certified</strong></span>
        </div>
        <div class="modal-product-price" id="modal-price-display">${formatPrice(selVariant.priceUSD)}</div>
        <p class="modal-product-desc">${product.fullDesc}</p>

        <!-- Variants on modal -->
        <div class="variant-selector-wrap" style="margin-bottom: 1.25rem;">
          <span class="variant-label">Choose Size / Package:</span>
          <div class="variant-chips-row">
            ${product.variants.map((v, vIdx) => `
              <button type="button" class="variant-chip ${vIdx === (product.selectedVariantIndex || 0) ? 'active' : ''}" onclick="window.selectModalVariant('${product.id}', ${vIdx})">
                ${v.name} — ${formatPrice(v.priceUSD)}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Tabbed Information -->
        <div class="modal-tabs-nav">
          <button class="modal-tab-btn active" data-tab="ingredients">Ingredients</button>
          <button class="modal-tab-btn" data-tab="directions">Directions</button>
          <button class="modal-tab-btn" data-tab="precautions">Safety</button>
          <button class="modal-tab-btn" data-tab="reviews">Verified Reviews (${product.reviews ? product.reviews.length : 0})</button>
        </div>

        <div class="modal-tab-pane active" id="tab-ingredients">
          <p><strong>Certified Botanicals:</strong> ${product.ingredients}</p>
        </div>
        <div class="modal-tab-pane" id="tab-directions">
          <p><strong>Suggested Protocol:</strong> ${product.directions}</p>
        </div>
        <div class="modal-tab-pane" id="tab-precautions">
          <p><strong>Maternal Care Note:</strong> ${product.precautions}</p>
        </div>
        
        <!-- Reviews Tab -->
        <div class="modal-tab-pane" id="tab-reviews">
          <div class="reviews-list-wrap">
            ${(product.reviews || []).map(r => `
              <div style="padding:0.75rem 0; border-bottom:1px solid var(--color-cream-border);">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong style="font-size:0.85rem;">${r.author}</strong>
                  <span style="font-size:0.75rem; color:var(--color-neutral-500);">${r.date}</span>
                </div>
                <div style="color:#F59E0B; font-size:0.75rem;">${'★'.repeat(r.rating)}</div>
                <p style="font-size:0.85rem; margin-top:0.25rem; color:var(--color-neutral-700);">${r.text}</p>
              </div>
            `).join('')}

            <!-- Write a Review Form -->
            <form style="margin-top:1.25rem; background:var(--color-cream-warm); padding:1rem; border-radius:var(--radius-sm);" onsubmit="event.preventDefault(); window.submitCustomerReview('${product.id}', this);">
              <h4 style="font-size:0.95rem; margin-bottom:0.5rem;">Add Your Experience</h4>
              <div class="form-row" style="margin-bottom:0.5rem;">
                <input type="text" name="reviewerName" placeholder="Your name (e.g. Maya)" required style="padding:0.45rem 0.65rem; font-size:0.8rem; border:1px solid var(--color-cream-border); border-radius:4px;">
                <select name="reviewRating" style="padding:0.45rem 0.65rem; font-size:0.8rem; border:1px solid var(--color-cream-border); border-radius:4px;">
                  <option value="5">★★★★★ (5 Stars)</option>
                  <option value="4">★★★★☆ (4 Stars)</option>
                  <option value="3">★★★☆☆ (3 Stars)</option>
                </select>
              </div>
              <textarea name="reviewText" placeholder="Share how this herbal formula supported your journey..." required rows="2" style="width:100%; padding:0.45rem 0.65rem; font-size:0.8rem; border:1px solid var(--color-cream-border); border-radius:4px; margin-bottom:0.5rem;"></textarea>
              <button type="submit" class="btn btn-secondary btn-sm">Submit Verified Review</button>
            </form>
          </div>
        </div>

        <div class="modal-cta-row">
          <button class="btn btn-primary" onclick="window.addToCart('${product.id}', 1, ${product.selectedVariantIndex || 0}); window.closeProductModal();">
            Add to Nest Cart
          </button>
          <a href="https://wa.me/15551234567?text=Hello%20Mena's%20Nest!%20I'm%20asking%20about%20${encodeURIComponent(product.name)}" target="_blank" class="btn btn-whatsapp btn-sm">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    `;

    // Tab listeners
    const tabBtns = productModalLayout.querySelectorAll('.modal-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetTab = btn.dataset.tab;
        productModalLayout.querySelectorAll('.modal-tab-pane').forEach(pane => {
          pane.classList.toggle('active', pane.id === `tab-${targetTab}`);
        });
      });
    });

    if (productModalOverlay) productModalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.selectModalVariant = function(productId, vIdx) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    prod.selectedVariantIndex = vIdx;
    window.openProductModal(productId);
  };

  window.submitCustomerReview = function(productId, form) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    const name = form.reviewerName.value.trim();
    const rating = parseInt(form.reviewRating.value, 10);
    const text = form.reviewText.value.trim();

    if (!prod.reviews) prod.reviews = [];
    prod.reviews.unshift({ author: name, rating, date: 'Just now', text });
    prod.reviewsCount = (prod.reviewsCount || 0) + 1;

    showToast(`Thank you, ${name}! Your review has been published. 🌸`, 'success');
    window.openProductModal(productId);
  };

  window.closeProductModal = function() {
    if (productModalOverlay) productModalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (productModalClose) productModalClose.addEventListener('click', window.closeProductModal);
  if (productModalOverlay) {
    productModalOverlay.addEventListener('click', (e) => {
      if (e.target === productModalOverlay) window.closeProductModal();
    });
  }

  /* ==========================================================================
     CHECKOUT ENGINE V2 (3-STEP EXPERIENCE)
     ========================================================================== */
  const webCheckoutBtn = document.getElementById('web-checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal-overlay');
  const checkoutModalClose = document.getElementById('checkout-modal-close');

  let currentCheckoutStep = 1;
  let currentPaymentMethod = 'card';

  function updateCheckoutSummary() {
    const listContainer = document.getElementById('checkout-items-list');
    const badgeCount = document.getElementById('summary-badge-count');
    const subtotalDisplay = document.getElementById('co-subtotal');
    const discountRow = document.getElementById('co-discount-row');
    const discountAmtDisplay = document.getElementById('co-discount-amt');
    const shippingAmtDisplay = document.getElementById('co-shipping-amt');
    const taxAmtDisplay = document.getElementById('co-tax-amt');
    const grandTotalDisplay = document.getElementById('co-grand-total');

    const totalCount = getCartTotalItemCount();
    const subtotal = getCartSubtotalUSD();
    const discount = getCartDiscountUSD();
    const shipping = getShippingCostUSD();
    const tax = getEstimatedTaxUSD();
    const grandTotal = getGrandTotalUSD();

    if (badgeCount) badgeCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    if (subtotalDisplay) subtotalDisplay.textContent = formatPrice(subtotal);

    if (discountRow) {
      if (appliedCoupon && discount > 0) {
        discountRow.classList.remove('hidden');
        if (discountAmtDisplay) discountAmtDisplay.textContent = `-${formatPrice(discount)}`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    if (shippingAmtDisplay) shippingAmtDisplay.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    if (taxAmtDisplay) taxAmtDisplay.textContent = formatPrice(tax);
    if (grandTotalDisplay) grandTotalDisplay.textContent = formatPrice(grandTotal);

    if (listContainer) {
      listContainer.innerHTML = cart.map(item => `
        <div class="checkout-item-compact">
          <img src="${item.image}" alt="${item.name}" class="checkout-item-img">
          <div class="checkout-item-info">
            <h5 class="checkout-item-name">${item.name}</h5>
            <span class="checkout-item-qty">Qty: ${item.quantity} × ${formatPrice(item.priceUSD)}</span>
          </div>
          <span class="checkout-item-price">${formatPrice(item.priceUSD * item.quantity)}</span>
        </div>
      `).join('');
    }
  }

  window.goToCheckoutStep = function(stepNum) {
    currentCheckoutStep = stepNum;
    for (let i = 1; i <= 3; i++) {
      const pane = document.getElementById(`checkout-step-${i}`);
      const tab = document.querySelector(`.checkout-step-tab[data-step="${i}"]`);
      if (pane) pane.classList.toggle('active', i === stepNum);
      if (tab) tab.classList.toggle('active', i <= stepNum);
    }
  };

  window.updateCheckoutShipping = function(method) {
    selectedShippingMethod = method;
    updateCheckoutSummary();
    updateCartUI();
  };

  window.switchPaymentTab = function(method) {
    currentPaymentMethod = method;
    document.querySelectorAll('.payment-tab').forEach(t => t.classList.toggle('active', t.dataset.pay === method));
    document.querySelectorAll('.payment-pane').forEach(p => p.classList.toggle('active', p.id === `pane-pay-${method}`));
  };

  /* Interactive Card Formatting */
  window.formatCardNumber = function(input) {
    let val = input.value.replace(/\D/g, '');
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    input.value = formatted.slice(0, 19);

    const preview = document.getElementById('preview-card-num');
    if (preview) preview.textContent = formatted || '•••• •••• •••• 4242';

    // Auto detect brand
    const brand = document.getElementById('preview-card-brand');
    if (brand) {
      if (val.startsWith('4')) brand.textContent = 'VISA';
      else if (val.startsWith('5')) brand.textContent = 'MASTERCARD';
      else if (val.startsWith('3')) brand.textContent = 'AMEX';
      else brand.textContent = 'CARD';
    }
  };

  window.updateCardHolder = function(input) {
    const preview = document.getElementById('preview-card-name');
    if (preview) preview.textContent = (input.value || 'SARAH MITCHELL').toUpperCase();
  };

  window.formatCardExpiry = function(input) {
    let val = input.value.replace(/\D/g, '');
    if (val.length >= 2) {
      val = val.slice(0, 2) + '/' + val.slice(2, 4);
    }
    input.value = val.slice(0, 5);
    const preview = document.getElementById('preview-card-exp');
    if (preview) preview.textContent = val || '08/28';
  };

  if (webCheckoutBtn) {
    webCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your cart is empty! Add remedies first.', 'info');
        return;
      }
      closeCartDrawer();
      updateCheckoutSummary();
      window.goToCheckoutStep(1);
      if (checkoutModal) checkoutModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (checkoutModalClose) {
    checkoutModalClose.addEventListener('click', () => {
      if (checkoutModal) checkoutModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  /* Finalize Ecommerce Order Submission */
  window.finalizeEcommerceOrder = function() {
    const fname = document.getElementById('co-fname')?.value.trim() || 'Elena';
    const lname = document.getElementById('co-lname')?.value.trim() || 'Williams';
    const email = document.getElementById('co-email')?.value.trim() || 'client@example.com';
    const phone = document.getElementById('co-phone')?.value.trim() || '+1 555 123 4567';
    const address = document.getElementById('co-address')?.value.trim() || '14 Elm Street';
    const city = document.getElementById('co-city')?.value.trim() || 'New York';
    const postal = document.getElementById('co-postal')?.value.trim() || '10001';

    const orderId = `#MN-${Math.floor(10000 + Math.random() * 90000)}`;
    const grandTotal = getGrandTotalUSD();
    const purchasedItems = [...cart];

    // Save order in localStorage for tracking
    const orderData = {
      orderId,
      customerName: `${fname} ${lname}`,
      email,
      phone,
      address: `${address}, ${city} ${postal}`,
      paymentMethod: currentPaymentMethod.toUpperCase(),
      shippingMethod: selectedShippingMethod,
      totalUSD: grandTotal,
      items: purchasedItems,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Handcrafted Batching in Apothecary'
    };

    try {
      let orders = JSON.parse(localStorage.getItem('menas_nest_orders') || '[]');
      orders.unshift(orderData);
      localStorage.setItem('menas_nest_orders', JSON.stringify(orders));
    } catch (e) {}

    // Reset Cart
    cart = [];
    appliedCoupon = null;
    saveCart();

    if (checkoutModal) checkoutModal.classList.add('hidden');

    // Open Digital Receipt Modal
    openReceiptModal(orderData);
    showToast(`Order ${orderId} confirmed! Check your receipt. 🌸`, 'success');
  };

  /* ==========================================================================
     ORDER CONFIRMATION & RECEIPT MODAL
     ========================================================================== */
  const receiptModal = document.getElementById('order-receipt-modal');
  const receiptModalClose = document.getElementById('receipt-modal-close');

  function openReceiptModal(order) {
    if (!receiptModal) return;

    document.getElementById('receipt-order-id').textContent = order.orderId;
    document.getElementById('receipt-customer-name').textContent = order.customerName;
    document.getElementById('receipt-address-text').textContent = order.address;
    document.getElementById('receipt-contact-text').textContent = `${order.email} • ${order.phone}`;
    document.getElementById('receipt-payment-method').textContent = `Method: ${order.paymentMethod} • Authorized`;
    document.getElementById('receipt-shipping-method').textContent = `Speed: ${order.shippingMethod.toUpperCase()} Delivery`;

    const table = document.getElementById('receipt-items-table');
    if (table) {
      table.innerHTML = `
        ${order.items.map(it => `
          <div class="receipt-row">
            <span>${it.name} (${it.size}) × ${it.quantity}</span>
            <strong>${formatPrice(it.priceUSD * it.quantity)}</strong>
          </div>
        `).join('')}
        <div class="receipt-row receipt-total-row">
          <span>Total Paid</span>
          <span>${formatPrice(order.totalUSD)}</span>
        </div>
      `;
    }

    const btnWa = document.getElementById('btn-receipt-whatsapp');
    if (btnWa) {
      btnWa.onclick = () => {
        let msg = `🌿 *Receipt for Order ${order.orderId}*\nCustomer: ${order.customerName}\nTotal: ${formatPrice(order.totalUSD)}\nDelivery Address: ${order.address}\nPlease share my package tracking link!`;
        window.open(`https://wa.me/15551234567?text=${encodeURIComponent(msg)}`, '_blank');
      };
    }

    receiptModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  if (receiptModalClose) {
    receiptModalClose.addEventListener('click', () => {
      receiptModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  window.jumpToOrderTracking = function() {
    if (receiptModal) receiptModal.classList.add('hidden');
    document.body.style.overflow = '';
    const trackerEl = document.getElementById('order-tracker');
    if (trackerEl) {
      trackerEl.scrollIntoView({ behavior: 'smooth' });
      const currentOrderId = document.getElementById('receipt-order-id')?.textContent;
      if (currentOrderId) window.fillDemoTracker(currentOrderId);
    }
  };

  /* ==========================================================================
     ORDER TRACKER LOOKUP ENGINE
     ========================================================================== */
  window.fillDemoTracker = function(orderId) {
    const input = document.getElementById('tracker-order-id-input');
    if (input) input.value = orderId;
    window.lookupOrderStatus();
  };

  window.lookupOrderStatus = function() {
    const input = document.getElementById('tracker-order-id-input');
    if (!input || !input.value) return;

    const orderId = input.value.trim().toUpperCase();
    const resultPanel = document.getElementById('tracker-result-panel');

    // Retrieve from saved orders or demo orders
    let orderMatch = null;
    try {
      const orders = JSON.parse(localStorage.getItem('menas_nest_orders') || '[]');
      orderMatch = orders.find(o => o.orderId.toUpperCase() === orderId);
    } catch (e) {}

    if (!orderMatch) {
      // Demo order mocks
      if (orderId === '#MN-2026') {
        orderMatch = {
          orderId: '#MN-2026',
          customerName: 'Sarah Jenkins',
          eta: 'Nov 3, 2026',
          courier: 'Botanical Express #BX-99482',
          items: [{ name: 'Nurture & Bloom Pregnancy Tea', qty: 1, size: '8 oz' }, { name: 'Botanical Belly & Stretch Oil', qty: 1, size: '100 ml' }],
          step: 3
        };
      } else if (orderId === '#MN-4109') {
        orderMatch = {
          orderId: '#MN-4109',
          customerName: 'Elena Rostova',
          eta: 'Nov 5, 2026',
          courier: 'Royal Herbal Mail #RH-44219',
          items: [{ name: 'Little Nest Calming Baby Balm', qty: 2, size: '60 ml' }],
          step: 2
        };
      } else {
        orderMatch = {
          orderId: orderId,
          customerName: 'Valued Client',
          eta: 'Nov 4, 2026',
          courier: 'Herbal Care Logistics #HC-7718',
          items: [{ name: 'Handcrafted Small-Batch Remedies', qty: 1, size: 'Standard' }],
          step: 2
        };
      }
    }

    if (resultPanel) {
      document.getElementById('track-disp-id').textContent = orderMatch.orderId;
      document.getElementById('track-disp-eta').textContent = orderMatch.eta || 'Nov 3, 2026';
      document.getElementById('track-disp-courier').textContent = orderMatch.courier || 'Botanical Express';

      const itemsSummary = document.getElementById('tracker-items-summary');
      if (itemsSummary && orderMatch.items) {
        itemsSummary.innerHTML = `
          <div style="background:var(--color-cream-warm); padding:1rem 1.25rem; border-radius:var(--radius-sm); margin-top:1.5rem; font-size:0.85rem;">
            <strong>Package Contents:</strong>
            <ul style="list-style:disc; margin-left:1.25rem; margin-top:0.35rem;">
              ${orderMatch.items.map(it => `<li>${it.name || it} (${it.size || 'Apothecary Jar'})</li>`).join('')}
            </ul>
          </div>
        `;
      }

      resultPanel.classList.remove('hidden');
      resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      showToast(`Found tracking status for ${orderMatch.orderId} 📦`, 'info');
    }
  };

  /* ==========================================================================
     SOCIAL PROOF LIVE TICKER
     ========================================================================== */
  const ticker = document.getElementById('recent-purchase-ticker');
  const tickerText = document.getElementById('ticker-text');
  const tickerTime = document.getElementById('ticker-time');

  const SOCIAL_PURCHASES = [
    { name: 'Sarah', city: 'London', item: 'Golden Flow Lactation Drops', time: '2m ago' },
    { name: 'Chioma', city: 'Lagos', item: 'Nurture & Bloom Pregnancy Tea', time: '5m ago' },
    { name: 'Elena', city: 'Toronto', item: 'Little Nest Calming Baby Balm', time: '8m ago' },
    { name: 'Amina', city: 'Nairobi', item: 'Botanical Belly & Stretch Oil', time: '12m ago' },
    { name: 'Maya', city: 'New York', item: 'Vital Balance Women’s Tincture', time: '15m ago' }
  ];
  let tickerIdx = 0;

  function rotateSocialProof() {
    if (!ticker || !tickerText) return;
    const item = SOCIAL_PURCHASES[tickerIdx % SOCIAL_PURCHASES.length];
    tickerIdx++;

    tickerText.innerHTML = `<strong>${item.name}</strong> from <strong>${item.city}</strong> just purchased <em>${item.item}</em>`;
    tickerTime.textContent = `${item.time} • Verified Mama Order`;
    ticker.classList.remove('hidden');

    setTimeout(() => {
      ticker.classList.add('hidden');
    }, 6000);
  }

  // Trigger social proof ticker periodically
  setTimeout(rotateSocialProof, 3500);
  setInterval(rotateSocialProof, 28000);

  /* ==========================================================================
     WHATSAPP ORDER DIRECT BUTTON
     ========================================================================== */
  const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your cart is empty! Add remedies before ordering.', 'info');
        return;
      }

      const subtotal = getCartSubtotalUSD();
      let message = `🌿 *Hello Mena's Nest!* \nI would like to order the following organic remedies from your website:\n\n`;

      cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}* (${item.variantName || item.size})\n   Qty: ${item.quantity} × ${formatPrice(item.priceUSD)} = ${formatPrice(item.priceUSD * item.quantity)}\n`;
      });

      if (appliedCoupon) {
        message += `\n🏷️ *Promo Code:* ${appliedCoupon.code} (-${formatPrice(getCartDiscountUSD())})`;
      }

      const note = document.getElementById('cart-gift-note')?.value.trim();
      if (note) {
        message += `\n🎁 *Gift Card Note:* "${note}"`;
      }

      message += `\n\n📦 *Grand Total:* ${formatPrice(getGrandTotalUSD())}`;
      message += `\n\nPlease confirm availability and payment details. Thank you!`;

      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/15551234567?text=${encoded}`, '_blank');
    });
  }

  /* ==========================================================================
     GLOBAL TOAST NOTIFICATION ENGINE
     ========================================================================== */
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : 'ℹ'}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  /* Expose globals for inline HTML triggers */
  window.addToCart = addToCart;
  window.updateQuantity = updateQuantity;
  window.removeFromCart = removeFromCart;
  window.openCartDrawer = openCartDrawer;
  window.closeCartDrawer = closeCartDrawer;
  window.toggleWishlist = toggleWishlist;
  window.openWishlistDrawer = openWishlistDrawer;
  window.closeWishlistDrawer = closeWishlistDrawer;
  window.showToast = showToast;

  /* ==========================================================================
     RENDER ARTICLES, GLOSSARY, FAQS & INITIALIZE
     ========================================================================== */
  const articlesGrid = document.getElementById('articles-grid');
  if (articlesGrid) {
    articlesGrid.innerHTML = ARTICLES.map(art => `
      <div class="article-card" onclick="window.openArticleModal('${art.id}')">
        <div class="article-card-header">
          <span>🌿</span>
          <span class="article-read-time">${art.readTime}</span>
        </div>
        <div class="article-card-body">
          <span class="article-category">${art.categoryLabel}</span>
          <h3 class="article-title">${art.title}</h3>
          <p class="article-snippet">${art.snippet}</p>
          <div class="article-footer">
            <span>Read Evidence Guide</span>
            <span>→</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  const glossaryGrid = document.getElementById('glossary-grid');
  if (glossaryGrid) {
    glossaryGrid.innerHTML = GLOSSARY.map(herb => `
      <div class="glossary-card">
        <div class="glossary-card-header">
          <h3 class="glossary-common-name">${herb.name}</h3>
          <span class="safety-chip ${herb.safetyClass}">${herb.safetyLabel}</span>
        </div>
        <p class="glossary-latin-name">${herb.latin}</p>
        <p>${herb.benefits}</p>
        <div class="glossary-products-list">Formulated in: ${herb.products.join(', ')}</div>
      </div>
    `).join('');
  }

  const faqAccordion = document.getElementById('faq-accordion');
  if (faqAccordion) {
    faqAccordion.innerHTML = FAQS.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <button class="faq-question-btn" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${faq.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" style="${index === 0 ? 'max-height: 200px;' : ''}">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    const items = faqAccordion.querySelectorAll('.faq-item');
    items.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const answer = item.querySelector('.faq-answer');
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-answer').style.maxHeight = null;
        });
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
        }
      });
    });
  }

  /* Currency Switcher */
  const currencySelect = document.getElementById('currency-select');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      renderProducts();
      updateCartUI();
      updateCheckoutSummary();
      showToast(`Prices converted to ${currentCurrency}`, 'info');
    });
  }

  /* Search */
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchDropdown = document.getElementById('search-dropdown-bar');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const globalSearchInput = document.getElementById('global-search-input');
  const searchSuggestions = document.getElementById('search-suggestions');

  if (searchToggleBtn && searchDropdown) {
    searchToggleBtn.addEventListener('click', () => {
      searchDropdown.classList.toggle('hidden');
      if (!searchDropdown.classList.contains('hidden')) globalSearchInput.focus();
    });
  }
  if (closeSearchBtn && searchDropdown) {
    closeSearchBtn.addEventListener('click', () => searchDropdown.classList.add('hidden'));
  }
  if (globalSearchInput && searchSuggestions) {
    globalSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) { searchSuggestions.innerHTML = ''; return; }
      const matched = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.ingredients.toLowerCase().includes(q));
      searchSuggestions.innerHTML = matched.map(p => `
        <button class="btn btn-secondary btn-sm" onclick="window.openProductModal('${p.id}'); document.getElementById('search-dropdown-bar').classList.add('hidden');">
          🌿 ${p.name} (${formatPrice(p.priceUSD)})
        </button>
      `).join('');
    });
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeWishlistDrawer();
      window.closeProductModal();
      if (checkoutModal) checkoutModal.classList.add('hidden');
      if (receiptModal) receiptModal.classList.add('hidden');
      if (searchDropdown) searchDropdown.classList.add('hidden');
    }
  });

  // Initial load
  renderProducts();
  loadStorage();
});
