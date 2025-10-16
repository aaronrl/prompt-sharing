import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROMPTS_DIR = path.join(__dirname, '..', 'prompts');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'prompts-index.json');
const PROMPTS_OUTPUT_DIR = path.join(__dirname, '..', 'public', 'prompts');

// Ensure directories exist
if (!fs.existsSync(path.join(__dirname, '..', 'public'))) {
  fs.mkdirSync(path.join(__dirname, '..', 'public'));
}

if (!fs.existsSync(PROMPTS_OUTPUT_DIR)) {
  fs.mkdirSync(PROMPTS_OUTPUT_DIR, { recursive: true });
}

// Get all markdown files
function getMarkdownFiles(dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    console.warn(`Directory ${dir} does not exist. Creating it...`);
    fs.mkdirSync(dir, { recursive: true });
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Process markdown file
function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: markdownContent } = matter(content);

  // Generate slug from filename
  const relativePath = path.relative(PROMPTS_DIR, filePath);
  const slug = relativePath
    .replace(/\.md$/, '')
    .replace(/\\/g, '/')
    .replace(/\s+/g, '-')
    .toLowerCase();

  // Validate required fields
  if (!data.title) {
    console.warn(`Warning: ${relativePath} is missing required field 'title'`);
    return null;
  }

  // Clean content (remove code blocks and extra whitespace for search)
  const cleanContent = markdownContent
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 1000); // Limit content for search index

  const prompt = {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    tags: data.tags || [],
    categories: data.categories || [],
    languages: data.languages || [],
    models: data.models || [],
    author: data.author || 'Anonymous',
    created: data.created || '',
    updated: data.updated || '',
    content: cleanContent,
    url: `/prompts/${slug}.html`,
    githubUrl: `https://github.com/yourusername/prompt-sharing/blob/main/prompts/${relativePath.replace(/\\/g, '/')}`
  };

  // Generate HTML page for this prompt
  generatePromptPage(prompt, markdownContent, data);

  return prompt;
}

// Generate individual prompt page
function generatePromptPage(prompt, markdownContent, frontmatter) {
  const htmlContent = marked(markdownContent);

  const html = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(prompt.description)}">
  <title>${escapeHtml(prompt.title)} - Prompt Library</title>
  <link rel="stylesheet" href="/src/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
</head>
<body>
  <div id="app">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <a href="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
              ← Prompt Library
            </a>
          </div>
          <button id="theme-toggle" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <svg id="theme-icon-dark" class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg id="theme-icon-light" class="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
            <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Metadata</h2>

            ${frontmatter.tags && frontmatter.tags.length > 0 ? `
              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</h3>
                <div class="flex flex-wrap gap-2">
                  ${frontmatter.tags.map(tag => `<span class="metadata-pill">${escapeHtml(tag)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${frontmatter.categories && frontmatter.categories.length > 0 ? `
              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Categories</h3>
                <div class="flex flex-wrap gap-2">
                  ${frontmatter.categories.map(cat => `<span class="metadata-pill">${escapeHtml(cat)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${frontmatter.languages && frontmatter.languages.length > 0 ? `
              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Languages</h3>
                <div class="flex flex-wrap gap-2">
                  ${frontmatter.languages.map(lang => `<span class="metadata-pill">${escapeHtml(lang)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${frontmatter.models && frontmatter.models.length > 0 ? `
              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Models</h3>
                <div class="flex flex-wrap gap-2">
                  ${frontmatter.models.map(model => `<span class="metadata-pill text-xs">${escapeHtml(model)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <div class="mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Author</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">${escapeHtml(prompt.author)}</p>
            </div>

            ${frontmatter.created ? `
              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Created</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">${escapeHtml(frontmatter.created)}</p>
              </div>
            ` : ''}

            ${frontmatter.updated ? `
              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Updated</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">${escapeHtml(frontmatter.updated)}</p>
              </div>
            ` : ''}

            <div class="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a href="${prompt.githubUrl}" target="_blank" rel="noopener" class="btn-primary w-full text-center block">
                View on GitHub
              </a>
              <button id="copy-btn" class="btn-secondary w-full">
                Copy to Clipboard
              </button>
            </div>
          </div>
        </aside>

        <!-- Content -->
        <article class="lg:col-span-3">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">${escapeHtml(prompt.title)}</h1>

            ${prompt.description ? `
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">${escapeHtml(prompt.description)}</p>
            ` : ''}

            <div class="prose dark:prose-invert max-w-none" id="prompt-content">
              ${htmlContent}
            </div>
          </div>
        </article>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p class="mb-2">Open source prompt library for AI coding assistants</p>
          <p class="text-sm">
            <a href="https://github.com/yourusername/prompt-sharing" class="hover:text-primary-600 dark:hover:text-primary-400">GitHub</a>
            <span class="mx-2">·</span>
            <a href="https://github.com/yourusername/prompt-sharing/blob/main/CONTRIBUTING.md" class="hover:text-primary-600 dark:hover:text-primary-400">Contribute</a>
          </p>
        </div>
      </div>
    </footer>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script>
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.classList.toggle('dark', savedTheme === 'dark');

    themeToggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Syntax highlighting
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });

    // Copy to clipboard
    document.getElementById('copy-btn').addEventListener('click', async () => {
      const content = document.getElementById('prompt-content').innerText;
      try {
        await navigator.clipboard.writeText(content);
        const btn = document.getElementById('copy-btn');
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        setTimeout(() => {
          btn.innerText = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  </script>
</body>
</html>`;

  const outputPath = path.join(PROMPTS_OUTPUT_DIR, `${prompt.slug}.html`);
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, html);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

// Main execution
console.log('Building prompt index...');

const markdownFiles = getMarkdownFiles(PROMPTS_DIR);
console.log(`Found ${markdownFiles.length} markdown files`);

const prompts = markdownFiles
  .map(processMarkdownFile)
  .filter(prompt => prompt !== null);

console.log(`Processed ${prompts.length} valid prompts`);

// Write index file
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(prompts, null, 2));
console.log(`Index written to ${OUTPUT_FILE}`);
console.log('Build complete!');
