"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import CurrentWork from "@/components/CurrentWork";
import Pricing from "@/components/Pricing";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";

const page = () => {
  return (
    <NikolasLayout>

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
