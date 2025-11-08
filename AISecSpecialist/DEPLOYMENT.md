# Deployment Guide: GitHub Pages

This guide explains how to deploy your AI & Machine Learning Security Specialist website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. The repository files (already in this directory)

## Deployment Steps

### 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "New" button to create a new repository
3. Name your repository (e.g., `AI-Machine-Learning-Security-Specialist`)
4. Make it public (required for GitHub Pages)
5. Do NOT initialize with a README (we'll push our existing files)
6. Click "Create repository"

### 2. Push Your Local Files to GitHub

Open a terminal/command prompt in this directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Complete AI Security Specialist Guide"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for GitHub to build and deploy your site

### 4. Access Your Live Website

Once deployment is complete, your website will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

For example: `https://yourusername.github.io/AI-Machine-Learning-Security-Specialist/`

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository settings, go to the "Pages" section
3. In the "Custom domain" field, enter your domain name
4. Click "Save"
5. Update your domain's DNS settings:
   - Add an A record pointing to `185.199.108.153`
   - Add an A record pointing to `185.199.109.153`
   - Add an A record pointing to `185.199.110.153`
   - Add an A record pointing to `185.199.111.153`
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

## Updating Your Website

To make changes to your website:

1. Edit the files locally
2. Commit and push your changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub will automatically rebuild and deploy your site within a few minutes.

## Troubleshooting

### Site Not Updating
- Ensure you're pushing to the correct branch (main)
- Check that your changes are in the root directory
- Wait up to 10 minutes for changes to appear

### Custom Domain Issues
- Verify DNS settings are correct
- Ensure CNAME file is in your repository
- Check that your domain registrar settings are correct

### Broken Links
- Verify all internal links use relative paths
- Check that all files are included in the repository
- Ensure file names don't contain spaces or special characters

## Best Practices

1. **Keep File Sizes Small**: Large files can slow down your site
2. **Use Relative Links**: This ensures links work on both localhost and GitHub Pages
3. **Test Locally First**: Use a local server to test before deploying
4. **Regular Updates**: Keep content current with the latest developments
5. **Mobile Responsiveness**: Ensure your site works well on all devices

## Local Development

To test your site locally before deploying:

1. Navigate to this directory in your terminal
2. Run a local server:
   - Python 3: `python -m http.server 8000`
   - Python 2: `python -m SimpleHTTPServer 8000`
   - Node.js: `npx serve`
3. Open your browser to `http://localhost:8000`

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/troubleshooting-custom-domains-and-github-pages)

---

With these steps, your AI & Machine Learning Security Specialist website will be live and accessible to the world, showcasing your expertise and helping others enter this lucrative field!