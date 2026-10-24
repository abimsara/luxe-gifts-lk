/* ============================================================
   app.js — Single combined JavaScript file for Luxe Gifts LK
   Loaded on every page. Detects the current page by filename
   and runs the correct init function.
   ============================================================ */

/* ------------------------------------------------------------
   1. DATA
   ------------------------------------------------------------ */
const IMG = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

const products = [
  {id:'f1', cat:'flowers', name:'Classic Red Rose Bouquet', price:3200, weight:null, img:IMG('1526047932273-341f2a7631f9'), fallback:'Red+Rose+Bouquet', tag:'Best Seller'},
  {id:'f2', cat:'flowers', name:'Sunny Sunflower & Baby\'s Breath', price:1550, weight:null, img:IMG('1597848212624-a19eb35e2651'), fallback:'Sunflower+Bunch'},
  {id:'f3', cat:'flowers', name:'Blushing Beauty Pink Bunch', price:5500, weight:null, img:IMG('1561181286-d3fee7d55364'), fallback:'Pink+Bouquet'},
  {id:'f4', cat:'flowers', name:'Spring Surprise Mixed Bunch', price:3450, weight:null, img:IMG('1490750967868-88aa4486c946'), fallback:'Mixed+Flowers'},
  {id:'f5', cat:'flowers', name:'Chrysanthemum Glow Bouquet', price:4500, weight:null, img:IMG('1508610048659-a06b669e3321'), fallback:'Chrysanthemum'},
  {id:'f6', cat:'flowers', name:'10 Red Rose Luxury Bouquet', price:7800, weight:null, img:IMG('1582794543139-8ac9cb0f7b11'), fallback:'Luxury+Roses', tag:'Premium'},
  {id:'f7', cat:'flowers', name:'Sunrise Orange & Yellow Bouquet', price:5200, weight:null, img:IMG('1519378058457-4c29a0a2efac'), fallback:'Sunrise+Bouquet'},
  {id:'f8', cat:'flowers', name:'Pink & Purple Hand-tied Bouquet', price:6300, weight:null, img:IMG('1533616688419-b7a585564566'), fallback:'Purple+Bouquet'},
  {id:'f9', cat:'flowers', name:'Grand Celebration Rose Bouquet', price:9500, weight:null, img:IMG('1518895949257-7621c3c786d7'), fallback:'Grand+Bouquet', tag:'Luxury'},
  {id:'f10', cat:'flowers', name:'Roses & Chocolates Gift Combo', price:7500, weight:null, img:IMG('1487530811176-3780de880c2d'), fallback:'Roses+Chocolate'},
  {id:'c1', cat:'cakes', name:'Pink Garden Cake', price:6450, weight:'1 kg', img:IMG('1578985545062-69928b1d9587'), fallback:'Pink+Garden+Cake', tag:'Best Seller'},
  {id:'c2', cat:'cakes', name:'Pastel Blooms Cake', price:5600, weight:'1 kg', img:IMG('1606313564200-e75d5e30476c'), fallback:'Pastel+Cake'},
  {id:'c3', cat:'cakes', name:'Midnight Silver Luxe Cake', price:6980, weight:'1.5 kg', img:IMG('1519869325930-281384150729'), fallback:'Silver+Cake'},
  {id:'c4', cat:'cakes', name:'Sweet 17th Birthday Cake', price:7900, weight:'1.5 kg', img:IMG('1565958011703-44f9829ba187'), fallback:'Birthday+Cake'},
  {id:'c5', cat:'cakes', name:'Romantic Couple Birthday Cake', price:7900, weight:'2 kg', img:IMG('1464349095431-e9a21285b5f3'), fallback:'Couple+Cake'},
  {id:'c6', cat:'cakes', name:'Unicorn Theme Cake', price:6600, weight:'1.4 kg', img:IMG('1535141192574-5d4897c12636'), fallback:'Unicorn+Cake', tag:'Popular'},
  {id:'c7', cat:'cakes', name:'Happy Moments Ribbon Cake', price:7000, weight:'1.5 kg', img:IMG('1621303837174-89787a7d4729'), fallback:'Ribbon+Cake'},
  {id:'c8', cat:'cakes', name:'Love & Grace Birthday Cake', price:6900, weight:'1 kg', img:IMG('1557925923-cd4648e211a0'), fallback:'Love+Cake'},
  {id:'c9', cat:'cakes', name:'Chocolate Truffle Celebration Cake', price:7500, weight:'1.5 kg', img:IMG('1571115177098-24ec42ed204d'), fallback:'Chocolate+Cake'},
  {id:'c10',cat:'cakes', name:'Red Velvet Premium Birthday Cake', price:6800, weight:'1 kg', img:IMG('1486427944299-d1955d23e34d'), fallback:'Red+Velvet+Cake', tag:'Premium'},
  {id:'g1', cat:'gifts', name:'Father\'s Day Gift Hamper', price:3450, weight:null, img:IMG('1549465220-1a8b9238cd48'), fallback:'Gift+Hamper'},
  {id:'g2', cat:'gifts', name:'Crimson Love Balloon Hamper', price:7300, weight:null, img:IMG('1512909006721-3d6018887383'), fallback:'Balloon+Hamper'},
  {id:'g3', cat:'gifts', name:'Luxury Love Indulgence Box', price:10620, weight:null, img:IMG('1607344645866-009c320b63e0'), fallback:'Luxury+Gift+Box', tag:'Luxury'},
  {id:'g4', cat:'gifts', name:'Togetherness Couple Gift Hamper', price:7200, weight:null, img:IMG('1544816155-12df9643f363'), fallback:'Couple+Hamper'},
  {id:'g5', cat:'gifts', name:'Peachy Blooms Celebration Set', price:10900, weight:null, img:IMG('1607083206968-13611e3d76db'), fallback:'Celebration+Set'},
  {id:'g6', cat:'gifts', name:'Fresh Fruit & Chocolate Basket', price:23100, weight:null, img:IMG('1513201099705-a9746e1e201f'), fallback:'Fruit+Basket'},
    {id:'g7', cat:'gifts', name:'Pink Balloon Combo Pack', price:26500, weight:null, img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80', fallback:'Balloon+Combo'},
  {id:'g8', cat:'gifts', name:'The Joyful Munch Gift Hamper', price:17850, weight:null, img:IMG('1596462502278-27bfdc403348'), fallback:'Munch+Hamper', tag:'Best Seller'},
  {id:'g9', cat:'gifts', name:'Scented Candle & Bath Gift Set', price:8500, weight:null, img:IMG('1602173574767-37ac01994b2a'), fallback:'Candle+Gift+Set'},
  {id:'g10',cat:'gifts', name:'Personalised Mug & Chocolate Box', price:4900, weight:null, img:IMG('1544441893-675973e31985'), fallback:'Mug+Chocolate'}
];

const catLabels = {flowers:'Flower Bouquets', cakes:'Birthday Cakes', gifts:'Gift Items'};
const CAKE_FLAVORS = ['Chocolate', 'Vanilla', 'Butter', 'Red Velvet', 'Strawberry', 'Coffee', 'Fruit Cake', 'Ribbon'];

const deliveryZones = [
  {zone:'Zone 1 – Colombo & Suburbs', fee:350, time:'Same day (order before 2 PM)', cities:['Colombo 01','Colombo 02','Colombo 03','Colombo 04','Colombo 05','Colombo 06','Colombo 07','Colombo 08','Colombo 09','Colombo 10','Dehiwala','Mount Lavinia','Nugegoda','Rajagiriya','Battaramulla','Kaduwela','Maharagama','Boralesgamuwa','Moratuwa','Kotte','Kolonnawa','Wellawatte','Bambalapitiya','Homagama']},
  {zone:'Zone 2 – Gampaha District', fee:450, time:'1 working day', cities:['Negombo','Gampaha','Ja-Ela','Wattala','Kelaniya','Kiribathgoda','Kadawatha','Minuwangoda','Divulapitiya','Ragama']},
  {zone:'Zone 3 – Major Cities', fee:650, time:'1–2 working days', cities:['Kandy','Galle','Matara','Kurunegala','Ratnapura','Kegalle','Kalutara','Panadura','Chilaw','Puttalam','Nuwara Eliya','Badulla','Bandarawela','Matale','Hambantota']},
  {zone:'Zone 4 – North & East', fee:950, time:'2–3 working days', cities:['Jaffna','Vavuniya','Batticaloa','Trincomalee','Ampara','Anuradhapura','Polonnaruwa']},
  {zone:'Zone 5 – Remote Areas', fee:1200, time:'3–4 working days', cities:['Monaragala','Mullaitivu','Kilinochchi','Mannar','Point Pedro']}
];

function findZone(city){ return deliveryZones.find(z => z.cities.includes(city)); }
function allCities(){ return deliveryZones.flatMap(z => z.cities.map(c => ({city:c, zone:z.zone, fee:z.fee, time:z.time}))); }

const FREE_DELIVERY_THRESHOLD = 15000;


/* ------------------------------------------------------------
   2. CART STATE
   ------------------------------------------------------------ */
let cart = JSON.parse(localStorage.getItem('luxe_cart') || '[]');
cart = cart.map(i => (i.id && i.id.startsWith('c') && !i.flavor) ? {...i, flavor: CAKE_FLAVORS[0]} : i);

function saveCart(){ localStorage.setItem('luxe_cart', JSON.stringify(cart)); updateCartCount(); }

function updateCartCount(){
  const count = cart.reduce((s,i) => s + i.qty, 0);
  const el = document.getElementById('cartCount');
  if(!el) return;
  if(count > 0){ el.style.display = 'grid'; el.textContent = count; }
  else { el.style.display = 'none'; }
}

function cartSubtotal(){ return cart.reduce((s,i) => s + i.price * i.qty, 0); }

function addToCart(id, weight, flavor){
  const p = products.find(x => x.id === id);
  if(!p) return;
  const w = weight || p.weight || null;
  const f = flavor || (p.cat === 'cakes' ? CAKE_FLAVORS[0] : null);
  const key = id + '|' + (w||'') + '|' + (f||'');
  const existing = cart.find(i => (i.id + '|' + (i.weight||'') + '|' + (i.flavor||'')) === key);
  if(existing){ existing.qty += 1; }
  else { cart.push({id:p.id, name:p.name, price:p.price, weight:w, flavor:f, img:p.img, fallback:p.fallback, qty:1}); }
  saveCart();
  const label = [w, f].filter(Boolean).join(' · ');
  showToast(`${p.name}${label ? ' (' + label + ')' : ''} added to cart`);
}

function removeFromCart(idx){ cart.splice(idx,1); saveCart(); renderCart(); }

function updateQty(idx, delta){
  cart[idx].qty += delta;
  if(cart[idx].qty <= 0){ cart.splice(idx,1); }
  saveCart(); renderCart();
}


/* ------------------------------------------------------------
   3. HELPERS
   ------------------------------------------------------------ */
const money = n => 'Rs. ' + n.toLocaleString('en-LK');

function imgTag(p, cls=''){
  return `<img src="${p.img}" alt="${p.name}" loading="lazy" class="${cls}"
    onerror="this.onerror=null;this.src='https://placehold.co/600x600/F5F0E8/8B6F47?text=${encodeURIComponent(p.fallback || p.name)}'">`;
}

function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._tt);
  window._tt = setTimeout(() => t.classList.remove('show'), 3000);
}

