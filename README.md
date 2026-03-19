# Mason Maeder - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Type-Safe**: Built with TypeScript for better code quality and developer experience
- **SEO Optimized**: Proper metadata and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant HTML with proper ARIA labels
- **Performance Optimized**: Static site generation with Next.js App Router
- **Reusable Components**: Modular component architecture for easy maintenance

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Static export compatible (GitHub Pages, Vercel, Netlify, etc.)

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css              # Global Tailwind styles
│   ├── page.tsx                 # Home page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── portfolio/
│   │   └── page.tsx             # Portfolio/Projects page
│   ├── experience/
│   │   └── page.tsx             # Work experience page
│   └── contact/
│       └── page.tsx             # Contact page
├── components/
│   ├── Navbar.tsx               # Navigation bar (responsive)
│   ├── Footer.tsx               # Footer with links
│   ├── ProjectCard.tsx          # Project card component
│   └── ContactForm.tsx          # Contact form component
├── public/
│   └── images/                  # Static images
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
└── README.md                    # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Pages

### Home (`/`)
- Hero section with introduction
- Quick statistics
- Featured tech stack

### About (`/about`)
- Personal introduction
- Skills and expertise breakdown
- Education information

### Portfolio (`/portfolio`)
- Showcase of projects with descriptions
- Technology tags for each project
- Category filtering capability

### Experience (`/experience`)
- Professional work experience timeline
- Company, position, and period details
- Certifications section

### Contact (`/contact`)
- Contact information (email, phone, location)
- Social media links
- Contact form (client-side validation)

## Components

### Navbar
- Responsive navigation with mobile hamburger menu
- Sticky positioning
- Navigation links to all pages

### Footer
- Quick links to main pages
- Social media links
- Copyright information

### ProjectCard
- Reusable card component for displaying projects
- Technology tags
- Category badges
- Link to project details

### ContactForm
- Form validation
- Success/error status messages
- Loading state during submission
- Accessible form fields with labels

## Customization

### Colors
Modify the color scheme in `tailwind.config.ts`:
- `primary`: Dark background color
- `secondary`: Card and secondary background
- `accent`: Highlight and interactive color

### Content
Update content in respective page files under `app/` directory.

### Images
Place images in `public/images/` directory and reference them in your pages.

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
1. Update `next.config.js` with your repository name
2. Run `npm run build`
3. Push the `out` directory to gh-pages branch

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Static site generation for optimal performance
- Optimized CSS with Tailwind purging
- Mobile-first responsive design
- Fast load times and smooth animations

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- Proper heading hierarchy
- Form labels and ARIA attributes
- Keyboard navigation support

## SEO

- Optimized metadata in `layout.tsx`
- Proper heading structure on all pages
- Open Graph meta tags
- Mobile-friendly design
- Fast page load times

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue in the repository.

---

**Made with ❤️ by Mason Maeder**
