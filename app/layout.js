import Preloader from "@/layouts/Preloader";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata = {
  title: "Saravan - Freelancer",
  description: "Experienced Freelance Web Developer. Creating engaging, high-quality web experiences and custom e-commerce solutions for agencies and businesses.",
  keywords: "freelancer, web developer, e-commerce, custom solutions, web design, front-end development, back-end development, responsive design, user experience",
  openGraph: {
    title: "Saravan - Freelancer",
    description: "Experienced Freelance Web Developer. Creating engaging, high-quality web experiences and custom e-commerce solutions for agencies and businesses.",
    url: "https://saravan.dev",
    siteName: "Saravan - Freelancer",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0580/4346/5911/files/OG_New.png?v=1751919368",
        width: 1200,
        height: 630,
        alt: "Saravan - Freelancer",
      },
    ],
    locale: "en_US",
    type: "website",
     icons: {
      icon: 'https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Group_31.png?v=1751917652',
      apple: 'https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Group_31.png?v=1751917652',
      shortcut: 'https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Group_31.png?v=1751917652',
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://saravan.dev/#person",
      "name": "Saravan",
      "url": "https://saravan.dev",
      "jobTitle": "Freelance Web Developer",
      "description": "Freelance web developer based in Bangalore with 6.5 years of experience building fast, engaging web experiences from e-commerce to interactive platforms.",
      "knowsAbout": ["Web Development", "Shopify", "WordPress", "Custom Development", "SEO"],
      "workLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressCountry": "IN"
        }
      },
      "homeLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vizag",
          "addressCountry": "IN"
        }
      },
      "knowsLanguage": "en-US",
      "sameAs": [
        "https://www.linkedin.com/in/saravana-krishna/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Self-Employed"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Freelance Web Developer",
        "skills": "Custom Shopify theme setup, Mobile-responsive design, Basic SEO optimization, Custom plugin development, Third-party API integration, Performance optimization"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://saravan.dev/#profilepage",
      "url": "https://saravan.dev",
      "name": "Saravan - Freelance Web Developer Portfolio",
      "description": "Portfolio of Saravan, a freelance web developer based in Bangalore offering Shopify, WordPress, and custom development services.",
      "mainEntity": {
        "@id": "https://saravan.dev/#person"
      },
      "about": {
        "@id": "https://saravan.dev/#person"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-03-05",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://saravan.dev/#website",
        "url": "https://saravan.dev",
        "name": "Saravan.dev",
        "description": "Freelance web developer portfolio and services",
        "publisher": {
          "@id": "https://saravan.dev/#person"
        }
      }
    },
    {
      "@type": "ItemList",
      "name": "Services Offered",
      "description": "Web development services including Shopify, WordPress, and custom solutions",
      "url": "https://saravan.dev/#services",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Shopify Website Development",
            "description": "Custom Shopify theme setup, mobile-responsive design, basic SEO optimization, integration with essential apps, blog setup.",
            "offers": {
              "@type": "Offer",
              "price": "1250.00",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "WordPress Website Development",
            "description": "WordPress theme setup, mobile-responsive design, basic SEO optimization, installation of necessary plugins, contact form integration, blog setup.",
            "offers": {
              "@type": "Offer",
              "price": "950.00",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Custom Web Development",
            "description": "Tailored solutions including custom plugin or app development, third-party API integration, performance optimization.",
            "offers": {
              "@type": "Offer",
              "price": "30.00",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 30,
                "priceCurrency": "USD",
                "unitText": "HOUR"
              }
            }
          }
        }
      ]
    },
      {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "@id": "https://saravan.dev/#service-webdev",
        "name": "Freelance Web Development",
        "provider": {
          "@id": "https://saravan.dev/#person"
        }
      },
      "author": {
        "@type": "Person",
        "name": "Harsha Anil"
      },
      "reviewBody": "Saravan is one of the best in his domain. You name it, Saravana will code it with precision and expertise. He not only built my dream website with the available and limited resources but also guided me through each and every step of the process. learned a lot from him and it was wonderful working with such an exceptionally brilliant professional. I highly recommend Saravana for any project – he's always a top choice!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 4
      }
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "@id": "https://saravan.dev/#service-webdev"
      },
      "author": {
        "@type": "Person",
        "name": "Vishal Goswami"
      },
      "reviewBody": "He is a beast in coding. I am working with Saravana for the last couple of months and he is the best guy I have found in my development team. He is very instant in responding, doing the work on time, I think he never sleeps. I have already worked with Saravana on 15+ projects and we have to go a long way. He is very knowledgeable. He pays close attention to details. He is also very patient in client training and taking calls. Thanks a lot, Saravana.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 4
      }
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "@id": "https://saravan.dev/#service-webdev"
      },
      "author": {
        "@type": "Person",
        "name": "Tim Huijsmans"
      },
      "reviewBody": "A very skilled web developer. He volunteered to help us with several tasks on the website of our foundation, Faunawatch. He is quick and communicates well. It is very nice to work with him. I would definitely recommend him to others.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 4
      }
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
