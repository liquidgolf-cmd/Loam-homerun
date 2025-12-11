# Loam Strategy Homepage MVP

A modern, responsive homepage for loam strategy - a business consulting firm that helps small business owners discover their own answers through The Homerun Method.

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be easily deployed to:
- **Vercel** (recommended): Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Use the Next.js build preset
- **Any Node.js hosting**: Run `npm run build` and `npm start`

## Project Structure

```
/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main homepage
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── HomerunMethod.tsx  # The Homerun Method framework
│   ├── Services.tsx    # Services grid
│   ├── Philosophy.tsx # Philosophy section
│   ├── TargetAudience.tsx # Target audience messaging
│   └── CTA.tsx         # Call-to-action section
├── tailwind.config.js  # Tailwind configuration with brand colors
└── package.json        # Dependencies
```

## Brand Colors

- **Loam Brown**: Earth tones representing the foundational soil metaphor
- **Loam Green**: Growth and possibility
- **Loam Cream**: Clarity and lightness

## Features

- Fully responsive design (mobile, tablet, desktop)
- Modern, clean UI aligned with brand guidelines
- Fast loading and SEO-friendly
- Accessible markup and semantic HTML

## Next Steps

- Add contact form integration (Calendly, email service)
- Add client testimonials section
- Add blog/content section
- Integrate social media links
- Add analytics tracking


