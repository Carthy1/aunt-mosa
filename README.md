# 🌿 Mena’s Nest — Herbal & Organic Wellness E-Commerce Platform

[![Platform](https://img.shields.io/badge/Platform-Web-purple.svg)](https://carthy1.github.io/aunt-mosa/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-success.svg)](https://carthy1.github.io/aunt-mosa/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Public%20MVP-blue.svg)](https://github.com/Carthy1/aunt-mosa)

> A modern, responsive e-commerce storefront and educational hub crafted for **Mena’s Nest** — a botanical wellness brand specializing in pure, organic remedies for women, expectant mothers, nursing mothers, and children.
> 
> 🌐 **Live Website:** [https://carthy1.github.io/aunt-mosa/](https://carthy1.github.io/aunt-mosa/)

---

## ✨ Features Overview

### 🛍️ Full E-Commerce Storefront
- **Product Variants & Small-Batch Inventory:** Multi-size packaging (e.g. 8 oz Jar, 16 oz Refill, 3-Jar Bundles) with live price updates and real-time inventory scarcity indicators.
- **Wishlist & Saved Remedies:** Save botanicals with heart icons and manage them via a slide-over Wishlist Drawer.
- **Dynamic Cart & Promo Engine:** Real-time quantity adjustments, free nationwide delivery progress bar (GH₵ 600 threshold), coupon validation (`MAMA10`, `NESTLOVE`, `FREESHIP`), and personalized gift notes.
- **3-Step E-Commerce Checkout:**
  - **Step 1:** Customer Contact & Delivery Address (Accra, Kumasi & nationwide Ghana)
  - **Step 2:** Shipping Speed Selector (Standard Botanical Dispatch, Priority Same-Day Express, Local Doorstep Delivery)
  - **Step 3:** Multi-Payment Gateways (Instant MTN Mobile Money & Telecel Cash, Interactive Debit/Credit Card with live preview, Cash on Delivery, and WhatsApp Concierge)
- **Digital Invoice & Receipt Modal:** Itemized receipt with unique Order ID (`#MN-XXXXX`) and printable/save-to-PDF invoice in Ghana Cedis.
- **Order Tracking & Delivery Status:** Search orders to see a 4-stage visual timeline (*Order Confirmed → Small-Batch Blended → Courier In Transit → Delivered*).
- **Customer Reviews & Ratings:** Verified review submission form with instant live rating updates.
- **Social Proof Live Ticker:** Real-time notifications of verified customer orders from Accra, Kumasi, Takoradi, and Tema.
- **Multi-Currency Converter:** Default native pricing in **Ghana Cedis (GH₵ / GHS)** with optional live conversion to `USD ($)`, `GBP (£)`, `EUR (€)`, and `CAD (CA$)`.

### 🌿 Botanical Education & Brand Story
- **Wellness & Learning Hub:** Trimester wellness guides, fourth trimester lactation science, pediatric botanical safety, and hormonal balance guides.
- **Interactive Botanical Herb Glossary:** Searchable profiles of key herbs with life-stage safety ratings (*Pregnancy-Friendly*, *Child-Safe*, *Lactation-Supportive*).
- **Our Story & Atelier Philosophy:** Founder background, clinical herbalist credentials, and regenerative organic sourcing standards.
- **WhatsApp Direct Assistance:** Persistent floating widget and one-click direct consultation links (`020 838 6301`).

---

## 📬 Official Contact & Social Media

| Channel | Handle / Number | Link |
| :--- | :--- | :--- |
| **Email** | `menasnest@gmail.com` | [Send Email](mailto:menasnest@gmail.com) |
| **WhatsApp / Phone** | `020 838 6301` (`+233 20 838 6301`) | [Chat on WhatsApp](https://wa.me/233208386301) |
| **Instagram** | `@menasnest` | [instagram.com/menasnest](https://instagram.com/menasnest) |
| **TikTok** | `Mena's Nest` | [tiktok.com/@menasnest](https://tiktok.com/@menasnest) |
| **Facebook** | `Mena's Nest` | [facebook.com/menasnest](https://facebook.com/menasnest) |
| **YouTube** | `mena's nest` | [youtube.com/@menasnest](https://youtube.com/@menasnest) |

---

## 🎨 Brand Design System

| Token | Color | Hex | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Lavender** | Soft Lavender | `#8572B8` | Primary CTAs, hero badges, active states |
| **Deep Lavender** | Regal Violet | `#3B2A61` | Headlines, cards, announcement bar |
| **Botanical Sage** | Herbal Sage | `#6E947A` | Trust badges, ingredient icons, success states |
| **Deep Sage** | Forest Green | `#476652` | Category labels, sustainability tags |
| **Warm Cream** | Travertine Sand | `#FBF9F5` | Background surfaces and card canvases |
| **Muted Plum** | Earthy Plum | `#64435C` | Accents, wishlist highlights |

- **Headings Typography:** *Cormorant Garamond* (Editorial Serif)
- **Body Typography:** *Plus Jakarta Sans* (Modern Geometric Sans)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation & Local Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Carthy1/aunt-mosa.git
   cd aunt-mosa
   ```

2. Start the local server:
   ```bash
   node server.js
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## 📁 Project Structure

```
aunt-mosa/
├── index.html            # Main semantic HTML5 structure
├── styles.css            # Bespoke design system & responsive stylesheet
├── app.js                # State engine, cart, checkout, tracking & reviews
├── server.js             # Lightweight zero-dependency static HTTP server
├── .gitignore            # Git ignore configuration
├── README.md             # Project documentation
└── assets/
    └── images/           # High-resolution brand photography
        ├── hero-mother.jpg
        ├── product-pregnancy-tea.jpg
        ├── product-lactation-drops.jpg
        ├── product-belly-oil.jpg
        ├── product-baby-balm.jpg
        ├── product-balance-tincture.jpg
        └── about-founder.jpg
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
