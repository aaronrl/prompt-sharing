# Setup Guide

Complete guide to set up and deploy your Prompt Library.

## Initial Setup

### 1. Create GitHub Repository

1. Create a new repository on GitHub named `prompt-sharing` (or your preferred name)
2. Make it public (required for GitHub Pages)
3. Clone this code to your repository

### 2. Update Configuration

Update the following files with your information:

#### `vite.config.js`
```javascript
base: '/prompt-sharing/', // Change to your repo name
```

#### `index.html` and prompt templates
Replace all instances of:
```
https://github.com/yourusername/prompt-sharing
```
With your actual GitHub username and repository name.

#### `scripts/build-index.js`
Update line:
```javascript
githubUrl: `https://github.com/yourusername/prompt-sharing/blob/main/prompts/${relativePath}`
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Test Locally

```bash
# Generate search index
npm run index

# Start development server
npm run dev
```

Visit `http://localhost:5173` to verify everything works.

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Build and deployment":
   - Source: GitHub Actions
   - (No need to select a branch)

### 6. Push to GitHub

```bash
git add .
git commit -m "Initial commit: Prompt Library setup"
git push origin main
```

The GitHub Actions workflow will automatically:
- Build the search index
- Build the static site
- Deploy to GitHub Pages

### 7. Access Your Site

After the workflow completes (1-2 minutes), your site will be available at:
```
https://yourusername.github.io/prompt-sharing/
```

## Configuration Options

### Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these hex values to your brand colors
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Customize Search

Edit `src/main.js` to adjust Fuse.js search options:

```javascript
fuse = new Fuse(prompts, {
  threshold: 0.4,  // Lower = stricter matching (0.0 - 1.0)
  // Adjust other options as needed
});
```

### Modify Base Path

If deploying to a custom domain, update `vite.config.js`:

```javascript
base: '/', // For custom domain
// or
base: '/prompt-sharing/', // For GitHub Pages with repo name
```

## Repository Settings

### Branch Protection (Optional)

Protect your main branch:
1. Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Enable:
   - Require pull request reviews
   - Require status checks to pass

### Autolink References (Optional)

Create shortcuts for issues and PRs:
1. Settings → General → Autolink references
2. Add patterns for easier linking

## Troubleshooting

### Site Not Deploying

1. Check Actions tab for errors
2. Verify GitHub Pages is enabled
3. Ensure repository is public
4. Check that Actions have write permissions:
   - Settings → Actions → General
   - Workflow permissions: Read and write permissions

### Search Not Working

1. Verify `public/prompts-index.json` exists after build
2. Check browser console for errors
3. Ensure `npm run index` completes without errors

### Prompts Not Showing

1. Verify markdown files have correct frontmatter
2. Check that `npm run index` detects your files
3. Verify all required metadata fields are present

### Build Fails

Common issues:
- Missing dependencies: Run `npm install`
- Invalid frontmatter: Check YAML syntax
- Missing directories: Ensure `prompts/` and `public/` exist

### Custom Domain Setup

To use a custom domain:

1. Add a `CNAME` file to `public/`:
```
yourdomain.com
```

2. Update DNS records:
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

3. In repository settings:
   - Settings → Pages
   - Custom domain: yourdomain.com
   - Enforce HTTPS (after DNS propagates)

4. Update `vite.config.js`:
```javascript
base: '/', // For custom domain
```

## Maintenance

### Updating Dependencies

```bash
npm update
npm audit fix
```

### Adding New Categories

1. Update README.md with new category
2. Update CONTRIBUTING.md
3. Document the category purpose

### Performance Optimization

As your library grows:

1. **Optimize Search Index**
   - Limit content length in `build-index.js`
   - Consider server-side search for 1000+ prompts

2. **Image Optimization**
   - Use optimized images if adding visual content
   - Consider lazy loading

3. **Code Splitting**
   - Split large JavaScript files
   - Load syntax highlighting on-demand

## Backup and Export

### Export All Prompts

```bash
# Create a backup
tar -czf prompts-backup-$(date +%Y%m%d).tar.gz prompts/
```

### Export Search Index

The `public/prompts-index.json` file can be used as a JSON API:
```
https://yourusername.github.io/prompt-sharing/prompts-index.json
```

## Advanced Features

### Analytics

Add Google Analytics or Plausible:

1. Edit `index.html`
2. Add analytics script before `</head>`

### Comments

Enable GitHub Discussions:
1. Settings → General → Features
2. Enable Discussions
3. Link to discussions in prompt pages

### RSS Feed

Generate an RSS feed of new prompts:
1. Create `scripts/generate-rss.js`
2. Add to build process
3. Output to `public/feed.xml`

## Getting Help

- **Documentation**: See README.md and CONTRIBUTING.md
- **Issues**: Report bugs at GitHub Issues
- **Discussions**: Ask questions in GitHub Discussions
- **Examples**: Check the example prompts in `prompts/`

## Next Steps

1. ✅ Complete initial setup
2. ✅ Verify site deploys correctly
3. ✅ Add your first prompts
4. ✅ Customize branding and colors
5. ✅ Share with the community
6. ✅ Set up contribution guidelines
7. ✅ Monitor usage and iterate

Happy hosting! 🚀
