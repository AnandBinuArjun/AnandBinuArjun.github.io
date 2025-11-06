# UI/UX Developer Guide - Deployment Instructions

## GitHub Pages Deployment

To deploy this UI/UX Developer Guide to your GitHub Pages:

1. Create a new repository on GitHub (or use an existing one)
2. Copy all files from the `deploy` folder to your repository root
3. Commit and push the files to GitHub
4. Go to your repository Settings > Pages
5. Select "Deploy from a branch" and choose your main branch
6. Set the root folder as the source
7. Click Save and wait for deployment

## File Structure

The deployment package includes:
- `index.html` - Main landing page
- `journey.html` - Complete UI/UX journey guide
- `styles.css` - All styling and animations
- `script.js` - Theme switching and animation functionality
- `docs/` - Additional documentation files
- `_config.yml` - Jekyll configuration for GitHub Pages
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## Customization

To integrate with your portfolio at http://anandbinuarjun.live/:
1. Update the navigation links in `index.html` and `journey.html`
2. Modify the footer links to point to your portfolio
3. Customize the color scheme in `styles.css` if desired
4. Update contact information in the footer

## Features

- Fully responsive design
- Light/dark theme with localStorage persistence
- Dynamic scroll animations
- Interactive flowcharts using Mermaid.js
- Mobile-friendly navigation
- Cross-browser compatibility

The site will be accessible at `https://[your-username].github.io/[repository-name]/`