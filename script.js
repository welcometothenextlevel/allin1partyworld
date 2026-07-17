const products = [
  {
    name: "Foil Curtain Dark Blue",
    price: "AU$5.99",
    originalPrice: "",
    category: "Decorations",
    image: "assets/images/product-foil-curtain-dark-blue.jpg",
    width: 400,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Foil-Curtain-Dark-Blue-p833828005"
  },
  {
    name: "Foil Curtain Iridescent Blue",
    price: "AU$5.99",
    originalPrice: "",
    category: "Decorations",
    image: "assets/images/product-foil-curtain-iridescent-blue.jpg",
    width: 400,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Foil-Curtain-Iridescent-Blue-p833825035"
  },
  {
    name: "Foil Curtain Iridescent Pink",
    price: "AU$5.99",
    originalPrice: "",
    category: "Decorations",
    image: "assets/images/product-foil-curtain-iridescent-pink.jpg",
    width: 400,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Foil-Curtain-Iridescent-Pink-p833825036"
  },
  {
    name: "Foil Curtain Metallic Purple",
    price: "AU$5.99",
    originalPrice: "",
    category: "Decorations",
    image: "assets/images/product-foil-curtain-metallic-purple.jpg",
    width: 175,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Foil-Curtain-Metallic-Purple-p833828007"
  },
  {
    name: "Hello Baby Onesie Foil Balloon",
    price: "AU$5.99",
    originalPrice: "",
    category: "Balloons",
    image: "assets/images/product-hello-baby-onesie-foil-balloon.jpg",
    width: 383,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Hello-Baby-Onesie-Foil-Balloon-p833123484"
  },
  {
    name: "Fluffy Rose Bear With Gift Box 50% OFF",
    price: "AU$25.00",
    originalPrice: "AU$50.00",
    category: "Gifts",
    image: "assets/images/product-fluffy-rose-bear-gift-box.jpg",
    width: 400,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Fluffy-Rose-Bear-With-Gift-Box-50-OFF-p696821657"
  },
  {
    name: "Artificial Rose - Royal Blue Flower",
    price: "AU$6.99",
    originalPrice: "",
    category: "Gifts",
    image: "assets/images/product-artificial-rose-royal-blue.jpg",
    width: 400,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Artificial-Rose-Royal-Blue-Flower-p832356754"
  },
  {
    name: "Happy Birthday Glitter Cake Topper (Silver)",
    price: "AU$2.99",
    originalPrice: "",
    category: "Party Supplies",
    image: "assets/images/product-happy-birthday-glitter-cake-topper-silver.jpg",
    width: 275,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Happy-Birthday-Glitter-Cake-Topper-Silver-p833123481"
  },
  {
    name: "Baby Advice & Wishes Cards Set",
    price: "AU$8.99",
    originalPrice: "",
    category: "Baby",
    image: "assets/images/product-baby-advice-wishes-cards-set.jpg",
    width: 276,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Baby-Advice-&-Wishes-Cards-Set-p833123482"
  },
  {
    name: "Australian Flag Banner (3m)",
    price: "AU$14.99",
    originalPrice: "",
    category: "Festive",
    image: "assets/images/product-australian-flag-banner-3m.jpg",
    width: 400,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Australian-Flag-Banner-3m-p833123483"
  },
  {
    name: "Dark Blue Happy Birthday Banner",
    price: "AU$5.99",
    originalPrice: "",
    category: "Party Supplies",
    image: "assets/images/product-dark-blue-happy-birthday-banner.jpg",
    width: 400,
    height: 353,
    url: "https://www.allin1partyworld.com.au/products/Dark-Blue-Happy-Birthday-Banner-p834467253"
  },
  {
    name: "Sandalwood Premium Reed Diffuser 50ML",
    price: "AU$12.99",
    originalPrice: "",
    category: "Homeware",
    image: "assets/images/product-sandalwood-premium-reed-diffuser.jpg",
    width: 400,
    height: 400,
    url: "https://www.allin1partyworld.com.au/products/Sandalwood-Premium-Reed-Diffuser-50ML-p834468753"
  }
];