function productCard(p){
  return `<article class="product-card">
    <a href="product.html?id=${p.id}" class="product-img">
      ${imgTag(p)}
      ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
    </a>
    <div class="product-body">
      <div class="product-cat">${catLabels[p.cat]}</div>
      <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
      ${p.weight ? `<div class="product-weight">⚖ ${p.weight}</div>` : ''}
      <div class="product-price">${money(p.price)}</div>
      <button class="add-btn" onclick="addToCart('${p.id}')">Add to Cart</button>
    </div>
  </article>`;
}


/* ------------------------------------------------------------
   4. HEADER & FOOTER INJECTION
   (edit here to change nav or footer site-wide)
   ------------------------------------------------------------ */
(function injectHeaderFooter(){
  const page = document.body.dataset.page || '';
  const active = (name) => (page === name) ? 'active' : '';

  const headerPlaceholder = document.getElementById('site-header');
  if(headerPlaceholder){
    headerPlaceholder.outerHTML = `
      <div class="topbar">🌸 Free delivery on orders over <span>Rs.15,000</span> · Same day delivery in Colombo</div>
      <header>
        <div class="container">
          <div class="nav">
            <a href="index.html" class="logo"><span class="logo-mark">✦</span>Luxe Gifts<span style="color:var(--gold);font-size:14px;font-family:'Inter'">LK</span></a>
            <ul class="nav-links">
              <li><a href="index.html" class="${active('home')}">Home</a></li>
              <li><a href="shop.html" class="${active('shop')}">Shop</a></li>
              <li><a href="flowers.html" class="${active('flowers')}">Flowers</a></li>
              <li><a href="cakes.html" class="${active('cakes')}">Cakes</a></li>
              <li><a href="gifts.html" class="${active('gifts')}">Gifts</a></li>
              <li><a href="about.html" class="${active('about')}">About</a></li>
              <li><a href="delivery.html" class="${active('delivery')}">Delivery</a></li>
              <li><a href="contact.html" class="${active('contact')}">Contact</a></li>
            </ul>
            <div class="nav-actions">
              <a href="cart.html" class="icon-btn" aria-label="Cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span class="cart-count" id="cartCount" style="display:none">0</span>
              </a>
              <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="mobile-menu" id="mobileMenu">
          <a href="index.html">Home</a>
          <a href="shop.html">Shop All</a>
          <a href="flowers.html">Flower Bouquets</a>
          <a href="cakes.html">Birthday Cakes</a>
          <a href="gifts.html">Gift Items</a>
          <a href="about.html">About Us</a>
          <a href="delivery.html">Delivery Info</a>
          <a href="contact.html">Contact</a>
        </div>
      </header>
    `;
  }

  const footerPlaceholder = document.getElementById('site-footer');
  if(footerPlaceholder){
    footerPlaceholder.outerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="logo"><span class="logo-mark">✦</span>Luxe Gifts<span style="color:var(--gold);font-size:14px;font-family:'Inter'">LK</span></a>
              <p>Sri Lanka's premium destination for handcrafted flower bouquets, celebration cakes, and curated gift hampers. Delivered island-wide with love.</p>
              <div class="footer-contact"><strong>Address:</strong> 42 Galle Road, Colombo 03, Sri Lanka</div>
              <div class="footer-contact"><strong>Phone:</strong> +94 77 123 4567</div>
              <div class="footer-contact"><strong>Email:</strong> hello@luxegifts.lk</div>
            </div>
            <div class="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="flowers.html">Flower Bouquets</a></li>
                <li><a href="cakes.html">Birthday Cakes</a></li>
                <li><a href="gifts.html">Gift Items</a></li>
                <li><a href="shop.html">All Products</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="delivery.html">Delivery Info</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="about.html">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="delivery.html">Delivery Charges</a></li>
                <li><a href="delivery.html">Return Policy</a></li>
                <li><a href="contact.html">Help Center</a></li>
                <li><a href="contact.html">Track Order</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <div>© 2026 Luxe Gifts LK. All rights reserved.</div>
            <div class="footer-credit">Design & Developed by <a href="https://nexa3solutions.com" target="_blank" rel="noopener">Nexa3 Solutions</a></div>
          </div>
        </div>
      </footer>
    `;
  }

  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if(toggle && menu){
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  updateCartCount();
})();


/* ------------------------------------------------------------
   5. PAGE ELEMENT REFERENCES
   ------------------------------------------------------------ */
const main = document.getElementById('main');


/* ------------------------------------------------------------
   6. PAGE RENDERERS
   ------------------------------------------------------------ */

/* ---- Home ---- */
function renderHome(){
  if(!main) return;
  const bestSellers = products.filter(p => p.tag).concat(products.slice(0,4)).slice(0,8);
  main.innerHTML = `<div class="page">
    <section class="hero" style="padding-top:60px">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);font-weight:600;margin-bottom:14px">Sri Lanka's Premium Gifting Destination</div>
            <h1>Celebrate every <em>moment</em> with something beautiful.</h1>
            <p>Handcrafted flower bouquets, artisan celebration cakes, and curated gift hampers delivered island wide with same day service in Colombo.</p>
            <div class="hero-cta">
              <a href="shop.html" class="btn btn-primary">Shop Now →</a>
              <a href="cakes.html" class="btn btn-outline">Order a Cake</a>
            </div>
          </div>
          <div class="hero-visual">
            <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80" alt="Luxury rose bouquet" onerror="this.onerror=null;this.src='https://placehold.co/800x1000/F5F0E8/8B6F47?text=Luxe+Gifts+LK'">
            <div class="hero-badge"><span class="dot"></span>Same day delivery in Colombo</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Shop by Category</span>
          <h2>Thoughtfully curated for every occasion</h2>
          <p>Explore our collections each piece crafted with care and delivered with love.</p>
        </div>
        <div class="cat-grid">
          <a href="flowers.html" class="cat-card">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80" alt="Flower Bouquets" onerror="this.onerror=null;this.src='https://placehold.co/700x900/F5F0E8/8B6F47?text=Flower+Bouquets'">
            <div class="cat-info"><h3>Flower Bouquets</h3><p>Fresh blooms, hand-tied daily</p><span>Explore Collection</span></div>
          </a>
          <a href="cakes.html" class="cat-card">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80" alt="Birthday Cakes" onerror="this.onerror=null;this.src='https://placehold.co/700x900/F5F0E8/8B6F47?text=Birthday+Cakes'">
            <div class="cat-info"><h3>Birthday Cakes</h3><p>Artisan-baked, in kg sizes</p><span>Explore Collection</span></div>
          </a>
          <a href="gifts.html" class="cat-card">
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80" alt="Gift Items" onerror="this.onerror=null;this.src='https://placehold.co/700x900/F5F0E8/8B6F47?text=Gift+Items'">
            <div class="cat-info"><h3>Gift Items</h3><p>Hampers, boxes & curated sets</p><span>Explore Collection</span></div>
          </a>
        </div>
      </div>
    </section>

    <section style="background:var(--bg-2)">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Best Sellers</span>
          <h2>Loved by our customers</h2>
          <p>Our most-gifted picks auto-sliding on mobile for easy browsing.</p>
        </div>
        <div class="carousel-wrap">
          <div class="carousel" id="bestCarousel">${bestSellers.map(p => productCard(p)).join('')}</div>
          <div class="carousel-nav">
            <button onclick="slideCarousel(-1)" aria-label="Previous">‹</button>
            <button onclick="slideCarousel(1)" aria-label="Next">›</button>
          </div>
        </div>
      </div>
    </section>

    <section class="occasions">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Shop by Occasion</span>
          <h2>What are you celebrating?</h2>
        </div>
        <div class="occ-grid">
          <a href="shop.html" class="occ-card"><div class="occ-icon">🎂</div><h4>Birthday</h4><p>Make their day</p></a>
          <a href="shop.html" class="occ-card"><div class="occ-icon">💍</div><h4>Anniversary</h4><p>Celebrate love</p></a>
          <a href="shop.html" class="occ-card"><div class="occ-icon">💐</div><h4>Get Well</h4><p>Send some cheer</p></a>
          <a href="shop.html" class="occ-card"><div class="occ-icon">🎉</div><h4>Congrats</h4><p>Share the joy</p></a>
        </div>
      </div>
    </section>

    <section class="trust">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-item"><div class="trust-icon">🚚</div><h4>Island wide Delivery</h4><p>All 25 districts covered</p></div>
          <div class="trust-item"><div class="trust-icon">⚡</div><h4>Same-day Colombo</h4><p>Order before 2 PM</p></div>
          <div class="trust-item"><div class="trust-icon">💎</div><h4>Premium Quality</h4><p>Handcrafted daily</p></div>
          <div class="trust-item"><div class="trust-icon">💳</div><h4>Secure Payments</h4><p>Card or cash on delivery</p></div>
        </div>
      </div>
    </section>
  </div>`;
  setupAutoSlide();
}

/* ---- Shop & Category ---- */
function renderShopPage(){
  if(!main) return;
  const cat = document.body.dataset.category || 'all';
  const catParam = (cat === 'all') ? null : cat;

  const list = catParam ? products.filter(p => p.cat === catParam) : products;
  const title = catParam ? catLabels[catParam] : 'Shop All Products';
  const sub = catParam === 'flowers' ? 'Fresh, hand-tied bouquets crafted by our florists.'
    : catParam === 'cakes' ? 'Artisan-baked celebration cakes — priced per kg. Place your cake order at least 1 week (7 days) before the date you need it.'
    : catParam === 'gifts' ? 'Curated hampers and gift sets for every occasion.'
    : 'Browse our full collection of flowers, cakes, and gifts.';

  main.innerHTML = `<div class="page">
    <div class="shop-hero">
      <div class="container">
        <h1>${title}</h1>
        <p>${sub}</p>
      </div>
    </div>
    <section style="padding-top:0">
      <div class="container">
        <div class="filters">
          <a href="shop.html" class="filter-btn ${!catParam?'active':''}">All (${products.length})</a>
          <a href="flowers.html" class="filter-btn ${catParam==='flowers'?'active':''}">Flowers (${products.filter(p=>p.cat==='flowers').length})</a>
          <a href="cakes.html" class="filter-btn ${catParam==='cakes'?'active':''}">Cakes (${products.filter(p=>p.cat==='cakes').length})</a>
          <a href="gifts.html" class="filter-btn ${catParam==='gifts'?'active':''}">Gifts (${products.filter(p=>p.cat==='gifts').length})</a>
        </div>
        <div class="products-grid">
          ${list.map(p => productCard(p)).join('')}
        </div>
      </div>
    </section>
  </div>`;
}

/* ---- Product detail ---- */
let selectedWeight = null;
let selectedFlavor = null;

function renderProduct(){
  if(!main) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = products.find(x => x.id === id);

  if(!p){
    main.innerHTML = '<div class="container" style="padding:100px 0;text-align:center"><h2>Product not found</h2><a href="shop.html" class="btn btn-primary" style="margin-top:20px">Back to Shop</a></div>';
    return;
  }

  selectedWeight = p.weight || null;
  selectedFlavor = (p.cat === 'cakes') ? CAKE_FLAVORS[0] : null;
  const weights = p.cat === 'cakes' ? ['1 kg','1.5 kg','2 kg'] : null;

  main.innerHTML = `<div class="page">
    <div class="container">
      <div class="product-detail">
        <div class="pd-img">${imgTag(p)}</div>
        <div class="pd-info">
          <div class="pd-cat">${catLabels[p.cat]}</div>
          <h1>${p.name}</h1>
          <div class="pd-price">${money(p.price)}</div>
          <p class="pd-desc">${p.cat === 'cakes' ? 'Handcrafted with premium ingredients, beautifully decorated, and baked fresh on the day of delivery.' : p.cat === 'flowers' ? 'Freshly hand-tied by our florists using premium seasonal blooms, wrapped in luxury paper.' : 'Curated gift set with premium items, elegantly packaged — perfect for any occasion.'}</p>

          ${weights ? `
            <div class="pd-option">
              <label>Select Weight</label>
              <div class="weight-opts">
                ${weights.map(w => `<button class="weight-opt ${w===selectedWeight?'selected':''}" onclick="selectVariant('weight','${w}',this)">${w}</button>`).join('')}
              </div>
            </div>
            <div class="pd-option">
              <label>Select Flavor</label>
              <div class="weight-opts">
                ${CAKE_FLAVORS.map(f => `<button class="weight-opt ${f===selectedFlavor?'selected':''}" onclick="selectVariant('flavor','${f}',this)">${f}</button>`).join('')}
              </div>
            </div>
            <div class="delivery-note" style="border-left-color:#c33;background:#FDF2F2;margin-top:0;margin-bottom:24px">
              <strong>⏰ Cake Order Notice:</strong> Please place your cake order at least <strong>1 week (7 days) before the date you need it</strong>.
            </div>` : ''}

          <div class="pd-option">
            <label>Quantity</label>
            <div class="qty">
              <button onclick="changeQty(-1)">−</button>
              <input type="text" id="qtyInput" value="1" readonly>
              <button onclick="changeQty(1)">+</button>
            </div>
          </div>

          <div class="pd-actions">
            <button class="btn btn-primary" onclick="addFromDetail('${p.id}')">Add to Cart</button>
            <a href="cart.html" class="btn btn-outline" onclick="addFromDetail('${p.id}')">Buy Now</a>
          </div>
          <div class="delivery-note" style="margin-top:24px"><strong>Delivery:</strong> Calculated at checkout based on your city. Free delivery on orders over ${money(FREE_DELIVERY_THRESHOLD)}.</div>
        </div>
      </div>
    </div>
  </div>`;
}

function selectVariant(type, value, btn){
  if(type === 'weight') selectedWeight = value;
  else if(type === 'flavor') selectedFlavor = value;
  btn.parentElement.querySelectorAll('.weight-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function changeQty(d){
  const inp = document.getElementById('qtyInput');
  if(!inp) return;
  let v = parseInt(inp.value) + d;
  if(v < 1) v = 1;
  inp.value = v;
}

function addFromDetail(id){
  const qty = parseInt(document.getElementById('qtyInput')?.value || 1);
  const p = products.find(x => x.id === id);
  const w = selectedWeight || p.weight || null;
  const f = (p.cat === 'cakes') ? selectedFlavor : null;
  const key = id + '|' + (w||'') + '|' + (f||'');
  const existing = cart.find(i => (i.id + '|' + (i.weight||'') + '|' + (i.flavor||'')) === key);
  if(existing){ existing.qty += qty; } else { cart.push({id:p.id, name:p.name, price:p.price, weight:w, flavor:f, img:p.img, fallback:p.fallback, qty}); }
  saveCart();
  const label = [w, f].filter(Boolean).join(' · ');
  showToast(`${p.name}${label ? ' ('+label+')' : ''} × ${qty} added to cart`);
}

/* ---- Cart page ---- */
function renderCart(){
  if(!main) return;
  if(cart.length === 0){
    main.innerHTML = `<div class="page cart-page"><div class="container"><div class="empty-cart">
      <h3>Your cart is empty</h3>
      <p style="margin-bottom:24px">Looks like you haven't added anything yet.</p>
      <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
    </div></div></div>`;
    return;
  }
  const subtotal = cartSubtotal();
  main.innerHTML = `<div class="page cart-page">
    <div class="container">
      <h1 style="font-size:32px;margin-bottom:32px">Shopping Cart</h1>
      ${cart.some(i => i.id && i.id.startsWith('c')) ? `<div class="delivery-note" style="border-left-color:#c33;background:#FDF2F2;margin-bottom:24px"><strong>⏰ Cake Order Notice:</strong> Please place your cake order at least <strong>1 week (7 days) before the date you need it</strong> for guaranteed availability.</div>` : ''}
      <div class="cart-layout">
        <div class="cart-items">
          ${cart.map((i,idx) => `
            <div class="cart-item">
              <img src="${i.img}" alt="${i.name}" class="cart-item-img" onerror="this.onerror=null;this.src='https://placehold.co/200x200/F5F0E8/8B6F47?text=${encodeURIComponent(i.fallback||'Item')}'">
              <div class="cart-item-info">
                <h4>${i.name}</h4>
                ${i.weight ? `<p>Weight: ${i.weight}</p>` : ''}
                ${i.flavor ? `<p>Flavor: ${i.flavor}</p>` : ''}
                <p>${money(i.price)} each</p>
                <div class="qty" style="margin-top:8px">
                  <button onclick="updateQty(${idx},-1)">−</button>
                  <input type="text" value="${i.qty}" readonly style="width:36px">
                  <button onclick="updateQty(${idx},1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${idx})">Remove</button>
              </div>
              <div class="cart-item-price">${money(i.price * i.qty)}</div>
            </div>
          `).join('')}
        </div>
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="sum-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
          <div class="sum-row"><span>Delivery</span><span style="color:var(--gold);font-weight:600">Calculated at checkout</span></div>
          <div class="sum-row total"><span>Total</span><span>${money(subtotal)}</span></div>
          <a href="checkout.html" class="btn btn-primary btn-block" style="margin-top:20px">Proceed to Checkout →</a>
          <a href="shop.html" class="btn btn-outline btn-block" style="margin-top:10px">Continue Shopping</a>
        </div>
      </div>
    </div>
  </div>`;
}

/* ---- Checkout page ---- */
function renderCheckout(){
  if(!main) return;
  if(cart.length === 0){ location.href = 'cart.html'; return; }
  const subtotal = cartSubtotal();
  const cities = allCities().sort((a,b) => a.city.localeCompare(b.city));

  main.innerHTML = `<div class="page checkout-page">
    <div class="container">
      <h1 style="font-size:32px;margin-bottom:32px">Checkout</h1>
      ${cart.some(i => i.id && i.id.startsWith('c')) ? `<div class="delivery-note" style="border-left-color:#c33;background:#FDF2F2;margin-bottom:24px"><strong>⏰ Cake Order Notice:</strong> Please place your cake order at least <strong>1 week (7 days) before the date you need it</strong> for guaranteed availability.</div>` : ''}
      <div class="checkout-layout">
        <div class="checkout-form">
          <h3>Delivery Details</h3>
          <div class="form-row">
            <div class="form-group"><label>First Name *</label><input type="text" id="fname" placeholder="Nimal" required></div>
            <div class="form-group"><label>Last Name *</label><input type="text" id="lname" placeholder="Perera" required></div>
          </div>
          <div class="form-group"><label>Phone Number *</label><input type="tel" id="phone" placeholder="+94 77 123 4567" required></div>
          <div class="form-group"><label>Email</label><input type="email" id="email" placeholder="you@example.com"></div>
          <div class="form-group"><label>Delivery Address *</label><input type="text" id="address" placeholder="42 Galle Road, Colombo 03" required></div>
          <div class="form-row">
            <div class="form-group">
              <label>City / Location *</label>
              <select id="city" onchange="updateDelivery()" required>
                <option value="">— Select your city —</option>
                ${cities.map(c => `<option value="${c.city}" data-fee="${c.fee}" data-zone="${c.zone}" data-time="${c.time}">${c.city} — ${c.zone.split('–')[0].trim()}</option>`).join('')}
              </select>
            </div>
            <div class="form-group"><label>Delivery Date</label><input type="date" id="delDate"></div>
          </div>
          <div class="form-group"><label>Gift Message (optional)</label><textarea id="message" rows="3" placeholder="Write a message for the recipient..."></textarea></div>
          <div class="delivery-note" id="deliveryNote">Select your city to see delivery fee and estimated time.</div>
          <button class="btn btn-gold btn-block" style="margin-top:24px" onclick="placeOrder()">Place Order · Pay on Delivery</button>
        </div>
        <div class="checkout-summary">
          <h3>Order Summary</h3>
          ${cart.map(i => `<div class="mini-item"><span>${i.name}${i.weight?' ('+i.weight+')':''}${i.flavor?' · '+i.flavor:''} × ${i.qty}</span><span>${money(i.price*i.qty)}</span></div>`).join('')}
          <div class="sum-row" style="margin-top:16px;border-top:1px solid var(--line);padding-top:16px"><span>Subtotal</span><span>${money(subtotal)}</span></div>
          <div class="sum-row"><span>Delivery Fee</span><span id="deliveryFee">—</span></div>
          <div class="sum-row total"><span>Total</span><span id="grandTotal">${money(subtotal)}</span></div>
        </div>
      </div>
    </div>
  </div>`;
}

function updateDelivery(){
  const sel = document.getElementById('city');
  if(!sel) return;
  const opt = sel.options[sel.selectedIndex];
  const subtotal = cartSubtotal();
  if(!opt.value){
    document.getElementById('deliveryFee').textContent = '—';
    document.getElementById('grandTotal').textContent = money(subtotal);
    document.getElementById('deliveryNote').innerHTML = 'Select your city to see delivery fee and estimated time.';
    return;
  }
  const fee = parseInt(opt.dataset.fee);
  const zone = opt.dataset.zone;
  const time = opt.dataset.time;
  const freeDel = subtotal >= FREE_DELIVERY_THRESHOLD;
  const finalFee = freeDel ? 0 : fee;

  document.getElementById('deliveryFee').innerHTML = freeDel
    ? `<span style="color:#4CAF50;font-weight:600">FREE</span>`
    : money(fee);
  document.getElementById('grandTotal').textContent = money(subtotal + finalFee);
  document.getElementById('deliveryNote').innerHTML = `<strong>${zone}</strong> · Estimated delivery: <strong>${time}</strong>${freeDel ? ' · <span style="color:#4CAF50">Free delivery applied!</span>' : ''}`;
}

function placeOrder(){
  const required = ['fname','lname','phone','address','city'];
  for(const id of required){
    const el = document.getElementById(id);
    if(!el.value.trim()){ el.focus(); showToast('Please fill in all required fields'); return; }
  }
  const orderNum = 'LX' + Date.now().toString().slice(-8);
  cart = [];
  saveCart();
  const m = document.getElementById('main');
  if(m) m.innerHTML = `<div class="page" style="padding:100px 0;text-align:center">
    <div class="container">
      <div style="font-size:64px;margin-bottom:16px">🎉</div>
      <h1 style="font-size:36px;margin-bottom:16px">Order Placed Successfully!</h1>
      <p style="color:var(--ink-2);margin-bottom:8px">Your order number is <strong style="color:var(--gold);font-size:18px">${orderNum}</strong></p>
      <p style="color:var(--ink-2);margin-bottom:32px">We'll call you shortly to confirm delivery details.</p>
      <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
    </div>
  </div>`;
}

/* ---- Delivery page ---- */
function initDeliveryPage(){
  const thresh = document.getElementById('freeThreshold');
  if(thresh) thresh.textContent = money(FREE_DELIVERY_THRESHOLD);

  const body = document.getElementById('deliveryZonesBody');
  if(body){
    body.innerHTML = deliveryZones.map(z =>
      `<tr><td><strong>${z.zone.split('–')[0].trim()}</strong></td><td>${z.cities.slice(0,5).join(', ')}${z.cities.length>5?` +${z.cities.length-5} more`:''}</td><td>${money(z.fee)}</td></tr>`
    ).join('');
  }
}


/* ------------------------------------------------------------
   7. CAROUSEL (mobile 2-up auto-slide)
   ------------------------------------------------------------ */
let autoSlideTimer = null;

function setupAutoSlide(){
  clearInterval(autoSlideTimer);
  if(window.innerWidth >= 768) return;
  const el = document.getElementById('bestCarousel');
  if(!el) return;
  autoSlideTimer = setInterval(() => {
    if(window.innerWidth >= 768 || !document.getElementById('bestCarousel')){ clearInterval(autoSlideTimer); return; }
    const card = el.querySelector('.product-card');
    if(!card) return;
    const step = (card.offsetWidth + 16) * 2;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if(el.scrollLeft >= maxScroll - 10){ el.scrollTo({left:0, behavior:'smooth'}); }
    else { el.scrollTo({left: Math.min(el.scrollLeft + step, maxScroll), behavior:'smooth'}); }
  }, 4000);
}

function slideCarousel(dir){
  const el = document.getElementById('bestCarousel');
  if(!el) return;
  const card = el.querySelector('.product-card');
  if(!card) return;
  el.scrollBy({left: dir * (card.offsetWidth + 24), behavior:'smooth'});
}

window.addEventListener('resize', () => {
  clearInterval(autoSlideTimer);
  if(document.getElementById('bestCarousel')) setupAutoSlide();
});


/* ------------------------------------------------------------
   8. ROUTER / INIT
   ------------------------------------------------------------ */
function getPageKey(){
  const path = location.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return file.replace('.html', '') || 'index';
}

function init(){
  const key = getPageKey();
  if(key === 'index' || key === ''){
    renderHome();
  } else if(key === 'shop' || key === 'flowers' || key === 'cakes' || key === 'gifts'){
    renderShopPage();
  } else if(key === 'product'){
    renderProduct();
  } else if(key === 'cart'){
    renderCart();
  } else if(key === 'checkout'){
    renderCheckout();
  } else if(key === 'delivery'){
    initDeliveryPage();
  }
  // about.html, contact.html — content is in the HTML, nothing to render
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
