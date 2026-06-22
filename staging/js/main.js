// ---- LANGUAGE ----
let currentLang = localStorage.getItem('didina-lang') || 'sr';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations['sr'] && translations['sr'][key]) || key;
}

// Resolve a translatable string field from recipe data
function tr(field) {
  if (!field && field !== 0) return '';
  if (typeof field === 'string') return field;
  return field[currentLang] || field.sr || '';
}

// Resolve a translatable array field from recipe data
function trArr(field) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[currentLang] || field.sr || [];
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('didina-lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.placeholder !== val) el.placeholder = val;
    } else {
      if (el.textContent !== val) el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-lang-content]').forEach(el => {
    el.hidden = el.dataset.langContent !== lang;
  });

  if (typeof renderFilterButtons === 'function') renderFilterButtons();
  if (typeof renderRecipes === 'function') renderRecipes();
  if (typeof renderFeaturedGrid === 'function') renderFeaturedGrid();
  if (typeof renderCategoriesGrid === 'function') renderCategoriesGrid();

  // Refresh open modal content in new language
  if (activeRecipe && document.getElementById('modalOverlay')?.classList.contains('open')) {
    populateModal(activeRecipe);
  }
}

// ---- THEME TOGGLE ----
function initTheme() {
  const saved = localStorage.getItem('didina-theme');
  const sys   = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark  = saved === 'dark' || (!saved && sys);
  document.documentElement.classList.toggle('dark-mode', dark);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('didina-theme')) {
      document.documentElement.classList.toggle('dark-mode', e.matches);
      updateThemeButton();
    }
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('didina-theme', isDark ? 'dark' : 'light');
  updateThemeButton();
}

function updateThemeButton() {
  const isDark = document.documentElement.classList.contains('dark-mode');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

// ---- CATEGORY INFO ----
const CATEGORY_MAP = {
  'Jutarnji recepti':                    { emoji: '☀️', cls: 'morning',    label_key: 'cat_morning' },
  'Osvežavajući recepti':                { emoji: '🌿', cls: 'refreshing', label_key: 'cat_refreshing' },
  'Recepti uz kafu':                     { emoji: '☕', cls: 'coffee',     label_key: 'cat_coffee' },
  'Recepti kada ne znam šta da kuvam':   { emoji: '🍳', cls: 'dunno',     label_key: 'cat_dunno' },
  'Recepti koji mirišu iz rerne':        { emoji: '🥧', cls: 'oven',      label_key: 'cat_oven' }
};

function getCategoryInfo(category) {
  if (CATEGORY_MAP[category]) return CATEGORY_MAP[category];
  const key = Object.keys(CATEGORY_MAP).find(k =>
    category.replace(/\s+/g, '').toLowerCase().includes(k.replace(/\s+/g, '').toLowerCase().slice(0, 6))
  );
  return CATEGORY_MAP[key] || { emoji: '🍽️', cls: 'morning', label_key: 'cat_morning' };
}

// ---- FAVORITES (localStorage + URL hash for persistence) ----
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('didina-favorites') || '[]'); }
  catch { return []; }
}

