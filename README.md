# Flex to Next

A modern, responsive website for a sustainability-focused startup that upcycles discarded PVC flex banners into reusable products.

## About

**Flex to Next** transforms waste PVC banners from events and hoardings into functional, everyday products like:
- Tote bags
- Aprons  
- Utility accessories (coming soon)

We're committed to promoting a **circular economy** and reducing environmental waste.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Features

✨ Modern, premium design with glassmorphism effects  
🎨 Custom eco-themed color palette  
📱 Fully responsive (mobile, tablet, desktop)  
⚡ Smooth animations and micro-interactions  
♿ SEO-friendly and accessible  
🎯 Frontend-only demo (no backend required)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
flex-to-next/
├── app/
│   ├── layout.js          # Root layout with Navbar & Footer
│   ├── page.js            # Homepage with all sections
│   └── globals.css        # Global styles & design system
├── components/
│   ├── Navbar.jsx         # Navigation bar
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Process.jsx        # 5-step process
│   ├── Products.jsx       # Product showcase
│   ├── Impact.jsx         # Environmental impact stats
│   ├── WhyUs.jsx          # Feature highlights
│   ├── CTA.jsx            # Call-to-action banner
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer
├── tailwind.config.js     # Tailwind with custom tokens
└── package.json
```

## Sections

1. **Hero** - Bold headline with CTAs and stats preview
2. **About** - Mission and circular economy visualization
3. **Process** - 5-step transformation flow
4. **Products** - Product grid with cards
5. **Impact** - Environmental metrics
6. **Why Us** - 4 key features
7. **CTA** - Full-width call-to-action
8. **Contact** - Contact form (frontend only)

## Design System

### Colors
- **Primary Green**: `#22c55e` (eco-600)
- **Dark Green**: `#0a3d1f` (eco-dark)
- **Light Green**: `#dcfce7` (eco-100)

### Typography
- **Font Family**: Inter
- **Headings**: Bold, eco-dark color
- **Body**: Regular, gray-600

### Effects
- Glassmorphism cards
- Gradient backgrounds
- Smooth hover animations
- Fade-in on scroll (ready for implementation)

## Future Enhancements

- Backend API integration
- E-commerce functionality
- Product detail pages
- Blog section
- Animated scroll effects
- Image optimization with real product photos

## License

© Flex to Next - All rights reserved

---

**Made with 💚 for a sustainable future**
