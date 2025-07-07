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
        url: "https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Open_Graph.png?v=1751916677",
        width: 1200,
        height: 630,
        alt: "Saravan - Freelancer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