function saveFavorites(favs) {
  localStorage.setItem('didina-favorites', JSON.stringify(favs));
  // Encode in URL hash so bookmarking/sharing preserves favorites
  if (favs.length > 0) {
    history.replaceState(null, '', '#favs=' + favs.join(','));
  } else {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  updateFavCount();
}

function loadFavoritesFromHash() {
  const hash = window.location.hash;
  const match = hash.match(/favs=([^&]+)/);
  if (match) {
    const fromHash = match[1].split(',').filter(Boolean);
    if (fromHash.length) {
      localStorage.setItem('didina-favorites', JSON.stringify(fromHash));
    }
  }
}

loadFavoritesFromHash();

function isFavorite(number) {
  return getFavorites().includes(number);
}

function toggleFavorite(number) {
  const favs = getFavorites();
  const idx = favs.indexOf(number);
  if (idx === -1) { favs.push(number); }
  else { favs.splice(idx, 1); }
  saveFavorites(favs);
  return idx === -1;
}

function updateFavCount() {
  const count = getFavorites().length;
  document.querySelectorAll('.fav-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ---- FAVORITES PANEL ----
function openFavoritesPanel() {
  document.getElementById('favoritesPanel')?.classList.add('open');
  renderFavoritesPanel();
}

function closeFavoritesPanel() {
  document.getElementById('favoritesPanel')?.classList.remove('open');
}

function renderFavoritesPanel() {
  const list = document.getElementById('favoritesList');
  if (!list) return;
  const favNumbers = getFavorites();

  if (favNumbers.length === 0) {
    list.innerHTML = `<div class="favorites-empty">
      <span class="favorites-empty-emoji">🤍</span>
      <p>${t('favorites_empty')}</p>
    </div>`;
    return;
  }

  const favRecipes = recipes.filter(r => favNumbers.includes(r.number));
  list.innerHTML = favRecipes.map(recipe => {
    const cat = getCategoryInfo(recipe.category);
    return `<div class="fav-item" data-open-recipe="${recipe.number}">
      <div class="fav-item-emoji cat-thumb-${cat.cls}">${cat.emoji}</div>
      <div class="fav-item-info">
        <div class="fav-item-title">${tr(recipe.title)}</div>
        <div class="fav-item-cat">${t(cat.label_key)}</div>
      </div>
      <button class="fav-item-remove" data-remove-fav="${recipe.number}" aria-label="${t('remove_favorite')}">×</button>
    </div>`;
  }).join('');

  list.querySelectorAll('[data-open-recipe]').forEach(el => {
    el.addEventListener('click', function(e) {
      if (!e.target.closest('[data-remove-fav]')) {
        openModal(this.dataset.openRecipe);
      }
    });
  });

  list.querySelectorAll('[data-remove-fav]').forEach(btn => {
    btn.addEventListener('click', function() {
      toggleFavorite(this.dataset.removeFav);
      renderFavoritesPanel();
      refreshCardFavBtn(this.dataset.removeFav);
    });
  });
}

function refreshCardFavBtn(number) {
  document.querySelectorAll(`[data-recipe-fav="${number}"]`).forEach(btn => {
    btn.textContent = isFavorite(number) ? '❤️' : '🤍';
    btn.title = t(isFavorite(number) ? 'remove_favorite' : 'add_favorite');
  });
}

// ---- RECIPE CARD HTML ----
function createRecipeCardHTML(recipe) {
  const cat = getCategoryInfo(recipe.category);
  const fav = isFavorite(recipe.number);
  const title = tr(recipe.title);
  const subtitle = tr(recipe.subtitle);
  const time = tr(recipe.prep_time);
  const thumbContent = recipe.image
    ? `<img src="${recipe.image}" alt="${title}" class="card-img" loading="lazy">`
    : `<span class="card-emoji">${cat.emoji}</span>`;
  return `<article class="recipe-card" data-recipe-number="${recipe.number}" tabindex="0" role="button" aria-label="${title}">
    <div class="recipe-card-thumb cat-thumb-${cat.cls}${recipe.image ? ' has-img' : ''}">
      ${thumbContent}
    </div>
    <div class="recipe-card-body">
      <div class="recipe-card-category cat-color-${cat.cls}">${t(cat.label_key)}</div>
      <h3 class="recipe-card-title">${title}</h3>
      <p class="recipe-card-subtitle">${subtitle}</p>
      <div class="recipe-card-footer">
        <span class="recipe-card-time">⏱ ${time}</span>
        <button class="fav-toggle" data-recipe-fav="${recipe.number}" title="${t(fav ? 'remove_favorite' : 'add_favorite')}">${fav ? '❤️' : '🤍'}</button>
      </div>
    </div>
  </article>`;
}

// ---- MODAL ----
let activeRecipe = null;

function populateModal(recipe) {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  const cat = getCategoryInfo(recipe.category);
  const fav = isFavorite(recipe.number);

  overlay.querySelector('#modalCategory').innerHTML = `${cat.emoji} <span>${t(cat.label_key)}</span>`;
  overlay.querySelector('#modalTitle').textContent    = tr(recipe.title);
  overlay.querySelector('#modalSubtitle').textContent = tr(recipe.subtitle);

  const timeRaw = tr(recipe.prep_time);
  const timeText = timeRaw ? (/\d/.test(timeRaw) && !/min/i.test(timeRaw) ? `${timeRaw} min` : timeRaw) : '';
  overlay.querySelector('#modalTime').textContent = timeText ? `⏱ ${timeText}` : '';

  const heroEl = overlay.querySelector('#modalHeroImage');
  if (heroEl) {
    if (recipe.image) {
      heroEl.innerHTML = `<img src="${recipe.image}" alt="${tr(recipe.title)}" loading="lazy">`;
      heroEl.hidden = false;
    } else {
      heroEl.innerHTML = '';
      heroEl.hidden = true;
    }
  }

  const commentEl = overlay.querySelector('#modalComment');
  const comment   = tr(recipe.author_comment);
  if (comment) { commentEl.textContent = `„${comment}"`; commentEl.hidden = false; }
  else          { commentEl.hidden = true; }

  overlay.querySelector('#modalIngredients').innerHTML =
    trArr(recipe.ingredients).map(ing => `<li>${ing}</li>`).join('');

  overlay.querySelector('#modalInstructions').innerHTML =
    trArr(recipe.instructions).map((step, i) =>
      `<li><span class="step-number">${i + 1}</span><span>${step}</span></li>`
    ).join('');

  overlay.querySelector('.modal-section-title[data-i18n="ingredients"]').textContent = t('ingredients');
  overlay.querySelector('.modal-section-title[data-i18n="instructions"]').textContent = t('instructions');

  const favBtn = overlay.querySelector('#modalFavBtn');
  favBtn.className = `modal-fav-btn${fav ? ' favorited' : ''}`;
  favBtn.innerHTML = `${fav ? '❤️' : '🤍'} <span>${t(fav ? 'remove_favorite' : 'add_favorite')}</span>`;

  const shareBtn = overlay.querySelector('#modalShareBtn');
  if (shareBtn) shareBtn.innerHTML = `↗ <span>${t('share_recipe')}</span>`;
}

function updateModalNav() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay || !activeRecipe) return;
  const idx = recipes.indexOf(activeRecipe);
  const prevBtn = overlay.querySelector('#modalPrevBtn');
  const nextBtn = overlay.querySelector('#modalNextBtn');
  if (prevBtn) prevBtn.disabled = idx <= 0;
  if (nextBtn) nextBtn.disabled = idx >= recipes.length - 1;
}

function openModal(number) {
  const recipe = recipes.find(r => r.number === number);
  if (!recipe) return;
  activeRecipe = recipe;

  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;

  populateModal(recipe);
  updateModalNav();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.modal').focus();
}

function closeModal() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
  activeRecipe = null;
}

