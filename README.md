# Saravan — Personal Portfolio Website

Personal freelance web developer portfolio for [saravan.dev](https://saravan.dev). Built with Next.js 14 and deployed on Vercel.

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Custom CSS (`public/css/style.css`, `public/css/plugins.css`)
- **Animations** — WOW.js, react-fast-marquee
- **Carousel / Slider** — Swiper, react-slick
- **Contact Form** — EmailJS
- **Analytics** — Vercel Analytics + Speed Insights
- **Deployment** — Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/                  # Next.js App Router pages
  page.js             # Home (one-page layout)
  about/
  blog/
  contact/
  portfolio/
  service/
  layout.js           # Root layout — metadata, JSON-LD, global components

components/           # Reusable React components
  Hero.js
  About.js
  Service.js
  Portfolio.js
  CurrentWork.js
  WorkingProcess.js
  Pricing.js
  Faq.js
  TestimonialSlider.js
  Counter.js
  Partners.js
  Blog.js
  ContactForm.js
  ContactWidget.js    # Fixed floating WhatsApp / LinkedIn contact button
  EmbedPopup.js
  MarqueeTitle.js

layouts/              # Layout wrappers (Preloader, Header, Footer)
public/
  css/                # Global stylesheets
  img/                # Static images and portfolio assets
```

## Key Components

### ContactWidget
A fixed floating button (bottom-left) that alternates between WhatsApp and LinkedIn icons every 3 seconds, with matching brand colors. Clicking opens a modal with direct links to chat on WhatsApp or view the LinkedIn profile.

Update the constants at the top of `components/ContactWidget.js` to change contact details:
```js
const WA_NUMBER  = "+919494962048";
const WA_MSG     = encodeURIComponent("Hi Saravan, I'd like to connect with you!");
const LINKEDIN_URL = "https://www.linkedin.com/in/saravana-krishna/";
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
