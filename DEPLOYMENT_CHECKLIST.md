# Deployment Checklist

Use this checklist before deploying your Prompt Library to ensure everything is configured correctly.

## Pre-Deployment Configuration

### 1. Repository Setup
- [ ] Created GitHub repository (public)
- [ ] Repository name decided: `________________`
- [ ] Cloned/initialized locally

### 2. Update Configuration Files

#### vite.config.js
- [ ] Updated `base` path to match repository name
```javascript
base: '/your-repo-name/',  // Change this!
```

#### scripts/build-index.js
- [ ] Updated GitHub username on line ~122
```javascript
githubUrl: `https://github.com/YOUR_USERNAME/YOUR_REPO/blob/main/prompts/${relativePath}`
```

#### index.html
- [ ] Updated all GitHub links (3 places)
  - Line ~25: Contribute button
  - Line ~89: Footer links (3 total)
- [ ] Updated site title if desired
- [ ] Updated site description

#### Prompt HTML template in scripts/build-index.js
- [ ] Updated GitHub links in generated prompt pages (around line 90-165)

### 3. Branding & Customization

- [ ] Updated site title in `index.html`
- [ ] Customized colors in `tailwind.config.js` (optional)
- [ ] Updated footer text and links
- [ ] Added logo or favicon (optional)

### 4. Content Preparation

- [ ] Added at least 3-5 example prompts
- [ ] Verified all prompts have required metadata:
  - [ ] title
  - [ ] description
  - [ ] tags (min 1)
  - [ ] categories (min 1)
- [ ] Tested prompts with AI assistants
- [ ] Checked for typos and formatting

### 5. Documentation

- [ ] Updated README.md with your details
- [ ] Reviewed CONTRIBUTING.md
- [ ] Customized PROMPT_TEMPLATE.md if needed
- [ ] Added LICENSE file with correct year/name

## Local Testing

### 1. Build Test
```bash
# Install dependencies
npm install

# Generate search index
npm run index

