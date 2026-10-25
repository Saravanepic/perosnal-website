"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import LiquidBubble from "@/components/LiquidBubble";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import CurrentWork from "@/components/CurrentWork";
import Pricing from "@/components/Pricing";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";

// Where the bubble sits as each section scrolls into view (see LiquidBubble for units)
const BUBBLE_STOPS = [
  { selector: "#home", x: -0.62, y: -0.2, scale: 0.6, alpha: 1, mobile: { x: -0.45, y: -0.63, scale: 0.7 } },
  { selector: "#about", x: 0.62, y: 0, scale: 0.45, alpha: 0.9 },
  { selector: "#portfolio", x: 0.95, y: -0.35, scale: 0.18, alpha: 0 },
  { selector: ".nicolas_sm_testimonials", x: -0.7, y: 0.1, scale: 0.42, alpha: 0.85 },
  { selector: ".nicolas_sm_pricing", x: 0.95, y: -0.35, scale: 0.34, alpha: 0.7 },
  { selector: "#contact", x: 0, y: 0.1, scale: 0.6, alpha: 0.9 },
];

const page = () => {
  return (
    <NikolasLayout>
      <LiquidBubble stops={BUBBLE_STOPS} reveal=".nicolas_sm_hero .center span img" />

      {/* Hero */}
      <Hero />
      {/* /Hero */}
      {/* About */}
      <About nextSection="portfolio" />
      {/* /About */}
      {/* Portfolio */}
      <CurrentWork/>
      {/* <Portfolio /> */}
      {/* /Portfolio */}
      {/* Testimonials */}
      <TestimonialSlider sectionNumber="04" />
      {/* /Testimonials */}
      {/* Partners */}
      {/* <Partners /> */}
      {/* /Partners */}
      {/* Pricing */}
      <Pricing />
      {/* /Pricing */}
      {/* Blog */}
      {/* <Blog /> */}
      {/* /Blog */}
    </NikolasLayout>
  );
};
export default page;
