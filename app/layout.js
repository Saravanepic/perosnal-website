import Preloader from "@/layouts/Preloader";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";

export const metadata = {
  title: "Saravan - Freelancer",
  description: "Experienced Freelance Web Developer specializing in front-end development, WordPress, Shopify, React, and Webflow. Creating engaging, high-quality web experiences and custom e-commerce solutions for agencies and businesses.",
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