# Verify output
# - Should see "Found X markdown files"
# - Should see "Processed X valid prompts"
# - Should create public/prompts-index.json
# - Should create public/prompts/*.html
```
- [ ] No errors during `npm run index`
- [ ] `public/prompts-index.json` exists
- [ ] HTML files generated in `public/prompts/`

### 2. Development Server
```bash
npm run dev
```
- [ ] Server starts without errors
- [ ] Site opens at http://localhost:5173
- [ ] Search works
- [ ] All prompts appear
- [ ] Clicking prompts opens detail pages
- [ ] Dark mode toggle works
- [ ] Metadata filters work
- [ ] Copy button works (detail pages)
- [ ] Mobile responsive (test with DevTools)

### 3. Production Build
```bash
npm run build
```
- [ ] Build completes successfully
- [ ] `dist/` directory created
- [ ] No console errors

```bash
npm run preview
```
- [ ] Preview server starts
- [ ] Production build works correctly
- [ ] All features functional

## GitHub Setup

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Prompt Library"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
- [ ] Code pushed successfully
- [ ] All files visible on GitHub

### 2. Enable GitHub Pages
- [ ] Go to Settings → Pages
- [ ] Source: **GitHub Actions** (not branch!)
- [ ] Verified selection is "GitHub Actions"

### 3. Verify GitHub Actions
- [ ] Go to Actions tab
- [ ] Workflow "Build and Deploy" appears
- [ ] Workflow runs automatically
- [ ] All steps complete successfully (green checkmarks)
- [ ] Build job completes
- [ ] Deploy job completes

### 4. Access Deployed Site
- [ ] Wait 1-2 minutes after deployment
- [ ] Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- [ ] Site loads correctly
- [ ] All prompts visible
- [ ] Search functionality works
- [ ] Links work correctly

## Post-Deployment Verification

### Functionality Check
- [ ] Homepage loads
- [ ] Search returns results
- [ ] Filter by metadata works
- [ ] Clicking prompt cards opens detail pages
- [ ] Detail pages display correctly
- [ ] Copy to clipboard works
- [ ] GitHub links point to correct repository
- [ ] Dark mode persists
- [ ] Mobile layout works (test on phone or DevTools)

### Content Check
- [ ] All prompts indexed
- [ ] No 404 errors on prompt pages
- [ ] Metadata displays correctly
- [ ] Code syntax highlighting works
- [ ] Markdown rendering is correct

### SEO & Metadata
- [ ] Page titles are correct
- [ ] Meta descriptions present
- [ ] Open Graph tags (optional)
- [ ] Favicon appears (optional)

### Performance Check
- [ ] Page loads in < 3 seconds
- [ ] Search responds quickly
- [ ] No console errors
- [ ] Images optimized (if any)

## Optional Enhancements

### Analytics
- [ ] Added Google Analytics (optional)
- [ ] Added Plausible Analytics (optional)

### Custom Domain
- [ ] Added CNAME file to `public/`
- [ ] Updated DNS records
- [ ] Updated `vite.config.js` base path to `/`
- [ ] Enabled HTTPS in GitHub Pages settings

### Community Features
- [ ] Enabled GitHub Discussions
- [ ] Enabled GitHub Issues
- [ ] Created issue templates (optional)
- [ ] Added PR template (optional)

### Advanced Features
- [ ] RSS feed (optional)
- [ ] Sitemap.xml (optional)
- [ ] robots.txt (optional)
- [ ] JSON API endpoint

## Troubleshooting Common Issues

### Issue: 404 on GitHub Pages
**Solution:**
- Check `vite.config.js` base path matches repo name exactly
- Ensure GitHub Actions completed successfully
- Wait 2-3 minutes for propagation
- Clear browser cache

### Issue: Prompts not showing
**Solution:**
- Verify `npm run index` completes without errors
- Check frontmatter is valid YAML
- Ensure required fields (title, description, tags, categories) present
- Check browser console for errors

### Issue: Build fails in GitHub Actions
**Solution:**
- Check Actions logs for specific error
- Verify package.json has all dependencies
- Ensure Node.js version compatible (20.x)
- Test build locally: `npm run build`

### Issue: Links broken
**Solution:**
- Verify all GitHub URLs updated with your username/repo
- Check `vite.config.js` base path
- Ensure relative paths in links

## Launch Checklist

### Before announcing:
- [ ] All tests passing
- [ ] Documentation complete
- [ ] At least 5 quality prompts
- [ ] No placeholder content
- [ ] Contributing guidelines clear
- [ ] License file present
- [ ] Contact/support info available

### Announcement:
- [ ] Share on relevant communities
- [ ] Post on social media
- [ ] Add to awesome lists
- [ ] Share with team/organization
- [ ] Create demo video (optional)

## Maintenance Schedule

### Daily
- [ ] Check for new issues
- [ ] Review pull requests

### Weekly
- [ ] Respond to all PRs
- [ ] Merge approved content
- [ ] Check Analytics

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Security audit: `npm audit`
- [ ] Review popular prompts
- [ ] Update documentation

### Quarterly
- [ ] Major version updates
- [ ] Feature additions
- [ ] Community survey
- [ ] Performance review

## Success Metrics

Track these metrics to measure success:

**Content:**
- Number of prompts: _____
- Number of contributors: _____
- PR merge rate: _____%

**Traffic:**
- Monthly visitors: _____
- Page views: _____
- Average session duration: _____

**Engagement:**
- GitHub stars: _____
- Forks: _____
- Issues/discussions: _____

**Quality:**
- Build success rate: _____%
- Average PR review time: _____
- User-reported bugs: _____

---

## Final Pre-Launch Checklist

Before going live, verify ALL of these:

- [ ] ✅ All configuration files updated
- [ ] ✅ Local build succeeds
- [ ] ✅ Local site fully functional
- [ ] ✅ Code pushed to GitHub
- [ ] ✅ GitHub Actions enabled
- [ ] ✅ Deployment successful
- [ ] ✅ Live site accessible
- [ ] ✅ All features work on live site
- [ ] ✅ Mobile responsive
- [ ] ✅ Documentation complete
- [ ] ✅ Ready to accept contributions

**Status:** __________ (Not Started / In Progress / Ready to Launch / Launched)

**Launch Date:** __________

**URL:** https://__________________________.github.io/_______________/

---

**Congratulations!** 🎉 Your Prompt Library is live!

Now focus on:
1. Adding quality prompts regularly
2. Engaging with contributors
3. Promoting in communities
4. Iterating based on feedback

**Questions?** Check SETUP.md or open an issue on GitHub.
