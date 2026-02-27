const fallbackData = {
  site: {
    title: "VALENA - Streetwear & Sneakers",
    brandName: "VALENA",
    nav: [
      { label: "Home", page: "home" },
      { label: "Shop All", page: "plp" },
      { label: "Collections", page: "collections" }
    ],
    header: {
      searchButton: "Search",
      cartButton: "Cart"
    },
    hero: {
      shopNowButton: "SHOP NOW",
      exploreButton: "EXPLORE"
    },
    homeCollections: {
      title: "COLLECTIONS",
      viewAllButton: "View all"
    },
    pages: {
      collectionsTitle: "COLLECTIONS",
      shopAllTitle: "SHOP ALL",
      pdpBackButton: "Back",
      productSectionViewAllButton: "View all",
      productCountSuffix: "products"
    },
    search: {
      placeholder: "Search products...",
      startTypingMessage: "Start typing...",
      noResultsMessage: "No results."
    },
    footer: {
      tagline: "Premium streetwear and sneakers.",
      socialTitle: "Follow us",
      socialLinks: [
        { label: "Instagram", url: "https://instagram.com", icon: "instagram" },
        { label: "TikTok", url: "https://tiktok.com", icon: "tiktok" },
        { label: "X", url: "https://x.com", icon: "x" }
      ],
      columns: [
        { title: "Shop", links: [{ label: "Sneakers", action: "category:sneakers" }, { label: "Apparel", action: "category:apparel" }] },
        { title: "Support", links: [{ label: "Contact", action: "noop" }] },
        { title: "Company", links: [{ label: "About", action: "noop" }] }
      ]
    },
    profile: {
      title: "MY PROFILE",
      saveButton: "SAVE PROFILE",
      closeButton: "Close",
      navLabel: "Profile",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      savedMessage: "Profile saved"
    },
    theme: {
      imageHoverScale: 1.04,
      pdpZoomScale: 1.2
    },
    pdp: {
      addToCartLabel: "ADD TO CART",
      buyNowLabel: "BUY NOW",
      relatedTitle: "RELATED PRODUCTS"
    },
    product: {
      stockLabel: "Stock",
      stockUnknown: "n/a",
      outOfStockLabel: "Out of stock",
      addedToCartMessage: "Added to cart"
    },
    cart: {
      title: "YOUR CART",
      closeButton: "Close",
      subtotalLabel: "Subtotal",
      emptyMessage: "Your cart is empty",
      removeButton: "Remove"
    },
    subscribe: {
      emailPlaceholder: "Enter your email",
      successMessage: "Subscribed successfully"
    },
    checkout: {
      cartCheckoutLabel: "CHECKOUT",
      title: "PAYMENT DETAILS",
      closeButton: "Close",
      cardNumberLabel: "Card Number",
      cardNameLabel: "Cardholder Name",
      expiryLabel: "Expiry",
      cvvLabel: "CVV",
      cardNumberPlaceholder: "1234 5678 9012 3456",
      cardNamePlaceholder: "John Doe",
      expiryPlaceholder: "MM/YY",
      cvvPlaceholder: "123",
      payNowLabel: "PAY NOW",
      successMessage: "Payment successful",
      noItemsMessage: "No items to checkout"
    },
    navigation: {
      backLabel: "Back"
    }
  },
  home: {
    hero: {
      kicker: "NEW COLLECTION 2024",
      title: "VALENA",
      subtitle: "Streetwear meets premium craftsmanship.",
      sideKicker: "LIMITED DROP",
      sideTitle: "STREET ICONS",
      sideSubtitle: "Switch cards with arrows or wait for auto-rotate.",
      gradientColor: "#c8ff00",
      fannedImages: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=700&fit=crop"
      ]
    },
    productSections: [
      { title: "NEW ARRIVALS", subtitle: "JUST DROPPED", mode: "latest", value: "", limit: 4 },
      { title: "BEST SELLERS", subtitle: "TRENDING NOW", mode: "collection", value: "night", limit: 4 }
    ],
    genderSection: {
      enabled: true,
      title: "SHOP BY GENDER",
      subtitle: "CURATED PICKS",
      maleLabel: "MALE",
      femaleLabel: "FEMALE",
      maleImage: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=900&h=600&fit=crop",
      femaleImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=600&fit=crop",
      limit: 3,
      ctaLabel: "Shop now"
    },
    reviewsTitle: "WHAT CUSTOMERS SAY",
    subscribe: {
      title: "JOIN THE MOVEMENT",
      text: "Subscribe to get exclusive access to new drops.",
      buttonLabel: "SUBSCRIBE"
    }
  },
  collections: [
    { slug: "summer", title: "SUMMER HEAT 2024", subtitle: "Lightweight essentials", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&h=500&fit=crop" },
    { slug: "night", title: "NIGHT RUNNER", subtitle: "Reflective gear", image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=900&h=500&fit=crop" }
  ],
  products: [
    { id: 1, name: "Air Max Velocity", category: "sneakers", price: 189, originalPrice: 229, images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"], description: "Engineered for speed.", collection: "summer" },
    { id: 2, name: "Street Runner Pro", category: "sneakers", price: 159, originalPrice: 199, images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop"], description: "Lightweight and durable.", collection: "night" },
    { id: 3, name: "Urban Bomber Jacket", category: "apparel", price: 249, originalPrice: 299, images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop"], description: "Premium bomber.", collection: "heritage" },
    { id: 4, name: "Tech Fleece Hoodie", category: "apparel", price: 129, originalPrice: 159, images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop"], description: "Ultra-soft fleece.", collection: "tech" }
  ],
  reviews: [
    { name: "Alex M.", rating: 5, text: "Love my new sneakers!", date: "2 days ago" },
    { name: "Sarah K.", rating: 5, text: "Bomber jacket exceeded expectations.", date: "1 week ago" },
    { name: "Mike T.", rating: 4, text: "Solid quality and fast shipping.", date: "2 weeks ago" }
  ],
  commerce: {
    apiBaseUrl: "",
    useLiveBackendProducts: false,
    checkoutMode: "stripe_checkout",
    providerName: "Stripe",
    providerDashboardUrl: "https://dashboard.stripe.com",
    currency: "USD",
    currencySymbol: "$",
    requireProfileEmail: true,
    missingApiMessage: "Set commerce.apiBaseUrl in CMS",
    missingEmailMessage: "Please save profile email first",
    checkoutFailedMessage: "Checkout failed",
    checkoutRequestFailedMessage: "Checkout request failed",
    paymentCancelledMessage: "Payment cancelled"
  }
};

const state = {
  site: fallbackData.site,
  home: fallbackData.home,
  products: fallbackData.products,
  reviews: fallbackData.reviews,
  collections: fallbackData.collections,
  commerce: fallbackData.commerce,
  cart: [],
  currentProduct: null,
  activeCategory: "all",
  activeGender: "all",
  collectionFilter: null,
  fannedIndex: 0,
  fannedTimer: null,
  pendingCheckoutItems: []
};

async function safeFetch(path, fallback) {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

async function loadCMSData() {
  const [site, home, products, reviews, collections, commerce] = await Promise.all([
    safeFetch("./content/site.json", fallbackData.site),
    safeFetch("./content/home.json", fallbackData.home),
    safeFetch("./content/products.json", fallbackData.products),
    safeFetch("./content/reviews.json", fallbackData.reviews),
    safeFetch("./content/collections.json", fallbackData.collections),
    safeFetch("./content/commerce.json", fallbackData.commerce)
  ]);
  state.site = site;
  state.home = home;
  state.products = Array.isArray(products) ? products : (products.items || fallbackData.products);
  state.reviews = Array.isArray(reviews) ? reviews : (reviews.items || fallbackData.reviews);
  state.collections = Array.isArray(collections) ? collections : (collections.items || fallbackData.collections);
  state.commerce = commerce || fallbackData.commerce;

  const liveProducts = state.commerce.useLiveBackendProducts;
  const apiBase = state.commerce.apiBaseUrl;
  if (liveProducts && apiBase) {
    await loadProductsFromBackend(apiBase);
  }
}

async function loadProductsFromBackend(apiBaseUrl) {
  try {
    const base = apiBaseUrl.replace(/\/$/, "");
    const res = await fetch(`${base}/api/products`, { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items : [];
    if (items.length) state.products = items;
  } catch {
    // keep CMS fallback
  }
}

function getVisibleProducts() {
  return state.products.filter((p) => (p.status || "published") === "published");
}

function navigateTo(page, id = null) {
  history.pushState({ page, id }, "", id ? `#${page}/${id}` : `#${page}`);
  showPage(page, id);
}

function showPage(page, id = null) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add("active");
  toggleBackButton(page);
  if (page === "plp") renderPLP();
  if (page === "collections") renderCollections();
  if (page === "pdp" && id) openProduct(id, false);
  window.scrollTo(0, 0);
}

function applySite() {
  document.getElementById("site-title").textContent = state.site.title || fallbackData.site.title;
  document.getElementById("brand-name").textContent = state.site.brandName || fallbackData.site.brandName;
  document.getElementById("header-search-btn").textContent = state.site.header?.searchButton || fallbackData.site.header.searchButton;
  document.getElementById("header-cart-btn").textContent = state.site.header?.cartButton || fallbackData.site.header.cartButton;
  document.getElementById("hero-shop-btn").textContent = state.site.hero?.shopNowButton || fallbackData.site.hero.shopNowButton;
  document.getElementById("hero-explore-btn").textContent = state.site.hero?.exploreButton || fallbackData.site.hero.exploreButton;
  document.getElementById("home-collections-title").textContent = state.site.homeCollections?.title || fallbackData.site.homeCollections.title;
  document.getElementById("home-collections-view-all").textContent = state.site.homeCollections?.viewAllButton || fallbackData.site.homeCollections.viewAllButton;
  document.getElementById("collections-page-title").textContent = state.site.pages?.collectionsTitle || fallbackData.site.pages.collectionsTitle;
  document.getElementById("plp-page-title").textContent = state.site.pages?.shopAllTitle || fallbackData.site.pages.shopAllTitle;
  document.getElementById("pdp-back-btn").textContent = state.site.pages?.pdpBackButton || fallbackData.site.pages.pdpBackButton;
  document.getElementById("product-count-suffix").textContent = state.site.pages?.productCountSuffix || fallbackData.site.pages.productCountSuffix;

  document.getElementById("footer-brand").textContent = state.site.brandName || fallbackData.site.brandName;
  document.getElementById("footer-tagline").textContent = state.site.footer?.tagline || fallbackData.site.footer.tagline;
  document.getElementById("profile-title").textContent = state.site.profile?.title || fallbackData.site.profile.title;
  document.getElementById("profile-save-btn").textContent = state.site.profile?.saveButton || fallbackData.site.profile.saveButton;
  document.getElementById("profile-close-btn").textContent = state.site.profile?.closeButton || fallbackData.site.profile.closeButton;
  document.getElementById("profile-nav-label").textContent = state.site.profile?.navLabel || fallbackData.site.profile.navLabel;
  document.getElementById("profile-name").placeholder = state.site.profile?.namePlaceholder || fallbackData.site.profile.namePlaceholder;
  document.getElementById("profile-email").placeholder = state.site.profile?.emailPlaceholder || fallbackData.site.profile.emailPlaceholder;
  document.getElementById("add-to-cart-btn").textContent = state.site.pdp?.addToCartLabel || fallbackData.site.pdp.addToCartLabel;
  document.getElementById("buy-now-btn").textContent = state.site.pdp?.buyNowLabel || fallbackData.site.pdp.buyNowLabel;
  document.getElementById("cart-modal-title").textContent = state.site.cart?.title || fallbackData.site.cart.title;
  document.getElementById("cart-close-btn").textContent = state.site.cart?.closeButton || fallbackData.site.cart.closeButton;
  document.getElementById("cart-subtotal-label").textContent = state.site.cart?.subtotalLabel || fallbackData.site.cart.subtotalLabel;
  document.getElementById("cart-checkout-btn").textContent = state.site.checkout?.cartCheckoutLabel || fallbackData.site.checkout.cartCheckoutLabel;

  document.getElementById("checkout-title").textContent = state.site.checkout?.title || fallbackData.site.checkout.title;
  document.getElementById("checkout-close-btn").textContent = state.site.checkout?.closeButton || fallbackData.site.checkout.closeButton;
  document.getElementById("checkout-card-label").textContent = state.site.checkout?.cardNumberLabel || fallbackData.site.checkout.cardNumberLabel;
  document.getElementById("checkout-name-label").textContent = state.site.checkout?.cardNameLabel || fallbackData.site.checkout.cardNameLabel;
  document.getElementById("checkout-expiry-label").textContent = state.site.checkout?.expiryLabel || fallbackData.site.checkout.expiryLabel;
  document.getElementById("checkout-cvv-label").textContent = state.site.checkout?.cvvLabel || fallbackData.site.checkout.cvvLabel;
  document.getElementById("checkout-card-number").placeholder = state.site.checkout?.cardNumberPlaceholder || fallbackData.site.checkout.cardNumberPlaceholder;
  document.getElementById("checkout-card-name").placeholder = state.site.checkout?.cardNamePlaceholder || fallbackData.site.checkout.cardNamePlaceholder;
  document.getElementById("checkout-expiry").placeholder = state.site.checkout?.expiryPlaceholder || fallbackData.site.checkout.expiryPlaceholder;
  document.getElementById("checkout-cvv").placeholder = state.site.checkout?.cvvPlaceholder || fallbackData.site.checkout.cvvPlaceholder;
  document.getElementById("checkout-pay-btn").textContent = state.site.checkout?.payNowLabel || fallbackData.site.checkout.payNowLabel;
  document.getElementById("nav-back-label").textContent = state.site.navigation?.backLabel || fallbackData.site.navigation.backLabel;
  document.getElementById("search-input").placeholder = state.site.search?.placeholder || fallbackData.site.search.placeholder;
  document.getElementById("subscribe-email").placeholder = state.site.subscribe?.emailPlaceholder || fallbackData.site.subscribe.emailPlaceholder;

  document.documentElement.style.setProperty("--image-hover-scale", String(state.site.theme?.imageHoverScale || fallbackData.site.theme.imageHoverScale));
  document.documentElement.style.setProperty("--pdp-zoom-scale", String(state.site.theme?.pdpZoomScale || fallbackData.site.theme.pdpZoomScale));

  const nav = document.getElementById("main-nav");
  nav.innerHTML = (state.site.nav || []).map((n) => `<a href="#" onclick="navigateTo('${n.page}');return false;" class="hover:text-white">${n.label}</a>`).join("");

  const cols = state.site.footer?.columns || [];
  const colEls = ["footer-col-1", "footer-col-2", "footer-col-3"];
  colEls.forEach((id, idx) => {
    const col = cols[idx];
    const el = document.getElementById(id);
    if (!col) {
      el.innerHTML = "";
      return;
    }
    el.innerHTML = `
      <h4 class="font-semibold mb-3 text-sm">${col.title}</h4>
      <div class="space-y-2 text-sm text-[var(--muted)]">
        ${(col.links || []).map((l) => `<a href="#" onclick="handleFooterAction('${l.action}');return false;" class="block hover:text-white">${l.label}</a>`).join("")}
      </div>
    `;
  });

  document.getElementById("footer-social-title").textContent = state.site.footer?.socialTitle || fallbackData.site.footer.socialTitle;
  const socialWrap = document.getElementById("footer-social-links");
  const socialLinks = state.site.footer?.socialLinks || fallbackData.site.footer.socialLinks;
  socialWrap.innerHTML = socialLinks.map((item) => `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
      ${socialIcon(item.icon || item.label)}
      <span>${item.label}</span>
    </a>
  `).join("");
}

function socialIcon(icon) {
  const name = String(icon || "").toLowerCase();
  const icons = {
    instagram: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
    facebook: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 8H16V5h-2.5C10.9 5 9 6.9 9 9.5V12H7v3h2v6h3v-6h3l1-3h-4V9.5c0-.8.7-1.5 1.5-1.5Z"/></svg>`,
    x: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H22l-6.8 7.8L23 21h-6.2l-4.9-6.4L6.3 21H3.2l7.3-8.4L1 3h6.3l4.4 5.9L18.9 3Zm-1.1 16h1.7L6.4 4.9H4.6L17.8 19Z"/></svg>`,
    tiktok: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h3.1c.3 1.8 1.4 3.2 3 4v3.2c-1.2 0-2.3-.3-3.3-.9V15a5 5 0 1 1-5-5c.2 0 .5 0 .7.1v3.1a1.9 1.9 0 1 0 1.5 1.8V3Z"/></svg>`,
    youtube: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8C4.8 19.2 12 19.2 12 19.2s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>`,
    linkedin: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-.9 1.8-2 3.8-2 4.1 0 4.8 2.7 4.8 6.2V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/></svg>`,
    snapchat: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c2.5 0 4.5 2 4.5 4.5v2c.4.3 1 .6 1.8.8.5.1.8.6.7 1.1-.1.4-.4.7-.8.8-.7.2-1.1.5-1.2.8-.3.8.5 1.8 1.2 2.4.3.2.4.7.2 1-.1.3-.4.5-.8.5-.4 0-.8.2-1 .5-.7 1-1.8 1.5-3.1 1.5h-3c-1.3 0-2.4-.5-3.1-1.5-.2-.3-.6-.5-1-.5-.4 0-.7-.2-.8-.5-.2-.4-.1-.8.2-1 .7-.6 1.5-1.6 1.2-2.4-.1-.3-.5-.6-1.2-.8-.4-.1-.7-.4-.8-.8-.1-.5.2-1 .7-1.1.8-.2 1.4-.5 1.8-.8v-2C7.5 5 9.5 3 12 3Z"/></svg>`
  };
  return icons[name] || `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" stroke-width="2"/><path d="M12 7v10M7 12h10" stroke-width="2"/></svg>`;
}

function toggleBackButton(page) {
  const btn = document.getElementById("nav-back-btn");
  if (!btn) return;
  btn.classList.toggle("hidden", page === "home");
}

function goBackPage() {
  if (history.length > 1) {
    history.back();
    return;
  }
  navigateTo("home");
}

function handleFooterAction(action) {
  if (!action || action === "noop") return;
  if (action.startsWith("category:")) {
    state.activeCategory = action.split(":")[1];
    state.collectionFilter = null;
    navigateTo("plp");
  }
}

function applyHome() {
  const hero = state.home.hero || fallbackData.home.hero;
  document.getElementById("hero-kicker").textContent = hero.kicker || "";
  document.getElementById("hero-title").textContent = hero.title || "";
  document.getElementById("hero-subtitle").textContent = hero.subtitle || "";
  document.getElementById("hero-side-kicker").textContent = hero.sideKicker || "";
  document.getElementById("hero-side-title").textContent = hero.sideTitle || "";
  document.getElementById("hero-side-subtitle").textContent = hero.sideSubtitle || "";
  document.getElementById("reviews-title").textContent = state.home.reviewsTitle || fallbackData.home.reviewsTitle;
  document.getElementById("related-title").textContent = state.site.pdp?.relatedTitle || fallbackData.site.pdp.relatedTitle;
  document.getElementById("subscribe-title").textContent = state.home.subscribe?.title || fallbackData.home.subscribe.title;
  document.getElementById("subscribe-text").textContent = state.home.subscribe?.text || fallbackData.home.subscribe.text;
  document.getElementById("subscribe-button").textContent = state.home.subscribe?.buttonLabel || fallbackData.home.subscribe.buttonLabel;
  document.getElementById("hero-blob").style.background = hero.gradientColor || "#c8ff00";

  initFannedImages();
  renderDynamicSections();
  renderGenderSection();
  renderCollectionsHome();
  renderReviews();
}

function genderCardHTML(label, image, genderKey, products, ctaLabel) {
  return `
    <div class="bg-[var(--card)] rounded-2xl overflow-hidden">
      <div class="aspect-[16/10] overflow-hidden">
        <img src="${image}" alt="${label}" class="w-full h-full object-cover">
      </div>
      <div class="p-5">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-display text-3xl">${label}</h3>
          <button onclick="setGenderFilterAndShop('${genderKey}')" class="text-sm text-[var(--accent)]">${ctaLabel}</button>
        </div>
        <div class="grid grid-cols-3 gap-3">
          ${products.map((p) => `
            <button onclick="openProduct(${p.id})" class="text-left">
              <div class="rounded-lg overflow-hidden aspect-square">
                <img src="${p.images?.[0] || ""}" alt="${p.name}" class="w-full h-full object-cover">
              </div>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderGenderSection() {
  const section = state.home.genderSection || fallbackData.home.genderSection;
  const wrap = document.getElementById("gender-home-section");
  const container = document.getElementById("gender-sections");
  if (!wrap || !container) return;
  if (!section.enabled) {
    wrap.classList.add("hidden");
    return;
  }
  wrap.classList.remove("hidden");
  document.getElementById("gender-section-title").textContent = section.title || "SHOP BY GENDER";
  document.getElementById("gender-section-subtitle").textContent = section.subtitle || "";

  const limit = Number(section.limit || 3);
  const products = getVisibleProducts();
  const maleProducts = products.filter((p) => (p.gender || "").toLowerCase() === "male").slice(0, limit);
  const femaleProducts = products.filter((p) => (p.gender || "").toLowerCase() === "female").slice(0, limit);
  container.innerHTML = [
    genderCardHTML(section.maleLabel || "MALE", section.maleImage || "", "male", maleProducts, section.ctaLabel || "Shop now"),
    genderCardHTML(section.femaleLabel || "FEMALE", section.femaleImage || "", "female", femaleProducts, section.ctaLabel || "Shop now")
  ].join("");
}

function setGenderFilterAndShop(gender) {
  state.activeGender = gender;
  navigateTo("plp");
}

function initFannedImages() {
  const images = state.home.hero?.fannedImages || [];
  const container = document.getElementById("fanned-stack");
  if (!container) return;
  container.innerHTML = images.map((src, idx) => `
    <button class="fanned-image" onclick="setActiveFanned(${idx});restartFannedAuto();" aria-label="Hero image ${idx + 1}">
      <img src="${src}" alt="Hero image ${idx + 1}">
    </button>
  `).join("");
  state.fannedIndex = 0;
  setActiveFanned(0);
  restartFannedAuto();
}

function setActiveFanned(index) {
  const cards = Array.from(document.querySelectorAll(".fanned-image"));
  if (!cards.length) return;
  state.fannedIndex = index;
  cards.forEach((card, i) => {
    if (i === index) {
      card.style.transform = "translateX(0) rotate(0deg) scale(1)";
      card.style.opacity = "1";
      card.style.zIndex = "30";
    } else {
      const diff = i - index;
      card.style.transform = `translateX(${diff * 85}px) rotate(${diff * 8}deg) scale(0.9)`;
      card.style.opacity = "0.82";
      card.style.zIndex = "10";
    }
  });
}

function cycleFanned(step) {
  const total = (state.home.hero?.fannedImages || []).length;
  if (!total) return;
  let next = state.fannedIndex + step;
  if (next < 0) next = total - 1;
  if (next >= total) next = 0;
  setActiveFanned(next);
}

function restartFannedAuto() {
  if (state.fannedTimer) clearInterval(state.fannedTimer);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  state.fannedTimer = setInterval(() => cycleFanned(1), 4200);
}

function getCurrencySymbol() {
  return state.commerce?.currencySymbol || fallbackData.commerce.currencySymbol || "$";
}

function formatPrice(value) {
  const amount = Number(value);
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  const hasCents = Math.abs(safeAmount % 1) > 0;
  return `${getCurrencySymbol()}${safeAmount.toLocaleString(undefined, {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2
  })}`;
}

function renderStarRating(rating) {
  const count = Math.max(0, Math.min(5, Number(rating || 0)));
  return "&#9733;".repeat(count);
}

function productCardHTML(p) {
  return `
    <button class="product-card text-left" onclick="openProduct(${p.id})">
      <div class="img-wrap rounded-xl overflow-hidden mb-2 aspect-square">
        <img src="${p.images?.[0] || ""}" alt="${p.name}" class="w-full h-full object-cover">
      </div>
      <p class="text-xs text-[var(--muted)] uppercase">${p.category || ""}</p>
      <h3 class="font-medium text-sm">${p.name}</h3>
      <p class="text-sm mt-1">${formatPrice(p.price)}</p>
      ${(p.stock ?? 1) > 0 ? `<p class="text-[10px] text-[var(--muted)] mt-1">${state.site.product?.stockLabel || fallbackData.site.product.stockLabel}: ${p.stock ?? (state.site.product?.stockUnknown || fallbackData.site.product.stockUnknown)}</p>` : `<p class="text-[10px] text-[var(--danger)] mt-1">${state.site.product?.outOfStockLabel || fallbackData.site.product.outOfStockLabel}</p>`}
    </button>
  `;
}

function filterProductsBySection(cfg) {
  const mode = cfg.mode || "latest";
  const limit = Number(cfg.limit || 4);
  let list = [...getVisibleProducts()];
  if (mode === "featured") list = list.filter((p) => Boolean(p.featured));
  if (mode === "category" && cfg.value) list = list.filter((p) => p.category === cfg.value);
  if (mode === "collection" && cfg.value) list = list.filter((p) => p.collection === cfg.value);
  if (mode === "tag" && cfg.value) list = list.filter((p) => (p.tags || []).includes(cfg.value));
  if (mode === "ids" && cfg.value) {
    const ids = cfg.value.split(",").map((x) => Number(x.trim())).filter(Boolean);
    list = list.filter((p) => ids.includes(Number(p.id)));
  }
  return list.slice(0, limit);
}

function renderDynamicSections() {
  const sections = state.home.productSections || [];
  const container = document.getElementById("dynamic-sections");
  container.innerHTML = sections.map((s, idx) => {
    const products = filterProductsBySection(s);
    return `
      <section>
        <p class="text-[var(--accent)] text-sm tracking-widest mb-1">${s.subtitle || ""}</p>
        <div class="flex items-end justify-between mb-6">
          <h2 class="font-display text-3xl">${s.title || `Section ${idx + 1}`}</h2>
          <button onclick="navigateTo('plp')" class="text-sm text-[var(--muted)] hover:text-white">${state.site.pages?.productSectionViewAllButton || fallbackData.site.pages.productSectionViewAllButton}</button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          ${products.map(productCardHTML).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderCollectionsHome() {
  const container = document.getElementById("home-collections");
  container.innerHTML = state.collections.slice(0, 4).map((c) => `
    <button onclick="openCollection('${c.slug}')" class="text-left rounded-2xl overflow-hidden bg-[var(--card)]">
      <div class="aspect-[16/9]"><img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover"></div>
      <div class="p-4">
        <h3 class="font-display text-2xl">${c.title}</h3>
        <p class="text-sm text-[var(--muted)]">${c.subtitle || ""}</p>
      </div>
    </button>
  `).join("");
}

function renderCollections() {
  const container = document.getElementById("collections-grid");
  container.innerHTML = state.collections.map((c) => `
    <button onclick="openCollection('${c.slug}')" class="text-left rounded-2xl overflow-hidden bg-[var(--card)]">
      <div class="aspect-[16/9]"><img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover"></div>
      <div class="p-4">
        <h3 class="font-display text-2xl">${c.title}</h3>
        <p class="text-sm text-[var(--muted)]">${c.subtitle || ""}</p>
      </div>
    </button>
  `).join("");
}

function openCollection(slug) {
  state.activeCategory = "all";
  state.collectionFilter = slug;
  navigateTo("plp");
}

function renderReviews() {
  const container = document.getElementById("reviews-grid");
  container.innerHTML = state.reviews.map((r) => `
    <article class="bg-[var(--card)] rounded-xl p-4">
      <p class="text-[var(--accent)]">${renderStarRating(r.rating || 5)}</p>
      <p class="text-sm mt-2">"${r.text}"</p>
      <p class="text-xs text-[var(--muted)] mt-3">${r.name} | ${r.date}</p>
    </article>
  `).join("");
}
function renderPLP() {
  const visibleProducts = getVisibleProducts();
  const categories = ["all", ...new Set(visibleProducts.map((p) => p.category))];
  const genders = ["all", ...new Set(visibleProducts.map((p) => (p.gender || "unisex")).filter(Boolean))];
  const filters = document.getElementById("plp-filters");
  const categoryButtons = categories.map((cat) => {
    const active = cat === (state.activeCategory || "all");
    return `<button onclick="setCategory('${cat}')" class="px-4 py-2 rounded-full text-sm ${active ? "btn-primary" : "btn-outline"}">${cat}</button>`;
  }).join("");
  const genderButtons = genders.map((gender) => {
    const active = gender === (state.activeGender || "all");
    return `<button onclick="setGender('${gender}')" class="px-4 py-2 rounded-full text-sm ${active ? "btn-primary" : "btn-outline"}">${gender}</button>`;
  }).join("");
  filters.innerHTML = `<div class="w-full flex flex-wrap gap-2">${categoryButtons}</div><div class="w-full flex flex-wrap gap-2 mt-1">${genderButtons}</div>`;

  const items = visibleProducts.filter((p) => {
    if (state.activeCategory && state.activeCategory !== "all" && p.category !== state.activeCategory) return false;
    if (state.activeGender && state.activeGender !== "all" && (p.gender || "unisex") !== state.activeGender) return false;
    if (state.collectionFilter && p.collection !== state.collectionFilter) return false;
    return true;
  });

  document.getElementById("product-count").textContent = String(items.length);
  document.getElementById("product-grid").innerHTML = items.map(productCardHTML).join("");
}

function setCategory(cat) {
  state.activeCategory = cat;
  state.collectionFilter = null;
  renderPLP();
}

function setGender(gender) {
  state.activeGender = gender;
  state.collectionFilter = null;
  renderPLP();
}

function openProduct(id, push = true) {
  state.currentProduct = getVisibleProducts().find((p) => Number(p.id) === Number(id));
  if (!state.currentProduct) return;
  if (push) {
    navigateTo("pdp", id);
    return;
  }
  const p = state.currentProduct;
  document.getElementById("pdp-image").src = p.images?.[0] || "";
  document.getElementById("pdp-title").textContent = p.name || "";
  document.getElementById("pdp-category").textContent = (p.category || "").toUpperCase();
  document.getElementById("pdp-description").textContent = p.description || "";
  document.getElementById("pdp-price").textContent = formatPrice(p.price || 0);

  const thumbs = document.getElementById("pdp-thumbnails");
  thumbs.innerHTML = (p.images || []).map((img, idx) => `
    <button class="thumb-btn ${idx === 0 ? "active" : ""} rounded-lg overflow-hidden w-16 h-16 lg:w-20 lg:h-20" onclick="setPdpImage(${idx})">
      <img src="${img}" alt="${p.name} ${idx + 1}" class="w-full h-full object-cover">
    </button>
  `).join("");

  renderRelatedProducts();
}

function setPdpImage(idx) {
  if (!state.currentProduct) return;
  const src = state.currentProduct.images?.[idx];
  if (!src) return;
  document.getElementById("pdp-image").src = src;
  document.querySelectorAll(".thumb-btn").forEach((btn, i) => btn.classList.toggle("active", i === idx));
}

function renderRelatedProducts() {
  const container = document.getElementById("related-products");
  if (!container || !state.currentProduct) return;
  const visibleProducts = getVisibleProducts();
  const sameCategory = visibleProducts.filter((p) => p.id !== state.currentProduct.id && p.category === state.currentProduct.category);
  const backup = visibleProducts.filter((p) => p.id !== state.currentProduct.id && p.category !== state.currentProduct.category);
  const related = [...sameCategory, ...backup].slice(0, 4);
  container.innerHTML = related.map(productCardHTML).join("");
}

function addToCartFromPdp() {
  if (!state.currentProduct) return;
  if ((state.currentProduct.stock ?? 1) <= 0) {
    showToast(state.site.product?.outOfStockLabel || fallbackData.site.product.outOfStockLabel);
    return;
  }
  state.cart.push({ ...state.currentProduct, cartId: Date.now() });
  updateCartUI();
  showToast(state.site.product?.addedToCartMessage || fallbackData.site.product.addedToCartMessage);
}

function buyNowFromPdp() {
  if (!state.currentProduct) return;
  state.pendingCheckoutItems = [{ ...state.currentProduct, cartId: Date.now() }];
  openCheckout();
}

function updateCartUI() {
  const count = state.cart.length;
  const countEl = document.getElementById("cart-count");
  countEl.textContent = String(count);
  countEl.classList.toggle("hidden", count === 0);
  countEl.classList.toggle("flex", count > 0);

  const cartItems = document.getElementById("cart-items");
  if (!count) {
    cartItems.innerHTML = `<p class="text-sm text-[var(--muted)]">${state.site.cart?.emptyMessage || fallbackData.site.cart.emptyMessage}</p>`;
    document.getElementById("cart-subtotal").textContent = formatPrice(0);
    return;
  }

  cartItems.innerHTML = state.cart.map((item, idx) => `
    <div class="flex gap-3">
      <img src="${item.images?.[0] || ""}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover">
      <div class="flex-1">
        <p class="text-sm">${item.name}</p>
        <div class="flex items-center justify-between mt-1">
          <p class="text-sm">${formatPrice(item.price)}</p>
          <button onclick="removeCartItem(${idx})" class="text-xs text-[var(--danger)]">${state.site.cart?.removeButton || fallbackData.site.cart.removeButton}</button>
        </div>
      </div>
    </div>
  `).join("");

  const subtotal = state.cart.reduce((sum, i) => sum + Number(i.price || 0), 0);
  document.getElementById("cart-subtotal").textContent = formatPrice(subtotal);
}

function removeCartItem(idx) {
  state.cart.splice(idx, 1);
  updateCartUI();
}

function openSearch() {
  document.getElementById("search-modal").classList.add("active");
  document.body.style.overflow = "hidden";
  document.getElementById("search-input").focus();
}

function closeSearch() {
  document.getElementById("search-modal").classList.remove("active");
  document.body.style.overflow = "";
}

function performSearch(query) {
  const q = query.trim().toLowerCase();
  const container = document.getElementById("search-results");
  if (!q) {
    container.innerHTML = `<p class="text-sm text-[var(--muted)]">${state.site.search?.startTypingMessage || fallbackData.site.search.startTypingMessage}</p>`;
    return;
  }
  const results = getVisibleProducts().filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  container.innerHTML = results.map((p) => `
    <button onclick="openProduct(${p.id});closeSearch();" class="w-full text-left p-2 rounded hover:bg-[var(--card)]">
      <p class="text-sm">${p.name}</p>
      <p class="text-xs text-[var(--accent)]">${formatPrice(p.price)}</p>
    </button>
  `).join("") || `<p class="text-sm text-[var(--muted)]">${state.site.search?.noResultsMessage || fallbackData.site.search.noResultsMessage}</p>`;
}

function openCart() {
  document.getElementById("cart-modal").classList.add("active");
  document.body.style.overflow = "hidden";
  updateCartUI();
}

function closeCart() {
  document.getElementById("cart-modal").classList.remove("active");
  document.body.style.overflow = "";
}

function checkoutFromCart() {
  if (!state.cart.length) return;
  state.pendingCheckoutItems = state.cart.map((item) => ({ ...item }));
  closeCart();
  openCheckout();
}

function openCheckout() {
  document.getElementById("checkout-modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  document.getElementById("checkout-modal").classList.remove("active");
  document.body.style.overflow = "";
}

function formatCardNumber(input) {
  input.value = input.value.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(input) {
  const v = input.value.replace(/\D/g, "").slice(0, 4);
  if (v.length <= 2) {
    input.value = v;
    return;
  }
  input.value = `${v.slice(0, 2)}/${v.slice(2)}`;
}

function submitCheckout() {
  createRealCheckout();
}

async function createRealCheckout() {
  const apiBase = (state.commerce.apiBaseUrl || "").replace(/\/$/, "");
  const customerName = document.getElementById("checkout-card-name").value.trim();
  const customerEmail = localStorage.getItem("profile_email") || "";
  const checkoutItems = (state.pendingCheckoutItems.length ? state.pendingCheckoutItems : state.cart).map((i) => ({
    productId: i.id,
    quantity: 1
  }));

  if (!apiBase) {
    showToast(state.commerce.missingApiMessage || "Set commerce.apiBaseUrl in CMS");
    return;
  }
  if ((state.commerce.requireProfileEmail ?? true) && !customerEmail) {
    showToast(state.commerce.missingEmailMessage || "Please save profile email first");
    return;
  }
  if (!checkoutItems.length) {
    showToast(state.site.checkout?.noItemsMessage || fallbackData.site.checkout.noItemsMessage);
    return;
  }

  try {
    const res = await fetch(`${apiBase}/api/checkout/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: checkoutItems,
        customer: { email: customerEmail, name: customerName }
      })
    });

    const data = await res.json();
    if (!res.ok || !data.url) {
      showToast(data.error || state.commerce.checkoutFailedMessage || "Checkout failed");
      return;
    }
    window.location.href = data.url;
  } catch {
    showToast(state.commerce.checkoutRequestFailedMessage || "Checkout request failed");
  }
}

function openProfile() {
  document.getElementById("profile-modal").classList.add("active");
  document.body.style.overflow = "hidden";
  const name = localStorage.getItem("profile_name") || "";
  const email = localStorage.getItem("profile_email") || "";
  document.getElementById("profile-name").value = name;
  document.getElementById("profile-email").value = email;
}

function closeProfile() {
  document.getElementById("profile-modal").classList.remove("active");
  document.body.style.overflow = "";
}

function saveProfile() {
  localStorage.setItem("profile_name", document.getElementById("profile-name").value.trim());
  localStorage.setItem("profile_email", document.getElementById("profile-email").value.trim());
  closeProfile();
  showToast(state.site.profile?.savedMessage || fallbackData.site.profile.savedMessage);
}

function handleSubscribe(event) {
  event.preventDefault();
  const input = document.getElementById("subscribe-email");
  if (!input.value.trim()) return;
  showToast(state.site.subscribe?.successMessage || fallbackData.site.subscribe.successMessage);
  input.value = "";
}

function showToast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.style.opacity = "1";
  setTimeout(() => { t.style.opacity = "0"; }, 1800);
}

window.addEventListener("popstate", (e) => {
  if (e.state?.page) showPage(e.state.page, e.state.id);
  else showPage("home");
});

document.addEventListener("keydown", (e) => {
  const activeTag = document.activeElement?.tagName;
  const isTyping = activeTag === "INPUT" || activeTag === "TEXTAREA";

  if ((e.altKey && e.key === "ArrowLeft") || (!isTyping && e.key === "Backspace")) {
    e.preventDefault();
    goBackPage();
    return;
  }

  if (e.key === "Escape") {
    closeSearch();
    closeCart();
    closeProfile();
    closeCheckout();
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  await loadCMSData();
  applySite();
  applyHome();
  renderPLP();
  renderCollections();
  updateCartUI();

  const hash = window.location.hash.replace("#", "");
  handleCheckoutHash(hash);
  if (hash) {
    const [page, id] = hash.split("/");
    const allowed = ["home", "plp", "collections", "pdp"];
    const safePage = allowed.includes(page) ? page : "home";
    history.replaceState({ page: safePage, id: id || null }, "", window.location.hash);
    showPage(safePage, id || null);
  } else {
    history.replaceState({ page: "home" }, "", "#home");
  }
});

function handleCheckoutHash(hash) {
  if (!hash) return;
  if (hash.startsWith("checkout-success")) {
    state.cart = [];
    state.pendingCheckoutItems = [];
    updateCartUI();
    showToast(state.site.checkout?.successMessage || fallbackData.site.checkout.successMessage);
  } else if (hash.startsWith("checkout-cancelled")) {
    showToast(state.commerce.paymentCancelledMessage || fallbackData.commerce.paymentCancelledMessage);
  }
}