function toggleModalFavorite() {
  if (!activeRecipe) return;
  const added  = toggleFavorite(activeRecipe.number);
  const favBtn = document.getElementById('modalFavBtn');
  if (favBtn) {
    favBtn.className = `modal-fav-btn${added ? ' favorited' : ''}`;
    favBtn.innerHTML = `${added ? '❤️' : '🤍'} <span>${t(added ? 'remove_favorite' : 'add_favorite')}</span>`;
  }
  refreshCardFavBtn(activeRecipe.number);
  renderFavoritesPanel();
}

function buildSharePanel(url, text, anchorEl, anchorId) {
  const existing = document.getElementById('sharePanel');
  if (existing) { existing.remove(); return; }

  const waUrl = 'https://wa.me/?text=' + encodeURIComponent(text + ' — ' + url);
  const fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);

  const panel = document.createElement('div');
  panel.id = 'sharePanel';
  panel.className = 'share-panel';
  panel.innerHTML = `
    <a href="${fbUrl}" target="_blank" rel="noopener" class="share-option share-fb">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
      Facebook
    </a>
    <a href="${waUrl}" target="_blank" rel="noopener" class="share-option share-wa">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.5a.5.5 0 0 0 .612.612l5.652-1.471A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.688-.526-5.207-1.438l-.374-.223-3.355.873.893-3.355-.245-.386A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
      WhatsApp
    </a>
    <button class="share-option share-copy" id="shareCopyBtn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      Kopiraj link
    </button>
  `;

  anchorEl.parentNode.insertBefore(panel, anchorEl.nextSibling);

  panel.querySelector('#shareCopyBtn').addEventListener('click', () => {
    navigator.clipboard?.writeText(url).then(() => {
      const btn = panel.querySelector('#shareCopyBtn');
      btn.textContent = '✓ Kopirano!';
      setTimeout(() => panel.remove(), 1800);
    });
  });

  setTimeout(() => document.addEventListener('click', function close(e) {
    if (!panel.contains(e.target) && e.target.id !== anchorId) {
      panel.remove();
      document.removeEventListener('click', close);
    }
  }), 0);
}

