/* =============================================================
   ForgeFlow Industrial Technologies — script.js
   Complete vanilla JS: nav, filters, modal, form, chatbot
   ============================================================= */

'use strict';

/* ════════════════════════════════════════════════════════════
   PRODUCT DATASET
   (Structured for LeadRyze AI dataset extraction)
   ════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    id: 1,
    name: 'FF-H100 High Performance Butterfly Valve',
    model: 'FF-H100',
    category: 'Butterfly Valves',
    size: '2" – 24"',
    pressureClass: '150 / 300 ANSI',
    material: 'Carbon Steel / Stainless Steel',
    actuation: 'Manual / Pneumatic / Electric',
    application: ['Chemical Processing', 'Water Treatment', 'Oil & Gas'],
    separationType: null,
    capacity: null,
    torque: null,
    operatingPressure: null,
    type: null,
    description:
      'High-performance butterfly valve designed for reliable isolation and flow control in demanding industrial environments. Engineered to deliver long service life and consistent sealing performance across a broad range of pressures and temperatures.',
    image: 'https://images.unsplash.com/photo-1698031610493-c19fa20dfeab?w=600&q=75',
    keywords: ['butterfly', 'valve', 'flow control', 'isolation', 'chemical', 'water', 'oil', 'gas'],
  },
  {
    id: 2,
    name: 'FF-C200 Chemical Service Valve',
    model: 'FF-C200',
    category: 'Industrial Valves',
    size: '2" – 20"',
    pressureClass: '150 / 300 ANSI',
    material: 'Stainless Steel / Duplex',
    actuation: 'Manual / Pneumatic',
    application: ['Chemical Processing'],
    separationType: null,
    capacity: null,
    torque: null,
    operatingPressure: null,
    type: null,
    description:
      'Precision-engineered chemical service valve manufactured in stainless steel and duplex alloys for high-corrosion environments. Suitable for aggressive media and wide temperature ranges in chemical processing plants.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=75',
    keywords: ['chemical', 'valve', 'stainless', 'duplex', 'corrosion', 'service'],
  },
  {
    id: 3,
    name: 'FF-P400 Pneumatic Actuator',
    model: 'FF-P400',
    category: 'Automation',
    size: null,
    pressureClass: null,
    material: 'Aluminium / Carbon Steel',
    actuation: 'Pneumatic (Double / Spring-Return)',
    application: ['Automated Valve Systems', 'Manufacturing', 'Oil & Gas'],
    separationType: null,
    capacity: null,
    torque: '40 – 4000 Nm',
    operatingPressure: '5 – 8 bar',
    type: null,
    description:
      'Robust pneumatic rack-and-pinion actuator delivering reliable automated valve operation across a wide torque range. Available in double-acting and spring-return configurations for fail-safe performance.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=75',
    keywords: ['pneumatic', 'actuator', 'automation', 'valve', 'rack', 'pinion'],
  },
  {
    id: 4,
    name: 'FF-D500 Industrial Decanter',
    model: 'FF-D500',
    category: 'Separation Equipment',
    size: null,
    pressureClass: null,
    material: 'Stainless Steel 316L',
    actuation: null,
    application: ['Wastewater Treatment', 'Food Processing', 'Chemical Processing'],
    separationType: 'Solid-Liquid',
    capacity: '5 – 25 m³/h',
    torque: null,
    operatingPressure: null,
    type: 'Horizontal Scroll Decanter',
    description:
      'Continuous horizontal scroll decanter centrifuge for high-throughput solid-liquid separation. Designed for reliable dewatering and thickening of industrial sludges and process slurries.',
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&q=75',
    keywords: ['decanter', 'separation', 'wastewater', 'dewatering', 'sludge', 'centrifuge', 'solid', 'liquid'],
  },
  {
    id: 5,
    name: 'FF-S300 Disc Stack Separator',
    model: 'FF-S300',
    category: 'Separation Equipment',
    size: null,
    pressureClass: null,
    material: 'Stainless Steel 316L',
    actuation: null,
    application: ['Food Processing', 'Beverage', 'Chemical Processing'],
    separationType: 'Liquid-Liquid / Solid-Liquid',
    capacity: '2 – 15 m³/h',
    torque: null,
    operatingPressure: null,
    type: 'Disc Stack Centrifuge',
    description:
      'High-speed disc stack centrifuge for fine clarification and liquid-liquid or solid-liquid separation. Suitable for beverage clarification, milk separation, and chemical emulsion breaking.',
    image: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&q=75',
    keywords: ['disc', 'separator', 'centrifuge', 'liquid', 'clarification', 'beverage', 'food'],
  },
  {
    id: 6,
    name: 'FF-T700 Tricanter System',
    model: 'FF-T700',
    category: 'Three-Phase Separation',
    size: null,
    pressureClass: null,
    material: 'Stainless Steel 316L / Duplex',
    actuation: null,
    application: ['Oil Recovery', 'Wastewater Treatment', 'Food Processing'],
    separationType: 'Solid-Liquid-Liquid (Three-Phase)',
    capacity: '10 – 40 m³/h',
    torque: null,
    operatingPressure: null,
    type: 'Three-Phase Decanter (Tricanter)',
    description:
      'Industrial tricanter centrifuge for simultaneous three-phase separation of solids, heavy liquid, and light liquid phases. Widely applied in olive oil extraction, fish oil processing, and oily wastewater treatment.',
    image: 'https://images.unsplash.com/photo-1627752633728-85ebd86dfe4a?w=600&q=75',
    keywords: ['tricanter', 'three-phase', 'oil', 'wastewater', 'food', 'separation', 'solid', 'liquid'],
  },
  {
    id: 7,
    name: 'FF-B250 Belt Press',
    model: 'FF-B250',
    category: 'Dewatering Systems',
    size: null,
    pressureClass: null,
    material: 'Carbon Steel / Stainless Steel',
    actuation: null,
    application: ['Municipal Wastewater Treatment', 'Industrial Sludge Dewatering'],
    separationType: 'Solid-Liquid (Dewatering)',
    capacity: '5 – 20 m³/h',
    torque: null,
    operatingPressure: null,
    type: 'Belt Filter Press',
    description:
      'Continuous belt filter press for cost-effective dewatering of municipal and industrial sludges. Featuring automated belt tracking, tension control, and wash water management for reliable, unattended operation.',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8ca?w=600&q=75',
    keywords: ['belt press', 'dewatering', 'sludge', 'wastewater', 'municipal', 'filter'],
  },
  {
    id: 8,
    name: 'FF-E900 Engineered Process System',
    model: 'FF-E900',
    category: 'Engineered Systems',
    size: null,
    pressureClass: null,
    material: 'Customer-Specified',
    actuation: 'Integrated Automation / PLC',
    application: ['Chemical Processing', 'Food Processing', 'Mining', 'Water Treatment'],
    separationType: null,
    capacity: 'Custom-Designed',
    torque: null,
    operatingPressure: null,
    type: 'Custom Process System',
    description:
      'Bespoke integrated process system engineered to specific plant requirements. Combines multiple unit operations — separation, filtration, flow control, and automation — into a single skid-mounted solution. Fully engineered, fabricated, and tested prior to delivery.',
    image: 'https://images.unsplash.com/photo-1509390144018-eecea69c3b82?w=600&q=75',
    keywords: ['engineered', 'custom', 'process', 'system', 'chemical', 'food', 'mining', 'water', 'automation', 'plc'],
  },
];

/* ════════════════════════════════════════════════════════════
   DOM READY
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initProductCatalog();
  initModal();
  initQuoteForm();
  initChatbot();
  initScrollAnimations();
  initCounters();
  duplicateTicker();
});

/* ════════════════════════════════════════════════════════════
   HEADER — sticky + scroll-class
   ════════════════════════════════════════════════════════════ */
