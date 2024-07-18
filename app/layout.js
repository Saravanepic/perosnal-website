import Preloader from "@/layouts/Preloader";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Saravan - Freelancer",
  description: "Experienced Freelance Web Developer. Creating engaging, high-quality web experiences and custom e-commerce solutions for agencies and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
