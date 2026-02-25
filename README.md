# Gartenpflege Khan - Website

Professional gardening and landscaping company website for Gartenpflege Khan based in Oftersheim, Germany.

## Features

- **Multilingual**: German/English language toggle
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, structured data, Open Graph
- **GDPR Compliant**: Local fonts, privacy policy, cookie consent
- **Netlify Forms**: Contact form with honeypot spam protection
- **Performance**: Lazy loading, optimized images

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui components
- Local fonts (@fontsource)

## Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gartenpflege-khan.git
git push -u origin main
```

### 2. Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select this repository
4. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### 3. Configure Netlify Forms

The contact form is already configured with:
- `data-netlify="true"` attribute
- Honeypot field for spam protection
- Hidden form in index.html for detection

Form submissions will appear in your Netlify dashboard under "Forms".

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── public/           # Static assets (images, fonts, config)
│   ├── _redirects    # Netlify SPA routing
│   ├── netlify.toml  # Netlify configuration
│   └── images/       # Website images
├── src/
│   ├── components/   # UI components
│   ├── sections/     # Page sections
│   ├── pages/        # Legal pages
│   ├── context/      # React context
│   └── i18n/         # Translations
└── index.html        # Main HTML with Netlify form
```

## Contact

- **Phone**: 01520 / 44 60 180
- **Email**: gartenpflegekhan@gmail.com
- **Address**: Fohlenweide 2, 68723 Oftersheim

---

Built with care for Gartenpflege Khan.