function initHeader() {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.main-nav a');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNav();
  }, { passive: true });

  function updateActiveNav() {
    const sections = ['hero', 'products', 'catalog', 'industries', 'solutions', 'about', 'quote', 'contact'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }
}

/* ════════════════════════════════════════════════════════════
   MOBILE NAV
   ════════════════════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger?.classList.remove('open');
    });
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!hamburger?.contains(e.target) && !mobileNav?.contains(e.target)) {
      mobileNav?.classList.remove('open');
      hamburger?.classList.remove('open');
    }
  });
}

/* ════════════════════════════════════════════════════════════
   SMOOTH SCROLL
   ════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ════════════════════════════════════════════════════════════
   PRODUCT CATALOG — search, filter, render
   ════════════════════════════════════════════════════════════ */
function initProductCatalog() {
  const searchInput   = document.getElementById('product-search');
  const categoryFilter = document.getElementById('category-filter');
  const appFilter     = document.getElementById('app-filter');
  const grid          = document.getElementById('product-grid');
  const countEl       = document.getElementById('catalog-count');

  function getFiltered() {
    const q   = (searchInput?.value || '').toLowerCase().trim();
    const cat = categoryFilter?.value || 'All';
    const app = appFilter?.value || 'All Applications';

    return PRODUCTS.filter(p => {
      const matchSearch = !q || [
        p.name, p.model, p.category, p.description,
        ...(p.application || []),
        ...(p.keywords || [])
      ].some(v => v && v.toLowerCase().includes(q));

      const matchCat = cat === 'All' || p.category === cat;

      const matchApp = app === 'All Applications' ||
        (p.application || []).some(a => a.toLowerCase().includes(app.toLowerCase()));

      return matchSearch && matchCat && matchApp;
    });
  }

  function renderProducts(list) {
    if (!grid) return;
    if (list.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="nr-icon">🔍</div>
          <p>No products match your search criteria.</p>
        </div>`;
      countEl && (countEl.textContent = '0 products found');
      return;
    }

    countEl && (countEl.textContent = `${list.length} product${list.length !== 1 ? 's' : ''} found`);

    grid.innerHTML = list.map(p => {
      const specRows = buildSpecRows(p);
      const appStr = (p.application || []).join(', ');

      return `
        <article class="product-card fade-in-up"
          data-id="${p.id}"
          data-product='${JSON.stringify(p).replace(/'/g, "&#39;")}'>
          <div class="product-card-image">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <span class="product-cat-badge">${p.category}</span>
          </div>
          <div class="product-card-body">
            <div class="product-model">${p.model}</div>
            <h3 class="product-name">${p.name}</h3>
            <div class="product-specs-mini">
              ${specRows}
              ${appStr ? `<div class="spec-row">
                <span class="spec-key">Application</span>
                <span class="spec-val">${p.application[0]}${p.application.length > 1 ? '…' : ''}</span>
              </div>` : ''}
            </div>
          </div>
          <div class="product-card-footer">
            <button class="btn-orange-sm view-details-btn" data-id="${p.id}">
              View Details ↗
            </button>
            <a href="#quote" class="btn btn-sm btn-outline-dark" style="border-color:#e5e7eb;color:#6b7280;font-size:.75rem;padding:6px 14px;">
              Get Quote
            </a>
          </div>
        </article>`;
    }).join('');

    // re-observe fade-in
    observeFadeElements(grid.querySelectorAll('.fade-in-up'));

    // attach modal triggers
    grid.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const product = PRODUCTS.find(p => p.id === id);
        if (product) openModal(product);
      });
    });
  }

  function buildSpecRows(p) {
    const rows = [];
    if (p.size)           rows.push(['Size', p.size]);
    if (p.capacity)       rows.push(['Capacity', p.capacity]);
    if (p.pressureClass)  rows.push(['Pressure', p.pressureClass]);
    if (p.material)       rows.push(['Material', p.material.split('/')[0].trim()]);
    if (p.torque)         rows.push(['Torque', p.torque]);
    if (p.separationType) rows.push(['Separation', p.separationType]);
    if (p.actuation)      rows.push(['Actuation', p.actuation.split('/')[0].trim()]);
    return rows.slice(0, 4).map(([k, v]) =>
      `<div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>`
    ).join('');
  }

  function refresh() {
    renderProducts(getFiltered());
  }

  searchInput?.addEventListener('input', refresh);
  categoryFilter?.addEventListener('change', refresh);
  appFilter?.addEventListener('change', refresh);

  // initial render
  renderProducts(PRODUCTS);
}

/* ════════════════════════════════════════════════════════════
   MODAL
   ════════════════════════════════════════════════════════════ */
let currentModal = null;

function initModal() {
  const overlay = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close');

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && currentModal) closeModal();
  });
}

function openModal(product) {
  const overlay   = document.getElementById('product-modal');
  const titleEl   = document.getElementById('modal-product-title');
  const modelEl   = document.getElementById('modal-product-model');
  const bodyEl    = document.getElementById('modal-body');

  if (!overlay || !bodyEl) return;

  titleEl && (titleEl.textContent = product.name);
  modelEl && (modelEl.textContent = product.model);

  const specFields = [
    ['Category',        product.category],
    ['Model',           product.model],
    ['Size / Range',    product.size],
    ['Capacity',        product.capacity],
    ['Pressure Class',  product.pressureClass],
    ['Material',        product.material],
    ['Actuation',       product.actuation],
    ['Torque',          product.torque],
    ['Operating Pressure', product.operatingPressure],
    ['Separation Type', product.separationType],
    ['System Type',     product.type],
    ['Application',     (product.application || []).join(', ')],
  ].filter(([, v]) => v && v !== 'null');

  bodyEl.innerHTML = `
    ${product.description ? `<p class="modal-desc">${product.description}</p>` : ''}
    <div class="modal-grid">
      ${specFields.map(([k, v]) => `
        <div class="modal-spec">
          <div class="modal-spec-key">${k}</div>
          <div class="modal-spec-val">${v}</div>
        </div>`).join('')}
    </div>
    <div class="modal-actions">
      <a href="#quote" class="btn btn-primary" id="modal-quote-btn">
        ✉ Request a Quote
      </a>
      <button class="btn btn-outline-dark" onclick="closeModal()">
        Close
      </button>
    </div>`;

  document.getElementById('modal-quote-btn')?.addEventListener('click', () => {
    closeModal();
    const productField = document.getElementById('q-product');
    if (productField) productField.value = product.name;
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  currentModal = product;
}

function closeModal() {
  const overlay = document.getElementById('product-modal');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

// expose globally for inline onclick
window.closeModal = closeModal;

/* ════════════════════════════════════════════════════════════
   QUOTE FORM
   ════════════════════════════════════════════════════════════ */
function initQuoteForm() {
  const form    = document.getElementById('quote-form');
  const success = document.getElementById('quote-success');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const valid = validateForm(form);
    if (valid) {
      form.style.display = 'none';
      success?.classList.add('show');
      setTimeout(() => {
        success?.classList.remove('show');
        form.style.display = '';
        form.reset();
        clearFormErrors(form);
      }, 6000);
    }
  });
}

function validateForm(form) {
  let valid = true;
  const required = form.querySelectorAll('[required]');
  required.forEach(field => {
    const group = field.closest('.form-group');
    const msg = group?.querySelector('.form-error-msg');
    if (!field.value.trim()) {
      group?.classList.add('error');
      valid = false;
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      group?.classList.add('error');
      if (msg) msg.textContent = 'Please enter a valid email address.';
      valid = false;
    } else {
      group?.classList.remove('error');
    }
    field.addEventListener('input', () => group?.classList.remove('error'), { once: true });
  });
  return valid;
}

function clearFormErrors(form) {
  form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
}

/* ════════════════════════════════════════════════════════════
   CHATBOT
   ════════════════════════════════════════════════════════════ */
const CHATBOT_RESPONSES = [
  {
    pattern: /wastewater|sewage|sludge|municipal/i,
    response: 'We have several solutions for wastewater applications:<br><br>• <strong>FF-D500 Industrial Decanter</strong> — Solid-liquid separation, 5–25 m³/h<br>• <strong>FF-B250 Belt Press</strong> — Sludge dewatering, 5–20 m³/h<br>• <strong>FF-T700 Tricanter</strong> — Three-phase separation for oily wastewater<br><br>Would you like detailed specifications for any of these?',
    products: [4, 7, 6],
  },
  {
    pattern: /butterfly/i,
    response: 'Our butterfly valve range is the <strong>FF-H100 High Performance Butterfly Valve</strong>.<br><br>Key specs:<br>• Size: 2" – 24"<br>• Pressure: 150/300 ANSI<br>• Material: Carbon Steel / Stainless Steel<br>• Actuation: Manual / Pneumatic / Electric<br><br>Ideal for chemical processing, water treatment, and oil & gas.',
    products: [1],
  },
  {
    pattern: /chemical|corrosion|acid|aggressive/i,
    response: 'For chemical processing environments, we recommend:<br><br>• <strong>FF-C200 Chemical Service Valve</strong> — Stainless steel/duplex, corrosion-resistant<br>• <strong>FF-H100 Butterfly Valve</strong> — Available in stainless steel<br>• <strong>FF-D500 Decanter</strong> — Chemical-grade separation<br>• <strong>FF-E900 Engineered System</strong> — Custom process solutions',
    products: [2, 1, 4, 8],
  },
  {
    pattern: /automat|actuator|pneumatic|plc|control/i,
    response: 'Our automation solutions include:<br><br>• <strong>FF-P400 Pneumatic Actuator</strong> — 40–4000 Nm torque range, 5–8 bar operating pressure<br>• <strong>FF-E900 Engineered System</strong> — Integrated PLC automation<br>• <strong>FF-H100 Butterfly Valve</strong> — Electric actuator option available',
    products: [3, 8, 1],
  },
  {
    pattern: /separation|separator|centrifuge|disc/i,
    response: 'Our separation equipment range includes:<br><br>• <strong>FF-D500 Industrial Decanter</strong> — Solid-liquid, 5–25 m³/h<br>• <strong>FF-S300 Disc Stack Separator</strong> — Liquid-liquid/solid-liquid, 2–15 m³/h<br>• <strong>FF-T700 Tricanter</strong> — Three-phase, 10–40 m³/h<br><br>Which application are you separating?',
    products: [4, 5, 6],
  },
  {
    pattern: /food|beverage|dairy|milk|olive/i,
    response: 'For food and beverage applications, we recommend:<br><br>• <strong>FF-S300 Disc Stack Separator</strong> — Ideal for beverage clarification, milk separation<br>• <strong>FF-T700 Tricanter</strong> — Olive oil extraction, fish oil processing<br>• <strong>FF-D500 Decanter</strong> — Food-grade sludge separation<br><br>All units are available with hygienic design options.',
    products: [5, 6, 4],
  },
  {
    pattern: /oil.*gas|upstream|downstream|petroleum|refinery/i,
    response: 'For oil & gas applications, ForgeFlow offers:<br><br>• <strong>FF-H100 Butterfly Valve</strong> — Pressure-rated for oil & gas service<br>• <strong>FF-T700 Tricanter</strong> — Oil/water/solids separation<br>• <strong>FF-P400 Pneumatic Actuator</strong> — Reliable automated valve operation',
    products: [1, 6, 3],
  },
  {
    pattern: /custom|engineer|bespoke|specific|designed/i,
    response: 'ForgeFlow\'s <strong>FF-E900 Engineered Process System</strong> is our custom engineering offering. We design, fabricate, and test complete process skids to your specific plant requirements, integrating separation, flow control, and automation into a single solution.',
    products: [8],
  },
  {
    pattern: /20.*m3|25.*m3|40.*m3|capacity|throughput/i,
    response: 'Based on the capacity requirement, here are matching products:<br><br>• <strong>FF-D500 Decanter</strong> — Up to 25 m³/h<br>• <strong>FF-T700 Tricanter</strong> — Up to 40 m³/h<br>• <strong>FF-B250 Belt Press</strong> — Up to 20 m³/h<br><br>For a more precise selection, please provide your feed composition and solid content.',
    products: [4, 6, 7],
  },
  {
    pattern: /price|cost|lakh|budget|₹|inr|quote|pricing/i,
    response: 'Here are some products from our range that represent our entry-level and mid-range equipment. For accurate pricing, please <a href="#quote" style="color:var(--orange);">request a technical consultation</a> with our engineering team.<br><br><em>Note: The sample business data shown below is for demo purposes only.</em>',
    products: [1, 2, 3, 7],
    suffix: '(Sample data — actual pricing provided on request)',
  },
  {
    pattern: /valve|valves/i,
    response: 'ForgeFlow\'s valve range includes:<br><br>• <strong>FF-H100</strong> — High Performance Butterfly Valve (2"–24")<br>• <strong>FF-C200</strong> — Chemical Service Valve (2"–20", duplex/SS)<br><br>Both are available with manual, pneumatic, or electric actuation.',
    products: [1, 2],
  },
  {
    pattern: /dewatering|belt press|press/i,
    response: 'For dewatering applications, our <strong>FF-B250 Belt Press</strong> provides continuous, cost-effective sludge dewatering:<br><br>• Capacity: 5–20 m³/h<br>• Application: Municipal wastewater, industrial sludge<br>• Features: Automated belt tracking, wash water management',
    products: [7],
  },
  {
    pattern: /mining|mineral|ore/i,
    response: 'For mining and mineral processing, ForgeFlow\'s <strong>FF-E900 Engineered System</strong> can be configured for tailings dewatering, mineral slurry separation, and custom process requirements.',
    products: [8],
  },
  {
    pattern: /product|catalogue|catalog|range|all/i,
    response: 'ForgeFlow Industrial Technologies offers the following product families:<br><br>1. FF-H100 — Butterfly Valve<br>2. FF-C200 — Chemical Service Valve<br>3. FF-P400 — Pneumatic Actuator<br>4. FF-D500 — Industrial Decanter<br>5. FF-S300 — Disc Stack Separator<br>6. FF-T700 — Tricanter System<br>7. FF-B250 — Belt Press<br>8. FF-E900 — Engineered Process System<br><br>Use the product catalog on this page to filter by category or application.',
    products: [],
  },
];

const SUGGESTIONS = [
  'Show me butterfly valves',
  'Which products are for wastewater?',
  'Which machines handle 20 m³/h?',
  'What products are used in chemical processing?',
  'Show me automation products',
  'Tell me about separation equipment',
];

const FALLBACK = "I didn't find an exact match for your query. Could you try a keyword like <em>valve</em>, <em>wastewater</em>, <em>separation</em>, or <em>automation</em>? Or <a href='#quote' style='color:var(--orange)'>contact our engineering team</a> for detailed assistance.";

function initChatbot() {
  const fab       = document.getElementById('chatbot-fab');
  const panel     = document.getElementById('chatbot-panel');
  const closeBtn  = document.getElementById('chatbot-close');
  const input     = document.getElementById('chatbot-input');
  const sendBtn   = document.getElementById('chat-send');
  const messages  = document.getElementById('chatbot-messages');
  const suggestEl = document.getElementById('chatbot-suggestions');

  if (!fab || !panel) return;

  // open/close
  fab.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    if (open && messages.children.length === 0) {
      // welcome message
      setTimeout(() => {
        addAIMessage(
          'Hello! I\'m <strong>ForgeFlow AI</strong>, powered by LeadRyze. I can help you find the right equipment for your application.<br><br>What industrial challenge can I help you solve today?',
          []
        );
      }, 300);
    }
  });
  closeBtn?.addEventListener('click', () => panel.classList.remove('open'));

  // send on button click or Enter
  sendBtn?.addEventListener('click', handleSend);
  input?.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleSend();
  });

  // suggested questions
  SUGGESTIONS.forEach(q => {
    const btn = document.createElement('button');
    btn.className = 'suggestion-btn';
    btn.textContent = q;
    btn.addEventListener('click', () => {
      if (input) input.value = q;
      handleSend();
    });
    suggestEl?.appendChild(btn);
  });

  function handleSend() {
    const text = input?.value.trim();
    if (!text) return;
    input.value = '';

    addUserMessage(text);
    showTyping();

    setTimeout(() => {
      removeTyping();
      const result = getResponse(text);
      addAIMessage(result.response, result.products, result.suffix);
    }, 900 + Math.random() * 600);
  }

  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-msg user';
    div.innerHTML = `
      <div class="chat-msg-avatar">You</div>
      <div class="chat-bubble">${escapeHtml(text)}</div>`;
    messages.appendChild(div);
    scrollMessages();
  }

  function addAIMessage(html, productIds = [], suffix = '') {
    const div = document.createElement('div');
    div.className = 'chat-msg ai';

    let productsHtml = '';
    if (productIds && productIds.length) {
      const matchedProducts = productIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
      if (matchedProducts.length) {
        productsHtml = `<div class="chat-products-grid">
          ${matchedProducts.slice(0, 4).map(p => `
            <div class="chat-product-card">
              <div class="chat-product-model">${p.model}</div>
              <div class="chat-product-name">${p.name}</div>
              <div class="chat-product-app">${(p.application || []).join(', ')}</div>
            </div>`).join('')}
        </div>`;
      }
    }

    const suffixHtml = suffix ? `<p style="font-size:.72rem;color:var(--text-muted);margin-top:8px;font-style:italic;">${suffix}</p>` : '';

    div.innerHTML = `
      <div class="chat-msg-avatar">AI</div>
      <div class="chat-bubble">
        ${html}
        ${productsHtml}
        ${suffixHtml}
      </div>`;
    messages.appendChild(div);
    scrollMessages();
  }

  let typingEl = null;

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-msg ai';
    div.id = 'typing-indicator';
    div.innerHTML = `
      <div class="chat-msg-avatar">AI</div>
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>`;
    messages.appendChild(div);
    typingEl = div;
    scrollMessages();
  }

  function removeTyping() {
    document.getElementById('typing-indicator')?.remove();
    typingEl = null;
  }

  function scrollMessages() {
    messages.scrollTop = messages.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
}

function getResponse(text) {
  for (const rule of CHATBOT_RESPONSES) {
    if (rule.pattern.test(text)) {
      return { response: rule.response, products: rule.products || [], suffix: rule.suffix || '' };
    }
  }
  return { response: FALLBACK, products: [], suffix: '' };
}

/* ════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS
   ════════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  observeFadeElements(elements);
}

function observeFadeElements(elements) {
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════════════
   ANIMATED COUNTERS
   ════════════════════════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ════════════════════════════════════════════════════════════
   TICKER — duplicate for seamless loop
   ════════════════════════════════════════════════════════════ */
function duplicateTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  const items = track.innerHTML;
  track.innerHTML = items + items; // duplicate for seamless loop
}
