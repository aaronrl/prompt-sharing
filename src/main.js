import './style.css';
import Fuse from 'fuse.js';

// State
let prompts = [];
let fuse = null;
let activeFilters = new Set();

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  setupTheme();
  setupSearch();
  await loadPrompts();
});

// Theme Management
function setupTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check for saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.classList.toggle('dark', savedTheme === 'dark');

  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Load Prompts
async function loadPrompts() {
  try {
    const response = await fetch('/prompts-index.json');
    prompts = await response.json();

    // Initialize Fuse.js
    fuse = new Fuse(prompts, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'description', weight: 1.5 },
        { name: 'content', weight: 1 },
        { name: 'tags', weight: 1.5 },
        { name: 'categories', weight: 1.5 },
        { name: 'languages', weight: 1.2 },
        { name: 'models', weight: 1 }
      ],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true
    });

    displayResults(prompts);
    hideLoading();
  } catch (error) {
    console.error('Error loading prompts:', error);
    hideLoading();
    showEmptyState();
  }
}

// Search Setup
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const clearButton = document.getElementById('clear-search');
  let debounceTimer;

  searchInput.addEventListener('input', (e) => {
    // Show/hide clear button based on input
    if (e.target.value.length > 0) {
      clearButton.classList.remove('hidden');
    } else {
      clearButton.classList.add('hidden');
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      performSearch(e.target.value);
    }, 300);
  });

  // Clear button functionality
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.classList.add('hidden');
    performSearch('');
    searchInput.focus();
  });
}

// Perform Search
function performSearch(query) {
  if (!fuse) return;

  let results = prompts;

  // Apply text search if query exists
  if (query.trim()) {
    const searchResults = fuse.search(query);
    results = searchResults.map(result => ({
      ...result.item,
      score: result.score
    }));
  }

  // Apply active filters
  if (activeFilters.size > 0) {
    results = results.filter(prompt => {
      return Array.from(activeFilters).every(filter => {
        const [type, value] = filter.split(':');
        const field = prompt[type];
        return field && field.includes(value);
      });
    });
  }

  displayResults(results);
}

// Display Results
function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  const resultCount = document.getElementById('result-count');
  const emptyState = document.getElementById('empty-state');

  resultCount.textContent = results.length;

  if (results.length === 0) {
    resultsContainer.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  resultsContainer.innerHTML = results.map(prompt => createPromptCard(prompt)).join('');

  // Attach event listeners to metadata pills
  document.querySelectorAll('.metadata-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      addFilter(filter);
    });
  });
}

// Create Prompt Card
function createPromptCard(prompt) {
  const score = prompt.score !== undefined ? Math.round((1 - prompt.score) * 100) : 100;
  const preview = truncateText(prompt.content || '', 200);

  // Combine all metadata
  const allMetadata = [
    ...(prompt.tags || []).map(tag => ({ type: 'tags', value: tag, display: tag })),
    ...(prompt.categories || []).map(cat => ({ type: 'categories', value: cat, display: cat })),
    ...(prompt.languages || []).map(lang => ({ type: 'languages', value: lang, display: lang })),
    ...(prompt.models || []).map(model => ({ type: 'models', value: model, display: model }))
  ];

  const visibleMetadata = allMetadata.slice(0, 3);
  const hiddenCount = Math.max(0, allMetadata.length - 3);

  return `
    <div class="prompt-card">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer" onclick="window.location.href='${prompt.url}'">
          ${escapeHtml(prompt.title)}
        </h3>
        <div class="flex items-center space-x-2 text-sm">
          <span class="text-green-600 dark:text-green-400 font-medium">${score}%</span>
          <a href="${prompt.githubUrl}" target="_blank" rel="noopener" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>

      <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
        ${escapeHtml(prompt.description || '')}
      </p>

      <div class="bg-gray-50 dark:bg-gray-900 rounded p-3 mb-4">
        <code class="text-sm text-gray-800 dark:text-gray-200 break-words">
          ${escapeHtml(preview)}
        </code>
      </div>

      <div class="flex flex-wrap gap-2">
        ${visibleMetadata.map(meta => `
          <span class="metadata-pill" data-filter="${meta.type}:${meta.value}">
            ${escapeHtml(meta.display)}
          </span>
        `).join('')}
        ${hiddenCount > 0 ? `
          <div class="relative inline-block">
            <button class="metadata-pill" onclick="this.nextElementSibling.classList.toggle('hidden')">
              +${hiddenCount} more
            </button>
            <div class="hidden absolute z-10 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 min-w-[200px]">
              ${allMetadata.slice(3).map(meta => `
                <span class="metadata-pill block mb-2" data-filter="${meta.type}:${meta.value}">
                  ${escapeHtml(meta.display)}
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// Add Filter
function addFilter(filter) {
  activeFilters.add(filter);
  updateFilterDisplay();

  const searchInput = document.getElementById('search-input');
  performSearch(searchInput.value);
}

// Remove Filter
function removeFilter(filter) {
  activeFilters.delete(filter);
  updateFilterDisplay();

  const searchInput = document.getElementById('search-input');
  performSearch(searchInput.value);
}

// Update Filter Display
function updateFilterDisplay() {
  const container = document.getElementById('active-filters');

  if (activeFilters.size === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="flex flex-wrap gap-2">
      <span class="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
      ${Array.from(activeFilters).map(filter => `
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">
          ${escapeHtml(filter.split(':')[1])}
          <button class="ml-2 hover:text-gray-200" onclick="window.removeFilter('${filter}')">×</button>
        </span>
      `).join('')}
      <button class="text-sm text-primary-600 dark:text-primary-400 hover:underline" onclick="window.clearFilters()">
        Clear all
      </button>
    </div>
  `;
}

// Clear Filters
window.clearFilters = function() {
  activeFilters.clear();
  updateFilterDisplay();

  const searchInput = document.getElementById('search-input');
  performSearch(searchInput.value);
};

// Make removeFilter available globally
window.removeFilter = removeFilter;

// Utility Functions
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function hideLoading() {
  const loadingState = document.getElementById('loading-state');
  loadingState.classList.add('hidden');
}

function showEmptyState() {
  const emptyState = document.getElementById('empty-state');
  emptyState.classList.remove('hidden');
}
