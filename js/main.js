// ---- LANGUAGE ----
let currentLang = localStorage.getItem('didina-lang') || 'sr';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations['sr'] && translations['sr'][key]) || key;
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
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  if (typeof renderFilterButtons === 'function') renderFilterButtons();
  if (typeof renderRecipes === 'function') renderRecipes();
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

// ---- FAVORITES ----
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('didina-favorites') || '[]'); }
  catch { return []; }
}

function saveFavorites(favs) {
  localStorage.setItem('didina-favorites', JSON.stringify(favs));
  updateFavCount();
}

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
        <div class="fav-item-title">${recipe.title}</div>
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
  const thumbContent = recipe.image
    ? `<img src="${recipe.image}" alt="${recipe.title}" class="card-img" loading="lazy">`
    : `<span class="card-emoji">${cat.emoji}</span>`;
  return `<article class="recipe-card" data-recipe-number="${recipe.number}" tabindex="0" role="button" aria-label="${recipe.title}">
    <div class="recipe-card-thumb cat-thumb-${cat.cls}${recipe.image ? ' has-img' : ''}">
      ${thumbContent}
    </div>
    <div class="recipe-card-body">
      <div class="recipe-card-category cat-color-${cat.cls}">${t(cat.label_key)}</div>
      <h3 class="recipe-card-title">${recipe.title}</h3>
      <p class="recipe-card-subtitle">${recipe.subtitle}</p>
      <div class="recipe-card-footer">
        <span class="recipe-card-time">⏱ ${recipe.prep_time}</span>
        <button class="fav-toggle" data-recipe-fav="${recipe.number}" title="${t(fav ? 'remove_favorite' : 'add_favorite')}">${fav ? '❤️' : '🤍'}</button>
      </div>
    </div>
  </article>`;
}

// ---- MODAL ----
let activeRecipe = null;

function openModal(number) {
  const recipe = recipes.find(r => r.number === number);
  if (!recipe) return;
  activeRecipe = recipe;

  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;

  const cat = getCategoryInfo(recipe.category);
  const fav = isFavorite(recipe.number);

  overlay.querySelector('#modalCategory').innerHTML = `${cat.emoji} <span>${t(cat.label_key)}</span>`;
  overlay.querySelector('#modalTitle').textContent = recipe.title;
  overlay.querySelector('#modalSubtitle').textContent = recipe.subtitle;
  overlay.querySelector('#modalTime').textContent = `⏱ ${recipe.prep_time}`;

  const commentEl = overlay.querySelector('#modalComment');
  if (recipe.author_comment) {
    commentEl.textContent = `„${recipe.author_comment}"`;
    commentEl.hidden = false;
  } else {
    commentEl.hidden = true;
  }

  overlay.querySelector('#modalIngredients').innerHTML =
    recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

  overlay.querySelector('#modalInstructions').innerHTML =
    recipe.instructions.map((step, i) =>
      `<li><span class="step-number">${i + 1}</span><span>${step}</span></li>`
    ).join('');

  const favBtn = overlay.querySelector('#modalFavBtn');
  favBtn.className = `modal-fav-btn${fav ? ' favorited' : ''}`;
  favBtn.innerHTML = `${fav ? '❤️' : '🤍'} <span>${t(fav ? 'remove_favorite' : 'add_favorite')}</span>`;

  overlay.querySelector('.modal-section-title[data-i18n="ingredients"]').textContent = t('ingredients');
  overlay.querySelector('.modal-section-title[data-i18n="instructions"]').textContent = t('instructions');

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
  const added = toggleFavorite(activeRecipe.number);
  const favBtn = document.getElementById('modalFavBtn');
  if (favBtn) {
    favBtn.className = `modal-fav-btn${added ? ' favorited' : ''}`;
    favBtn.innerHTML = `${added ? '❤️' : '🤍'} <span>${t(added ? 'remove_favorite' : 'add_favorite')}</span>`;
  }
  refreshCardFavBtn(activeRecipe.number);
  renderFavoritesPanel();
}

// ---- RECIPES PAGE ----
let activeFilter = 'all';
let searchQuery = '';

function renderFilterButtons() {
  const container = document.getElementById('filterButtons');
  if (!container) return;

  const categories = [...new Set(recipes.map(r => r.category))];
  const allLabel = t('filter_all');

  container.innerHTML = `<button class="filter-btn${activeFilter === 'all' ? ' active' : ''}" data-filter="all">${allLabel}</button>` +
    categories.map(cat => {
      const info = getCategoryInfo(cat);
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
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      recipe.title.toLowerCase().includes(q) ||
      recipe.subtitle.toLowerCase().includes(q) ||
      recipe.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const infoEl = document.getElementById('resultsInfo');
  if (infoEl) {
    infoEl.textContent = `${filtered.length} ${t('results_count')}`;
  }

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
      if (!e.target.classList.contains('fav-toggle')) {
        openModal(this.dataset.recipeNumber);
      }
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

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function () {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage(currentLang);
  updateFavCount();

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
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

  // Modal close
  document.getElementById('modalOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('closeModal')?.addEventListener('click', closeModal);
  document.getElementById('modalFavBtn')?.addEventListener('click', toggleModalFavorite);

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeFavoritesPanel(); }
  });

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

  // Contact form — opens mail client with form data
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name    = document.getElementById('contactName').value.trim();
      const email   = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const subject = encodeURIComponent('Poruka sa sajta — ' + name);
      const body    = encodeURIComponent(
        'Ime: ' + name + '\nEmail: ' + email + '\n\nPoruka:\n' + message
      );
      window.location.href =
        'mailto:d.stamenkovic@yahoo.com?subject=' + subject + '&body=' + body;
      const success = document.getElementById('formSuccess');
      if (success) {
        success.textContent = t('contact_success');
        success.classList.add('show');
        form.reset();
        setTimeout(() => success.classList.remove('show'), 6000);
      }
    });
  }
});
