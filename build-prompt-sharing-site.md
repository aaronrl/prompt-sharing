# Build a Prompt Sharing Website

Create a complete static website system that allows users to share AI coding assistant prompts through a GitHub repository. The site should provide searchable prompt discovery and seamless submission workflow.

## Core Requirements

### 1. Repository Structure
- Create a GitHub repository that stores prompt files in a dedicated directory (e.g., `prompts/`)
- Each prompt should be stored as a markdown file with YAML frontmatter for metadata
- Implement GitHub Actions workflow to automatically rebuild the static site on merge to main

### 2. Prompt File Format
Each prompt file should follow this structure:

```markdown
---
title: "Descriptive prompt title"
tags: ["tag1", "tag2", "tag3"]
categories: ["category1", "category2"]
languages: ["python", "javascript", "typescript"]
models: ["claude-3.5-sonnet", "gpt-4", "gemini-pro"]
description: "Brief description of what this prompt does"
author: "Author name"
created: "2024-01-15"
updated: "2024-01-20"
---

[Full prompt text goes here with proper formatting and code examples]
```

### 3. Static Site Generator
Build a static site using a modern framework (choose: Next.js, Astro, or Vite + React) that:
- Reads all prompt markdown files during build time
- Generates individual pages for each prompt
- Creates a searchable index page with all prompts
- Deploys to GitHub Pages or similar static hosting

### 4. Search Functionality
Implement client-side search using an embeddable search engine (choose: Pagefind, Lunr.js, or Fuse.js) that:
- Indexes all prompt content and metadata during build
- Provides real-time search as users type
- Supports filtering by metadata (tags, categories, languages, models)
- Returns results with relevance scoring
- Allows query modification by clicking metadata pills

### 5. UI Components

#### Search Results Page
Display search results as cards with:
- **Prompt title** (h3, clickable)
- **Truncated preview** (first 200 characters of prompt text with syntax highlighting)
- **Relevance score** (displayed as percentage or 5-star rating)
- **Metadata pills** showing first 3 items with "+N more" dropdown
- **Link icon** to view the original file in GitHub repo

#### Prompt Detail View
When viewing a prompt, display:
- Full prompt text with syntax highlighting (using Prism.js or Highlight.js)
- Sidebar containing:
  - All metadata organized by type (tags, categories, languages, models)
  - Author and date information
  - Link to original file in repository
  - Link to edit/suggest changes (opens GitHub edit page)
  - Copy to clipboard button

#### Metadata Interaction
- Each metadata pill should be clickable
- Clicking a pill adds it to the search query (e.g., "tag:react")
- Search automatically reruns with updated query
- Active filters should be displayed above results with remove option

### 6. GitHub Actions Workflow
Create `.github/workflows/build-site.yml` that:
- Triggers on push to main branch
- Installs dependencies
- Runs the static site build process
- Generates search index
- Deploys to GitHub Pages
- Includes caching for faster builds

### 7. Submission Process
Document in README.md how to submit prompts:
1. Create a new markdown file in `prompts/` directory
2. Follow the template format with required metadata
3. Submit a pull request
4. After review and merge, site automatically rebuilds

### 8. Technical Specifications

**Required Features:**
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Fast search (< 100ms response time)
- Accessibility compliant (WCAG 2.1 AA)
- SEO optimized (meta tags, sitemap, robots.txt)
- Syntax highlighting for code blocks
- Copy button for full prompts
- Social sharing buttons

**Performance Targets:**
- Lighthouse score > 90 for all categories
- Initial page load < 2s
- Search index size < 500KB
- Support for 1000+ prompts without performance degradation

**Styling:**
- Use Tailwind CSS or similar utility framework
- Implement consistent color scheme
- Use system fonts or fast-loading web fonts
- Include loading states and skeleton screens

### 9. Advanced Features (Optional)

Consider implementing:
- **Analytics**: Track popular prompts and search queries
- **Collections**: Allow users to create curated prompt collections
- **Versioning**: Track changes to prompts over time
- **Rating system**: Let users vote on prompt quality
- **Comments**: Enable discussion through GitHub Discussions
- **Export options**: Download prompts in various formats (JSON, plain text, PDF)
- **API**: Provide JSON API endpoint for programmatic access

### 10. File Structure

```
prompt-sharing/
├── .github/
│   └── workflows/
│       └── build-site.yml
├── prompts/
│   ├── example-react-component.md
│   ├── debug-python-code.md
│   └── ...
├── src/
│   ├── components/
│   │   ├── PromptCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MetadataPill.jsx
│   │   ├── PromptDetail.jsx
│   │   └── Sidebar.jsx
│   ├── pages/
│   │   ├── index.jsx
│   │   └── prompt/[slug].jsx
│   ├── lib/
│   │   ├── search.js
│   │   └── markdown.js
│   └── styles/
│       └── globals.css
├── public/
│   └── search-index.json
├── CONTRIBUTING.md
├── README.md
├── package.json
└── next.config.js (or equivalent)
```

### 11. Implementation Steps

1. **Setup**: Initialize repository with chosen framework
2. **Parser**: Build markdown parser that extracts frontmatter and content
3. **Build script**: Create script that processes all prompt files
4. **Search index**: Generate search index during build
5. **Components**: Build UI components for cards, detail view, search
6. **Styling**: Apply responsive design and dark mode
7. **GitHub Actions**: Configure automated deployment
8. **Documentation**: Write README and CONTRIBUTING guides
9. **Testing**: Test with sample prompts
10. **Launch**: Deploy initial version

### 12. Validation Rules

Implement validation for prompt submissions:
- Required fields: title, description, tags (min 1), categories (min 1)
- Maximum tag/category length: 30 characters
- Minimum prompt length: 50 characters
- Valid date formats
- No duplicate filenames
- Supported language codes from standard list

### 13. Error Handling

- Display friendly error messages when search fails
- Show empty state when no results found
- Provide suggestions for misspelled queries
- Handle missing metadata gracefully
- Log build errors in GitHub Actions

### 14. Documentation Requirements

Create comprehensive docs:
- **README.md**: Project overview, setup, contribution guide
- **CONTRIBUTING.md**: Detailed submission process, templates, style guide
- **PROMPT_TEMPLATE.md**: Copy-paste template for new prompts
- **SEARCH_GUIDE.md**: How to use advanced search features
- **DEVELOPMENT.md**: Local development setup, build process

## Expected Deliverables

1. Fully functional static website hosted on GitHub Pages
2. GitHub Actions workflow for automatic deployments
3. At least 5 example prompts demonstrating the format
4. Complete documentation
5. Mobile-responsive design with dark mode
6. Working search with metadata filtering
7. Clean, maintainable code with comments

## Testing Checklist

Before considering complete, verify:
- [ ] Site builds successfully in GitHub Actions
- [ ] Search returns relevant results
- [ ] Metadata pills filter correctly
- [ ] Links to GitHub files work
- [ ] Mobile layout is usable
- [ ] Dark mode works properly
- [ ] Copy button functions
- [ ] Syntax highlighting displays correctly
- [ ] Page load time meets targets
- [ ] Accessibility tools show no critical issues

## Notes

- Prioritize simplicity and performance over complex features
- Keep the submission process as frictionless as possible
- Design should be clean and focused on content discovery
- Consider internationalization for future expansion
- Ensure the build process is fast (< 2 minutes for 100 prompts)
