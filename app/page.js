"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import CurrentWork from "@/components/CurrentWork";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";

const page = () => {
  return (
    <NikolasLayout>
      <link rel="icon" href="https://cdn.shopify.com/s/files/1/0580/4346/5911/files/Group_31.png?v=1751917652" type="image/svg+xml" />

      {/* Hero */}
      <Hero />
      {/* /Hero */}
      {/* About */}
      <About />
      {/* /About */}
      {/* Service */}
      <Service />
      {/* /Service */}
      {/* Portfolio */}
      <CurrentWork/>
      {/* <Portfolio /> */}
      {/* /Portfolio */}
      {/* Testimonials */}
      <TestimonialSlider />
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
