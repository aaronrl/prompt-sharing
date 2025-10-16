# Prompt Library

A community-driven library of AI coding assistant prompts. Discover, share, and collaborate on effective prompts for Claude, GPT-4, Gemini, and other AI coding assistants.

## Features

- **Searchable Library**: Fast, client-side search powered by Fuse.js
- **Rich Metadata**: Filter by tags, categories, programming languages, and AI models
- **Dark Mode**: Built-in dark mode support
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Static Site**: Lightning-fast performance with no backend required
- **Easy Contributions**: Submit prompts via pull requests
- **Automatic Deployment**: Site rebuilds automatically on merge

## Quick Start

### Using the Site

1. Visit the [Prompt Library](https://yourusername.github.io/prompt-sharing/)
2. Search for prompts using the search bar
3. Click on metadata pills to filter results
4. Click on a prompt card to view full details
5. Copy prompts to use with your AI assistant

### Contributing a Prompt

1. Fork this repository
2. Create a new markdown file in the `prompts/` directory
3. Follow the [prompt template](#prompt-template)
4. Submit a pull request
5. After review and merge, your prompt will appear on the site automatically

## Prompt Template

Create a new file in `prompts/your-prompt-name.md`:

```markdown
---
title: "Your Prompt Title"
tags: ["tag1", "tag2", "tag3"]
categories: ["category1", "category2"]
languages: ["python", "javascript", "typescript"]
models: ["claude-3.5-sonnet", "gpt-4", "gemini-pro"]
description: "Brief description of what this prompt does"
author: "Your Name"
created: "2024-01-15"
updated: "2024-01-15"
---

# Your Prompt Content

Write your prompt here with clear instructions, examples, and any necessary context.

Use markdown formatting, code blocks, and structure your prompt for clarity.
```

### Required Fields

- `title`: Clear, descriptive title
- `description`: Brief summary (1-2 sentences)
- `tags`: At least 1 tag
- `categories`: At least 1 category

### Optional Fields

- `languages`: Programming languages this prompt is relevant for
- `models`: AI models this prompt works well with
- `author`: Your name or handle
- `created`: Creation date (YYYY-MM-DD)
- `updated`: Last update date (YYYY-MM-DD)

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/prompt-sharing.git
cd prompt-sharing

# Install dependencies
npm install

# Build the search index
npm run index

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Generate search index and build site
npm run index
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
prompt-sharing/
├── .github/
│   └── workflows/
│       └── build-site.yml      # GitHub Actions deployment
├── prompts/                     # Prompt markdown files
│   ├── react-component.md
│   ├── python-debug.md
│   └── ...
├── src/
│   ├── main.js                 # Main application logic
│   └── style.css               # Tailwind styles
├── scripts/
│   └── build-index.js          # Index generation script
├── public/
│   ├── prompts-index.json      # Generated search index
│   └── prompts/                # Generated HTML pages
├── index.html                  # Main page
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## How It Works

1. **Prompt Storage**: Prompts are stored as markdown files with YAML frontmatter
2. **Build Process**: `build-index.js` parses all prompts and generates:
   - A search index (`prompts-index.json`)
   - Individual HTML pages for each prompt
3. **Search**: Client-side search using Fuse.js on the generated index
4. **Deployment**: GitHub Actions automatically rebuilds and deploys to GitHub Pages on push to main

## Contribution Guidelines

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Quick Guidelines

- **Quality**: Ensure prompts are clear, well-structured, and tested
- **Originality**: Only submit prompts you've created or have permission to share
- **Completeness**: Include all required metadata
- **Examples**: Provide usage examples when helpful
- **Formatting**: Follow markdown best practices

## Categories

Use these standard categories:

- `code-generation`: Generating new code
- `debugging`: Finding and fixing bugs
- `code-review`: Reviewing code quality
- `refactoring`: Improving existing code
- `testing`: Writing tests
- `documentation`: Creating docs
- `api-design`: Designing APIs
- `database`: Database and SQL
- `performance`: Performance optimization
- `security`: Security analysis
- `architecture`: System design

## Tags

Use descriptive, lowercase tags:

- Language names: `python`, `javascript`, `typescript`, `rust`, etc.
- Frameworks: `react`, `express`, `fastapi`, `django`, etc.
- Concepts: `async`, `testing`, `api`, `database`, etc.
- Patterns: `design-patterns`, `solid`, `mvc`, etc.

## License

This project is open source and available under the [MIT License](LICENSE).

All contributed prompts are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), allowing free use with attribution.

## Community

- **Issues**: Report bugs or suggest features via [GitHub Issues](https://github.com/yourusername/prompt-sharing/issues)
- **Discussions**: Join conversations in [GitHub Discussions](https://github.com/yourusername/prompt-sharing/discussions)
- **Pull Requests**: Contributions are welcome!

## Roadmap

- [ ] User ratings and favorites
- [ ] Prompt collections/playlists
- [ ] Version history for prompts
- [ ] Advanced search with boolean operators
- [ ] Export prompts in various formats
- [ ] API for programmatic access
- [ ] Internationalization

## Acknowledgments

Built with:
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Fuse.js](https://fusejs.io/) - Search
- [Marked](https://marked.js.org/) - Markdown parsing
- [Highlight.js](https://highlightjs.org/) - Syntax highlighting
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing

---

**Happy Prompting!** 🚀