function shareRecipe() {
  if (!activeRecipe) return;
  const shareBtn = document.getElementById('modalShareBtn');
  buildSharePanel(window.location.href, tr(activeRecipe.title), shareBtn, 'modalShareBtn');
}

// ---- RECIPES PAGE ----
let activeFilter = 'all';
let searchQuery  = '';

function renderFilterButtons() {
  const container = document.getElementById('filterButtons');
  if (!container) return;

  const categories = [...new Set(recipes.map(r => r.category))];
  container.innerHTML =
    `<button class="filter-btn${activeFilter === 'all' ? ' active' : ''}" data-filter="all">${t('filter_all')}</button>` +
    categories.map(cat => {
      const info  = getCategoryInfo(cat);
      const label = t(info.label_key);
      return `<button class="filter-btn${activeFilter === cat ? ' active' : ''}" data-filter="${cat}">${info.emoji} ${label}</button>`;
    }).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      activeFilter = this.dataset.filter;
      renderFilterButtons();
      renderRecipes();
    });
  });
}

function renderRecipes() {
  const grid = document.getElementById('recipeGrid');
  if (!grid) return;

  const filtered = recipes.filter(recipe => {
    const matchCat = activeFilter === 'all' || recipe.category === activeFilter;
    const q        = searchQuery.toLowerCase();
    const title    = tr(recipe.title).toLowerCase();
    const sub      = tr(recipe.subtitle).toLowerCase();
    const matchSearch = !q || title.includes(q) || sub.includes(q) || recipe.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const infoEl = document.getElementById('resultsInfo');
  if (infoEl) infoEl.textContent = `${filtered.length} ${t('results_count')}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1">
      <div class="no-results-emoji">🔍</div>
      <p>${t('no_results')}</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(r => createRecipeCardHTML(r)).join('');

  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (!e.target.classList.contains('fav-toggle')) openModal(this.dataset.recipeNumber);
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') openModal(this.dataset.recipeNumber);
    });
  });

  grid.querySelectorAll('.fav-toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const num = this.dataset.recipeFav;
      toggleFavorite(num);
      this.textContent = isFavorite(num) ? '❤️' : '🤍';
      this.title = t(isFavorite(num) ? 'remove_favorite' : 'add_favorite');
      renderFavoritesPanel();
    });
  });
}

// ---- HOMEPAGE GRIDS ----
function renderFeaturedGrid() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = recipes.slice(0, 6).map(r => createRecipeCardHTML(r)).join('');
  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (!e.target.classList.contains('fav-toggle')) openModal(this.dataset.recipeNumber);
    });
  });
  grid.querySelectorAll('.fav-toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const num = this.dataset.recipeFav;
      toggleFavorite(num);
      this.textContent = isFavorite(num) ? '❤️' : '🤍';
      this.title = t(isFavorite(num) ? 'remove_favorite' : 'add_favorite');
      renderFavoritesPanel();
    });
  });
}

function renderCategoriesGrid() {
  const catGrid = document.getElementById('categoriesGrid');
  if (!catGrid) return;
  const cats = [...new Set(recipes.map(r => r.category))];
  const classMap = { morning: 'cat-card-morning', refreshing: 'cat-card-refreshing', coffee: 'cat-card-coffee', dunno: 'cat-card-dunno', oven: 'cat-card-oven' };
  catGrid.innerHTML = cats.map(cat => {
    const info  = getCategoryInfo(cat);
    const count = recipes.filter(r => r.category === cat).length;
    return `<a href="recipes.html" class="category-card ${classMap[info.cls] || ''}" data-filter="${cat}">
      <div class="category-card-emoji">${info.emoji}</div>
      <div class="category-card-name">${t(info.label_key)}</div>
      <div class="category-card-count">${count} ${t('results_count')}</div>
    </a>`;
  }).join('');
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function () {
  // Enable transitions after first paint so there's no flash on load
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.documentElement.classList.add('ready');
  }));

  // Theme
  initTheme();
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
  updateThemeButton();

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage(currentLang);
  updateFavCount();

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // Active nav
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page);
  });

  // Favorites panel
  document.querySelector('.favorites-btn')?.addEventListener('click', openFavoritesPanel);
  document.getElementById('closeFavPanel')?.addEventListener('click', closeFavoritesPanel);

  // Modal
  document.getElementById('modalOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('closeModal')?.addEventListener('click', closeModal);
  document.getElementById('modalFavBtn')?.addEventListener('click', toggleModalFavorite);
  document.getElementById('modalShareBtn')?.addEventListener('click', shareRecipe);
  document.getElementById('modalPrevBtn')?.addEventListener('click', () => {
    if (!activeRecipe) return;
    const idx = recipes.indexOf(activeRecipe);
    if (idx > 0) openModal(recipes[idx - 1].number);
  });
  document.getElementById('modalNextBtn')?.addEventListener('click', () => {
    if (!activeRecipe) return;
    const idx = recipes.indexOf(activeRecipe);
    if (idx < recipes.length - 1) openModal(recipes[idx + 1].number);
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeFavoritesPanel(); }
  });

  // Homepage grids
  if (document.getElementById('featuredGrid'))    renderFeaturedGrid();
  if (document.getElementById('categoriesGrid'))  renderCategoriesGrid();

  // Recipes page
  if (document.getElementById('recipeGrid')) {
    renderFilterButtons();
    renderRecipes();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        searchQuery = this.value.trim();
        renderRecipes();
      });
    }
  }

  // Contact form — FormSubmit handles delivery; show success banner if returned with ?sent=1
  const form = document.getElementById('contactForm');
  if (form) {
    if (new URLSearchParams(window.location.search).get('sent') === '1') {
      const success = document.getElementById('formSuccess');
      if (success) {
        success.textContent = t('contact_success');
        success.classList.add('show');
      }
    }
  }

  // Newsletter form — submit via fetch so user never lands on Brevo's English page
  const nlForm = document.getElementById('newsletterForm');
  if (nlForm) {
    nlForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn   = this.querySelector('.newsletter-btn');
      const msg   = document.getElementById('newsletterSuccess');
      const orig  = btn.textContent;
      btn.textContent = '...';
      btn.disabled = true;
      try {
        await fetch(this.action, {
          method: 'POST',
          body: new FormData(this),
          mode: 'no-cors'
        });
        if (msg) { msg.textContent = t('contact_success'); msg.style.display = 'block'; }
        this.reset();
        btn.textContent = '✓';
      } catch {
        btn.textContent = orig;
        btn.disabled = false;
      }
    });
  }
});
