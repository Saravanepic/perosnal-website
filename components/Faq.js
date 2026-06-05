"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    title: "Are you a Shopify Expert based in India?",
    content:
      "Yes. I am a freelance Shopify Expert based in Bangalore, India, with 6+ years of experience building custom Shopify themes, Shopify apps, and high-converting Shopify stores. I work with brands and agencies across India and worldwide, delivering production-ready Shopify solutions on time.",
  },
  {
    id: 2,
    title: "What Shopify services do you offer?",
    content:
      "I offer end-to-end Shopify development — custom Shopify theme development using Liquid, Shopify app integration and development, Shopify CRO (conversion rate optimisation), checkout customisation, Shopify Plus solutions, performance optimisation, and migrations from other platforms to Shopify.",
  },
  {
    id: 3,
    title: "Do you offer Shopify CRO (Conversion Rate Optimisation)?",
    content:
      "Yes. Shopify CRO is a core part of what I do. I audit your store's UX, checkout flow, page speed, and conversion bottlenecks, then implement targeted improvements — from Liquid-level theme changes to app configurations — to measurably increase your store's sales.",
  },
  {
    id: 4,
    title: "Are you also a React and Next.js developer?",
    content:
      "Yes. In addition to Shopify, I build web applications using React and Next.js. Whether you need a headless Shopify storefront, a custom dashboard, or a standalone web app, I can architect and deliver it. I am available as a freelance React and Next.js developer in Bangalore for remote projects worldwide.",
  },
  {
    id: 5,
    title: "Do you work with international clients from India?",
    content:
      "Absolutely. I am based in Bangalore, India, and work remotely with clients across the US, UK, Europe, Australia, and the Middle East. Time zone differences are handled through clear async communication and scheduled check-ins — most clients find the process seamless.",
  },
  {
    id: 6,
    title: "What industries and e-commerce niches have you worked with?",
    content:
      "I have built Shopify stores and web projects for fashion, jewellery, beauty, electronics, food & beverage, real estate, and SaaS companies. My e-commerce experience spans D2C brands, multi-vendor marketplaces, and agency white-label projects.",
  },
  {
    id: 7,
    title: "How do you ensure quality and meet deadlines?",
    content:
      "I follow a structured process — scope agreement, milestone-based delivery, and thorough cross-browser and device testing before handoff. I communicate proactively if anything shifts, so there are no surprises. Most projects are delivered on or ahead of schedule.",
  },
  {
    id: 8,
    title: "How can I hire you for a Shopify or web development project?",
    content:
      "The fastest way is to message me on WhatsApp or connect via LinkedIn — links are on this page. Share your project brief, timeline, and budget, and I will get back to you within 24 hours with an honest assessment and next steps.",
  },
   {
    id: 9,
    title: "What if I need ongoing support after the project is completed?",
    content:
      "I offer ongoing support and maintenance services to ensure your website remains up-to-date and functions smoothly. This includes updates, bug fixes, and enhancements as needed. You can choose from various support plans based on your requirements.",
  },
];

const Faq = ({ limit = 10 }) => {
  const [active, setActive] = useState(1);
  const onClick = (value) => setActive(active == value ? null : value);
  return (
    <div className="accordion_wrap ready">
      {faqData.map(
        (item) =>
          item.id <= limit && (
            <div
              className={`accordion ${active === item.id ? "active" : ""}`}
              key={item.id}
            >
              <div
                className="accordion_header"
                onClick={() => onClick(item.id)}
              >
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="arrow">
                  <img
                    className="sm_svg"
                    src="img/svg/down_arrow.svg"
                    alt={1}
                  />
                </div>
              </div>
              <div
                className="accordion_content"
                style={{ display: active == item.id ? "block" : "none" }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default Faq;
