# Quick Start Guide

Get your Prompt Library up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([download](https://nodejs.org/))
- GitHub account
- Git installed

## Installation (2 minutes)

```bash
# 1. Clone or download this repository
cd prompt-sharing

# 2. Install dependencies
npm install

# 3. Build the search index
npm run index

# 4. Start the development server
npm run dev
```

Open http://localhost:5173 in your browser. Done! 🎉

## Deployment to GitHub Pages (3 minutes)

### Option 1: Quick Deploy

```bash
# 1. Create a repository on GitHub named "prompt-sharing"

# 2. Update vite.config.js - change the base path
base: '/prompt-sharing/',  # Use your repo name

# 3. Update GitHub URLs in files (find and replace):
#    yourusername → your GitHub username
#    In these files: index.html, scripts/build-index.js

# 4. Commit and push
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/prompt-sharing.git
git push -u origin main

# 5. Enable GitHub Pages
#    Go to: Settings → Pages → Source: GitHub Actions

# Done! Your site will be live at:
# https://yourusername.github.io/prompt-sharing/
```

### Option 2: Fork and Deploy

```bash
# 1. Click "Fork" on the original repository

# 2. Clone your fork
git clone https://github.com/yourusername/prompt-sharing.git
cd prompt-sharing

# 3. Update configuration files (see Option 1, step 2-3)

# 4. Commit and push changes
git add .
git commit -m "Configure for my GitHub"
git push

# 5. Enable GitHub Pages (see Option 1, step 5)
```

## Add Your First Prompt (1 minute)

```bash
# 1. Create a new file
nano prompts/my-first-prompt.md

# 2. Paste this template:
```

```markdown
---
title: "My First Prompt"
tags: ["test", "example"]
categories: ["code-generation"]
languages: ["python"]
models: ["claude-3.5-sonnet"]
description: "A simple example prompt"
author: "Your Name"
created: "2024-01-15"
---

# My First Prompt

Ask the AI to:
- Do something specific
- With clear requirements
- And helpful examples

## Example

```python
# Your example code here
print("Hello, World!")
\`\`\`
```

```bash
# 3. Build and test
npm run index
npm run dev

# 4. Check http://localhost:5173 - your prompt should appear!
```

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run index            # Rebuild search index
npm run build            # Build for production
npm run preview          # Preview production build

# Testing
npm run index && npm run build   # Full build test
```

## Customization Quick Wins

### Change Colors

Edit `tailwind.config.js`:
```javascript
primary: {
  500: '#0ea5e9',  // Change this hex color
  600: '#0284c7',  // And this one
}
```

### Change Site Title

Edit `index.html`:
```html
<title>Your Title - Your Tagline</title>
<h1>Your Title</h1>
```

### Add Your Links

Replace in `index.html` and prompt template:
```html
https://github.com/yourusername/prompt-sharing
```

## Troubleshooting

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Prompts not appearing
```bash
# Check your frontmatter is valid YAML
npm run index
# Look for errors in output
```

### Build fails
```bash
# Ensure these directories exist
mkdir -p prompts public
npm run index
```

### Site shows 404 on GitHub Pages
```bash
# Check vite.config.js base path matches repo name
base: '/your-repo-name/',  # Must match!
```

## File Checklist

Before deployment, update these files:

- [ ] `vite.config.js` - base path
- [ ] `index.html` - GitHub URLs and title
- [ ] `scripts/build-index.js` - GitHub URL
- [ ] All prompt template files - GitHub URLs

Find and replace:
- `yourusername` → your GitHub username
- `prompt-sharing` → your repo name (if different)

## Next Steps

1. ✅ Site is running locally
2. ✅ Add 3-5 initial prompts
3. ✅ Deploy to GitHub Pages
4. ✅ Customize colors and branding
5. ✅ Share with your team/community
6. ✅ Set up contribution guidelines
7. ✅ Add your own prompts regularly

## Getting Help

**Documentation:**
- [README.md](README.md) - Full documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [SETUP.md](SETUP.md) - Detailed setup guide
- [PROMPT_TEMPLATE.md](PROMPT_TEMPLATE.md) - Prompt template

**Common Issues:**
- Check GitHub Actions for build errors
- Verify all dependencies installed
- Ensure frontmatter is valid YAML
- Check browser console for errors

**Community:**
- GitHub Issues - Report bugs
- GitHub Discussions - Ask questions
- Pull Requests - Contribute

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [YAML Syntax](https://yaml.org/)
- [GitHub Pages Docs](https://pages.github.com/)

---

**You're all set!** Start adding prompts and sharing with your community. 🚀

Need help? Open an issue on GitHub!
