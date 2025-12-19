# Shango Power - React + TypeScript Website

Modern, optimized React + TypeScript version of the Shango Power website.

## Features

- ⚛️ **React 18** with **TypeScript** for type safety
- 🎨 **Modern UI/UX** with improved design and animations
- 📱 **Fully Responsive** - works on all devices
- 🚀 **Performance Optimized** - lazy loading, code splitting
- ♿ **Accessible** - WCAG compliant
- 🎯 **SEO Friendly** - optimized meta tags and structure
- 🧩 **Component-Based Architecture** - reusable, maintainable code

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   ├── Slider/
│   ├── FeatureSection/
│   ├── Header/
│   └── Footer/
├── sections/           # Page sections
│   ├── AboutUs/
│   ├── Services/
│   ├── Portfolio/
│   ├── LabGrown/
│   ├── Solar/
│   ├── CHP/
│   ├── RNG/
│   └── Contact/
├── types/              # TypeScript type definitions
├── constants/          # Constants and data
├── assets/             # Static assets (images, icons)
├── App.tsx             # Main app component
└── index.tsx           # Entry point

public/
├── images/             # Public images
├── icons/              # Public icons
└── index.html          # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Improvements Over Original

1. **Type Safety**: Full TypeScript implementation
2. **Code Organization**: Modular component structure
3. **Performance**: Optimized images, lazy loading, code splitting
4. **Responsive Design**: Better mobile experience
5. **Accessibility**: Improved keyboard navigation and ARIA labels
6. **Modern CSS**: CSS Variables, better animations
7. **Error Handling**: Form validation with user feedback
8. **SEO**: Better meta tags and semantic HTML

## Sections

- **About Us**: Company introduction with video background
- **Services**: Overview of main services
- **Portfolio**: Showcase of completed projects
- **Lab Grown**: Feature section for lab-grown energy solutions
- **Solar**: Feature section for solar power
- **CHP**: Feature section for Combined Heat and Power systems
- **RNG**: Feature section for Renewable Natural Gas
- **Contact**: Contact form with validation

## Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The build folder is ready to be deployed to GitHub Pages

The `public/CNAME` file is included for custom domain setup.

## Technologies Used

- React 18
- TypeScript
- CSS3 (with CSS Variables)
- Create React App

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Copyright © 2024 Shango Power. All rights reserved.

