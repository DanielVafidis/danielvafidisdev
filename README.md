# Daniel Vafidis - Portfolio

A modern, clean portfolio website built with React, TypeScript, and Vite. Inspired by the minimalist design of Perplexity.ai and Claude.

🔗 **Live Site**: [Coming Soon]

## ✨ Features

- **Modern Stack**: React 19, TypeScript 5.9, Vite 7
- **Clean Design**: Perplexity.ai-inspired minimal aesthetic
- **Responsive**: Mobile-first design that works on all devices
- **SCSS**: Organized with variables, mixins, and nesting
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **SEO Optimized**: Complete Open Graph and Twitter Card meta tags
- **Accessible**: Semantic HTML and ARIA support
- **Fast**: Optimized build with lazy loading and code splitting

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7
- **Styling**: SCSS with custom design system
- **Linting**: ESLint 9 (flat config)
- **Type Checking**: TypeScript strict mode

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ or 22+ (LTS)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/danielvafidis/danielvafidisdev.git
cd danielvafidisdev

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## 📁 Project Structure

```
src/
├── App.scss         # Main styles (SCSS with variables & mixins)
├── App.tsx          # Main application component
├── index.css        # Global styles
└── main.tsx         # Application entry point

public/
├── favicon.svg      # Site favicon (adapts to theme)
├── og-image.svg     # Social media preview template
└── OG-IMAGE-README.md  # Instructions for generating OG image
```

## 🎨 Design System

The project uses a minimal design system with:
- **Spacing Scale**: xs to 3xl (0.5rem to 3rem)
- **Colors**: Warm dark/light themes
- **Typography**: System fonts for optimal performance
- **Components**: Reusable SCSS mixins for consistency

## 📝 Customization

### Update Personal Information

1. **Content**: Edit `src/App.tsx`
   - Update name, tagline, bio
   - Add your projects
   - Update contact links and email

2. **Styling**: Edit `src/App.scss`
   - Customize colors in variables section
   - Adjust spacing and typography
   - Modify component styles

3. **SEO**: Edit `index.html`
   - Update meta descriptions
   - Change domain URLs
   - Add your social media handles

4. **Images**: Generate Open Graph image
   - Follow instructions in `public/OG-IMAGE-README.md`
   - Replace placeholder with your photo

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build command: npm run build
# Publish directory: dist
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Design inspired by [Perplexity.ai](https://perplexity.ai) and [Claude](https://claude.ai)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
