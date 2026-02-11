# Yathi Designs Website

A modern, responsive website for Yathi Designs - custom art and bespoke wedding invitations.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll reveals and hover effects
- **Form Handling**: React Hook Form for quote and contact forms
- **Image Gallery**: Interactive lightbox gallery with filtering
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── gallery/page.tsx   # Gallery with lightbox
│   ├── process/page.tsx   # Process & turnaround times
│   ├── quote/page.tsx     # Quote request form
│   ├── invitations/page.tsx    # Semi-custom invitations
│   ├── dayof-stationery/page.tsx # Day-of stationery
│   ├── contact/page.tsx   # Contact form
│   ├── globals.css        # Global styles
│   └── providers.tsx      # Client providers
└── components/
    ├── Navigation.tsx     # Top navigation with mobile menu
    ├── Footer.tsx         # Footer with links & social
    └── ScrollReveal.tsx   # Scroll animation wrapper
```

## Pages

- **Home** (`/`) - Hero, service overview, featured in section
- **About** (`/about`) - Founder story and core values
- **Gallery** (`/gallery`) - Portfolio with lightbox and filtering
- **Process** (`/process`) - Step-by-step process & turnaround times
- **Invitations** (`/invitations`) - Semi-custom invitation details
- **Day-Of Stationery** (`/dayof-stationery`) - Day-of items & services
- **Quote** (`/quote`) - Custom form for requesting quotes
- **Contact** (`/contact`) - Contact form and information

## Design System

### Colors
- **Cream**: `#FAF8F3` (background)
- **Dark Gold**: `#9B8B6F` (accent)
- **Charcoal**: `#2C2C2C` (text)
- **Soft Blush**: `#E8DDD4` (secondary)

### Typography
- **Serif**: Georgia (headings)
- **Sans**: Inter (body text)

### Motion
- **Page transitions**: 150-250ms fade-in
- **Scroll reveals**: 400-700ms fade-up with easing
- **Hover effects**: 200-300ms scale/color transitions

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Key Components

### Navigation
- Fixed header with smooth scroll detection
- Mobile hamburger menu with overlay
- Smooth underline animations on hover

### ScrollReveal
- Intersection Observer-based animation trigger
- Configurable delay, duration, and stagger
- Fade-up animation as sections enter viewport

### Footer
- Social media links (Instagram, Facebook, Pinterest)
- Quick navigation links
- Email contact
- Copyright information

## Forms

The website includes two main forms:

1. **Quote Request Form** (`/quote`)
   - Captures event details, budget, and service interests
   - Client-side validation with React Hook Form

2. **Contact Form** (`/contact`)
   - Simple contact form for general inquiries
   - Real-time validation

*Note: Form submissions currently log to console. Connect to your backend/email service as needed.*

## Customization

### Updating Colors
Edit the Tailwind config in `tailwind.config.ts`:
```ts
colors: {
  cream: '#FAF8F3',
  darkGold: '#9B8B6F',
  // ... etc
}
```

### Adding Images
Replace the placeholder gradients in gallery items with real images:
```tsx
<Image src="/images/invitation-1.jpg" alt="..." width={400} height={400} />
```

### Email Configuration
To enable email notifications for forms, integrate with:
- Supabase (included in deps)
- SendGrid
- Mailgun
- Firebase

## Performance

- Image optimization via Next.js Image component
- CSS-in-JS with Tailwind for zero runtime overhead
- Server-side rendering for fast initial loads
- Code splitting and lazy loading for routes

## SEO

- Meta tags configured in `layout.tsx`
- Semantic HTML structure
- Open Graph tags for social sharing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Backend API integration for form submissions
- Real image uploads for gallery
- Email notifications for inquiries
- Blog/resources section
- Testimonials/reviews
- Video gallery
- Chat widget for real-time support

## License

© 2026 Yathi Designs. All rights reserved.

## Support

For questions or issues, contact: hello@yathidesigns.com
