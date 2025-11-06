# Deployment Guide for GitHub Pages

This guide explains how to deploy the UI/UX Developer Guide to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. The project files (already in this repository)

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "New" button to create a new repository
3. Name your repository (e.g., `ui-ux-guide`)
4. Make sure to set it as **Public**
5. Do **not** initialize with a README (we'll push the existing files)

### 2. Push Your Local Files to GitHub

Open your terminal or command prompt and navigate to your project directory:

```bash
cd c:\Users\anand\Downloads\[UIUX]
```

Initialize the repository (if not already done):

```bash
git init
```

Add all files to git:

```bash
git add .
```

Commit the files:

```bash
git commit -m "Initial commit: UI/UX Developer Guide"
```

Add the remote origin (replace `your-username` with your actual GitHub username):

```bash
git remote add origin https://github.com/your-username/ui-ux-guide.git
```

Push to GitHub:

```bash
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for GitHub to build and deploy your site

### 4. Access Your Live Site

After deployment, your site will be available at:
```
https://your-username.github.io/ui-ux-guide/
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. In your repository settings, go to the "Pages" section
2. Under "Custom domain", enter your domain name
3. Follow the instructions to configure your DNS settings

## Updating Your Site

To update your site after making changes:

1. Make your changes to the files
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```

GitHub will automatically rebuild and deploy your site.

## Troubleshooting

### Common Issues

1. **Site not updating**: 
   - Wait a few minutes for GitHub to rebuild
   - Check the "Actions" tab for build errors

2. **404 errors**:
   - Verify your file structure
   - Ensure [index.html](file:///c%3A/Users/anand/Downloads/%5BUIUX%5D/index.html) is in the root directory

3. **CSS not loading**:
   - Check that your CSS file paths are correct
   - Ensure all files are committed and pushed

### Checking Build Status

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. View the latest workflow run for build details

## Project Structure

Your deployed site will have the following structure:

```
/
├── index.html          # Main page
├── styles.css          # Stylesheet
├── script.js           # JavaScript
├── README.md           # Repository README
├── _config.yml         # GitHub Pages config
├── 404.html            # Custom 404 page
├── DEPLOYMENT.md       # This file
└── docs/               # Documentation folder
    ├── design-principles.md
    ├── tools-and-resources.md
    ├── workflow.md
    └── career-path.md
```

## Best Practices

1. **Test locally** before pushing changes
2. **Use descriptive commit messages**
3. **Keep your main branch stable**
4. **Monitor your site's performance**
5. **Regularly update content**

## Support

For issues with this deployment guide, please check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Help](https://help.github.com)

---
*This deployment guide is part of the UI/UX Developer Guide project.*