const searchItems = [
  ...products.map((product) => ({
    title: product.name,
    meta: `${product.category} - ${product.price}`,
    url: product.url
  })),
  {
    title: "Decorations",
    meta: "Category",
    url: "https://www.allin1partyworld.com.au/products/Decorations-c171072752"
  },
  {
    title: "Hire Shop",
    meta: "Category",
    url: "https://www.allin1partyworld.com.au/products/Hire-Shop-c156344507"
  },
  {
    title: "Gift Hampers",
    meta: "Custom hamper enquiry",
    url: "#hampers"
  }
];

const productGrid = document.querySelector("[data-product-grid]");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("#primary-nav");
const header = document.querySelector("[data-header]");
const searchOpen = document.querySelector("[data-search-open]");
const searchClose = document.querySelector("[data-search-close]");
const searchPanel = document.querySelector("[data-search-panel]");
const searchInput = document.querySelector("[data-search-input]");
const searchResults = document.querySelector("[data-search-results]");
const backToTop = document.querySelector("[data-back-to-top]");

function renderProducts(filter = "all") {
  const visibleProducts = filter === "all"
    ? products
    : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card reveal">
      <div class="product-media">
        ${product.originalPrice ? '<span class="sale-badge">On sale</span>' : ""}
        <img src="${product.image}" alt="${product.name}" width="${product.width}" height="${product.height}" loading="lazy">
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="price-row">
          <span class="price">${product.price}</span>
          ${product.originalPrice ? `<span class="compare-price">${product.originalPrice}</span>` : ""}
        </div>
        <div class="product-actions">
          <a href="${product.url}" target="_blank" rel="noopener">View Product</a>
          <button class="demo-cart" type="button" aria-label="Demo add to cart for ${product.name}" data-demo-cart>+</button>
        </div>
      </div>
    </article>
  `).join("");

  observeReveal();
}

function setFilter(button) {
  filterButtons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderProducts(button.dataset.filter);
}

function toggleMenu(forceState) {
  const shouldOpen = typeof forceState === "boolean" ? forceState : !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", shouldOpen);
  document.body.classList.toggle("menu-open", shouldOpen);
  menuButton.setAttribute("aria-expanded", String(shouldOpen));
}

function openSearch() {
  searchPanel.hidden = false;
  document.body.classList.add("search-open");
  searchInput.value = "";
  renderSearchResults("");
  requestAnimationFrame(() => searchInput.focus());
}

function closeSearch() {
  searchPanel.hidden = true;
  document.body.classList.remove("search-open");
  searchOpen.focus();
}

function renderSearchResults(query) {
  const normalised = query.trim().toLowerCase();
  const matches = normalised
    ? searchItems.filter((item) => `${item.title} ${item.meta}`.toLowerCase().includes(normalised)).slice(0, 6)
    : searchItems.slice(0, 5);

  searchResults.innerHTML = matches.length
    ? matches.map((item) => `<a href="${item.url}" ${item.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><strong>${item.title}</strong><br><small>${item.meta}</small></a>`).join("")
    : "<p>No matching sample items found.</p>";
}

function observeReveal() {
  const revealItems = document.querySelectorAll(".reveal:not(.is-observed)");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, localObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        localObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => {
    item.classList.add("is-observed");
    observer.observe(item);
  });
}

renderProducts();
document.querySelector("[data-year]").textContent = new Date().getFullYear();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button));
});

menuButton.addEventListener("click", () => toggleMenu());

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    toggleMenu(false);
  }
});

searchOpen.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);
searchInput.addEventListener("input", (event) => renderSearchResults(event.target.value));

searchPanel.addEventListener("click", (event) => {
  if (event.target === searchPanel) {
    closeSearch();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!searchPanel.hidden) {
      closeSearch();
    }
    toggleMenu(false);
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-demo-cart]");
  if (!button) return;
  button.classList.add("is-added");
  button.textContent = "Added";
  setTimeout(() => {
    button.classList.remove("is-added");
    button.textContent = "+";
  }, 1500);
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 24;
  header.classList.toggle("is-scrolled", scrolled);
  backToTop.classList.toggle("is-visible", window.scrollY > 620);
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

observeReveal();
