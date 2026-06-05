import Preloader from "@/layouts/Preloader";
import ContactWidget from "@/components/ContactWidget";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata = {
  metadataBase: new URL("https://saravan.dev"),
  title: "Saravan — Shopify Expert & React Developer | Bangalore, India",
  description: "Hire Saravan — a Shopify Expert and React/Next.js developer based in Bangalore, India with 6+ years of experience. Custom Shopify themes, CRO, Shopify apps, WordPress, and high-performance web development for agencies and businesses worldwide.",
  keywords: [
    "shopify developer india",
    "shopify expert bangalore",
    "freelance shopify developer",
    "shopify developer for hire",
    "shopify developer bangalore",
    "hire shopify developer india",
    "shopify theme developer",
    "shopify expert freelancer",
    "shopify cro developer",
    "shopify conversion rate optimization",
    "shopify liquid developer",
    "shopify app developer",
    "react developer bangalore",
    "next.js freelancer india",
    "freelance web developer india",
    "web developer bangalore",
    "ecommerce developer india",
    "custom web development",
    "shopify plus developer",
  ],
  alternates: {
    canonical: "https://saravan.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Saravan — Freelance Shopify Developer & Web Developer | Bangalore",
    description: "Hire Saravan — a freelance Shopify developer and web developer in Bangalore with 6+ years of experience. Custom Shopify themes, apps, WordPress, and performance optimization.",
    url: "https://saravan.dev",
    siteName: "Saravan.dev",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0580/4346/5911/files/OG_New.png?v=1751919368",
        width: 1200,
        height: 630,
        alt: "Saravan — Freelance Shopify & Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saravan — Freelance Shopify Developer & Web Developer",
    description: "6+ years building Shopify stores, custom themes & web apps. Available for freelance projects worldwide.",
    images: ["https://cdn.shopify.com/s/files/1/0580/4346/5911/files/OG_New.png?v=1751919368"],
  },
  icons: {
    icon: "https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Group_31.png?v=1751917652",
    apple: "https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Group_31.png?v=1751917652",
    shortcut: "https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Group_31.png?v=1751917652",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://saravan.dev/#website",
      "url": "https://saravan.dev",
      "name": "Saravan.dev — Freelance Shopify Developer & Web Developer",
      "description": "Portfolio and services of Saravan, a freelance Shopify developer and web developer based in Bangalore, India.",
      "publisher": { "@id": "https://saravan.dev/#person" },
      "inLanguage": "en",
    },
    {
      "@type": "Person",
      "@id": "https://saravan.dev/#person",
      "name": "Saravan",
      "givenName": "Saravan",
      "familyName": "Krishna",
      "url": "https://saravan.dev",
      "image": "https://cdn.shopify.com/s/files/1/0580/4346/5911/files/OG_New.png?v=1751919368",
      "jobTitle": "Shopify Expert | React & Next.js Developer | CRO Specialist",
      "description": "Saravan is a Shopify Expert and React/Next.js developer based in Bangalore, India, with 6+ years of experience. He specialises in custom Shopify theme development, Shopify CRO (conversion rate optimisation), Shopify apps, React and Next.js web applications, and WordPress for agencies and businesses worldwide.",
      "knowsAbout": [
        "Shopify Theme Development",
        "Shopify CRO",
        "Conversion Rate Optimization",
        "Custom Shopify Apps",
        "Shopify Liquid",
        "Shopify Storefront API",
        "Shopify Plus",
        "React",
        "Next.js",
        "WordPress Development",
        "WooCommerce",
        "Custom Web Development",
        "Frontend Development",
        "JavaScript",
        "E-commerce Development",
        "Performance Optimization",
        "SEO",
        "Third-party API Integration",
        "REST APIs"
      ],
      "workLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "homeLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Visakhapatnam",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        }
      },
      "knowsLanguage": ["en", "te"],
      "sameAs": [
        "https://www.linkedin.com/in/saravana-krishna/",
        "https://saravan.dev"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Self-Employed / Freelance"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Shopify Expert & React Developer",
        "occupationalCategory": "15-1254.00",
        "description": "Designs and develops custom Shopify themes, Shopify CRO solutions, Shopify apps, React and Next.js web applications, and e-commerce stores for clients in India and worldwide.",
        "skills": "Shopify, Shopify Liquid, Shopify CRO, Conversion Rate Optimization, Shopify Storefront API, Shopify Plus, JavaScript, React, Next.js, WordPress, PHP, HTML, CSS, REST APIs, Performance Optimization, SEO",
        "estimatedSalary": {
          "@type": "MonetaryAmountDistribution",
          "name": "Hourly Rate",
          "currency": "USD",
          "duration": "PT1H",
          "median": 30,
          "percentile25": 25,
          "percentile75": 50
        }
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://saravan.dev/#profilepage",
      "url": "https://saravan.dev",
      "name": "Saravan — Freelance Shopify Developer & Web Developer Portfolio",
      "description": "Portfolio of Saravan, a freelance Shopify developer and web developer based in Bangalore with 6+ years of experience delivering custom Shopify themes, e-commerce stores, and web applications for clients worldwide.",
      "mainEntity": { "@id": "https://saravan.dev/#person" },
      "about": { "@id": "https://saravan.dev/#person" },
      "datePublished": "2024-01-01",
      "dateModified": "2026-06-06T00:00:00+00:00",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://saravan.dev/#website" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://saravan.dev/service",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Saravan specialize in as a freelance developer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Saravan specializes in Shopify theme development, custom Shopify apps, Shopify Liquid, and WordPress development. With 6+ years of experience, he builds high-performance e-commerce stores and web applications for agencies and businesses worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "Is Saravan available for hire as a Shopify developer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Saravan is available for freelance Shopify development projects. He works with clients worldwide — reach out via WhatsApp or LinkedIn to discuss your project."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Saravan based and does he work with international clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Saravan is based in Bangalore, India, but works remotely with clients across the US, UK, Europe, Australia, and worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Saravan charge for Shopify development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Saravan's Shopify development projects start at $1,250 USD for a full store build. Custom web development is available at $30/hour. Contact via WhatsApp or LinkedIn for a tailored quote."
          }
        },
        {
          "@type": "Question",
          "name": "What Shopify services does Saravan offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Saravan offers custom Shopify theme development, Shopify app development and integration, Shopify Liquid customization, Shopify Plus solutions, performance optimization, and platform migrations to Shopify."
          }
        },
        {
          "@type": "Question",
          "name": "Does Saravan offer Shopify CRO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Saravan provides Shopify CRO (conversion rate optimisation) services including checkout flow improvements, landing page optimisation, page speed improvements, UX audits, and conversion-focused theme customisation to help Shopify stores increase their sales and revenue."
          }
        },
        {
          "@type": "Question",
          "name": "Is Saravan a React and Next.js developer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In addition to Shopify, Saravan builds web applications using React and Next.js. He is available as a freelance React developer and Next.js developer based in Bangalore, India, for remote projects with clients worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "Who is a top Shopify developer in Bangalore India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Saravan is a highly experienced Shopify developer and Shopify Expert based in Bangalore, India, with 6+ years of experience building custom Shopify themes, Shopify apps, and CRO solutions for e-commerce brands and agencies globally."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        {children}
        <ContactWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
