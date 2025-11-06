# Deploying Your Pentesting Guide to GitHub Pages

This guide will walk you through the steps to deploy your pentesting guide website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your website files ready (HTML, CSS, JavaScript)

## Steps to Deploy

### 1. Create a New Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the upper right corner and select "New repository"
3. Name your repository `[your-username].github.io` (replace `[your-username]` with your actual GitHub username)
4. Make the repository public
5. Do NOT initialize with a README
6. Click "Create repository"

### 2. Push Your Files to GitHub

1. Open a terminal/command prompt in your project directory
2. Initialize a git repository:
   ```bash
   git init
   ```
3. Add all your files:
   ```bash
   git add .
   ```
4. Commit your changes:
   ```bash
   git commit -m "Initial commit: Pentesting Guide"
   ```
5. Add your GitHub repository as a remote:
   ```bash
   git remote add origin https://github.com/[your-username]/[your-username].github.io.git
   ```
6. Push your files to GitHub:
   ```bash
   git push -u origin main
   ```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be published at `AnandBinuArjun.github.io`

### 4. Verify Deployment

1. Wait a few minutes for GitHub to build your site
2. Visit `AnandBinuArjun.github.io` to see your live site
3. If there are any issues, check the "Pages" section in Settings for build errors

## Updating Your Site

To update your site after making changes:

1. Make your changes to the files locally
2. Add and commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. Your site will automatically rebuild and update

## Custom Domain (Optional)

If you want to use a custom domain:

1. In your repository settings, go to the "Pages" section
2. Under "Custom domain", enter your domain name
3. Follow GitHub's instructions to configure your DNS settings

## Troubleshooting

### Common Issues

1. **Site not showing up**: 
   - Ensure your repository is named correctly (`[username].github.io`)
   - Check that you've pushed files to the `main` branch
   - Wait a few minutes for the initial build

2. **CSS not loading**:
   - Check that your CSS file paths are correct
   - Ensure all files are in the root directory or properly linked

3. **404 errors**:
   - Verify all file names and paths are correct
   - Remember that GitHub Pages is case-sensitive

### Checking Build Status

1. In your repository, click on the "Actions" tab
2. Look for recent workflows related to GitHub Pages
3. Check for any error messages in the build logs

## Best Practices

1. **File Naming**: Use lowercase letters and hyphens for file names
2. **Image Optimization**: Compress images before uploading
3. **Regular Updates**: Keep your content fresh and up-to-date
4. **Mobile Testing**: Ensure your site looks good on mobile devices
5. **SEO**: Use proper meta tags and descriptions

## Need Help?

If you encounter any issues during deployment:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review any error messages in the GitHub Actions build logs
3. Ensure all file paths in your HTML are correct
4. Contact GitHub Support if needed

Your pentesting guide should now be live at `AnandBinuArjun.github.io`!