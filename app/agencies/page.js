import Faq from "@/components/Faq";
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/919494962048?text=Hi%20Saravan%2C%20I%27m%20reaching%20out%20from%20an%20agency%20about%20white-label%20development";
const CALENDLY_LINK = "https://calendly.com/saravan1996-krishna/15min";

export const metadata = {
  title: "White-Label Shopify Developer for Agencies",
  description:
    "Outsource Shopify, WordPress and Next.js development to a white-label developer in India. NDA-friendly, Figma-to-Shopify builds, CRO and retainers from $1,200/month for 40 hours.",
  alternates: { canonical: "/agencies" },
};

const capabilities = [
  {
    title: "Figma to Shopify",
    desc: "Pixel-accurate Online Store 2.0 themes and custom sections built from your designers' Figma or XD files.",
    tag: "Liquid",
  },
  {
    title: "Shopify CRO",
    desc: "PDP, cart and landing page improvements, speed fixes and test variants for your retainer clients.",
    tag: "Growth",
  },
  {
    title: "Custom Shopify features",
    desc: "Metafield-driven sections, app integrations, Storefront API work and Shopify Plus customisations.",
    tag: "Shopify Plus",
  },
  {
    title: "Migrations & speed",
    desc: "WooCommerce / custom platform to Shopify migrations and Core Web Vitals clean-ups.",
    tag: "Performance",
  },
  {
    title: "WordPress & WooCommerce",
    desc: "Theme builds, page-builder sites and WooCommerce stores for clients outside Shopify.",
    tag: "WordPress",
  },
  {
    title: "React & Next.js",
    desc: "Headless storefronts, marketing sites and dashboards when a project outgrows a theme.",
    tag: "Headless",
  },
];

const reasons = [
  { label: "White-label", value: "Your brand, NDA signed" },
  { label: "Track record", value: "100+ e-commerce builds" },
  { label: "Experience", value: "8+ years in web development" },
  { label: "Response", value: "Reply within 24 hours" },
];

const agencyFaq = [
  {
    id: 1,
    title: "Do you work white-label and sign NDAs?",
    content:
      "Yes. I work under your agency's brand and I'm happy to sign your NDA before we see any client material. I communicate with you, not your client, unless you want me on client calls as part of your team.",
  },
  {
    id: 2,
    title: "How does the monthly retainer work?",
    content:
      "Retainers start at $1,200/month for 40 hours of development time that you can spread across your clients' Shopify, WordPress or Next.js work. It gives you predictable capacity without hiring, and larger hour blocks are available.",
  },
  {
    id: 3,
    title: "Can you take on one-off projects instead of a retainer?",
    content:
      "Yes. Send the designs and scope and I'll come back with a fixed quote and timeline. Full Shopify store builds start at $1,250, and smaller ad-hoc tasks are billed at $35/hour.",
  },
  {
    id: 4,
    title: "How do you handle time zones?",
    content:
      "I'm based in Bangalore (IST) and work with agencies in the US, UK, Europe and Australia. Work is handled through clear async updates plus scheduled check-ins, so your team wakes up to progress.",
  },
  {
    id: 5,
    title: "What do you need from us to get started?",
    content:
      "Designs (Figma, XD or a reference site), store or staging access, and the scope. I'll confirm the plan, the timeline and any questions before writing code.",
  },
];

const page = () => {
  return (
    <NikolasLayout>
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h1>
              <span className="stroke_text">White-label </span>
              <span className="underline">Shopify</span>
              <span className="stroke_text"> developer for </span>
              <span className="underline">agencies</span>
            </h1>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* Capabilities */}
      <div className="nicolas_sm_experience">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>// What I take off your plate</span>
            </div>
            <div className="center">
              <p>
                Extra development capacity for design, marketing and Shopify
                agencies. You win and manage the client, I build it under
                your name, on time and to spec.
              </p>
            </div>
            <div className="right">
              <Link href={CALENDLY_LINK} target="_blank">
                (( Book a call ))
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="experience_in">
              {capabilities.map((item) => (
                <div className="list_inner" key={item.title}>
                  <div className="left">
                    <p>{item.title}</p>
                  </div>
                  <div className="center">
                    <p>{item.desc}</p>
                  </div>
                  <div className="right">
                    <span>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* /Capabilities */}
      {/* Why */}
      <div className="nicolas_sm_about">
        <div className="container">
          <div className="extra_container">
            <div className="biography">
              <ul>
                {reasons.map((item) => (
                  <li key={item.label}>
                    <div className="list_inner">
                      <span>{item.label}</span>
                      <h3>{item.value}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Why */}
      {/* Engagement */}
      <div className="nicolas_sm_section">
        <div className="nicolas_sm_pricing">
          <div className="container">
            <div className="nicolas_sm_main_title">
              <div className="left">
                <span>// Ways to work together</span>
              </div>
              <div className="center">
                <p>
                  Book monthly capacity for ongoing client work, or get a
                  fixed quote for a single project.
                </p>
              </div>
              <div className="right">
                <span />
              </div>
            </div>
            <div className="extra_container">
              <div className="pricing_in">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="info_box">
                        <div className="info">
                          <h3 className="plan">Dedicated Retainer</h3>
                          <h3 className="price">
                            <span>From</span> $1,200<span>/ month</span>
                          </h3>
                        </div>
                        <div className="features">
                          <ul>
                            <li>
                              <span />
                              <p>40 development hours per month</p>
                            </li>
                            <li>
                              <span />
                              <p>Use hours across any of your clients</p>
                            </li>
                            <li>
                              <span />
                              <p>Priority turnaround on your tickets</p>
                            </li>
                            <li>
                              <span />
                              <p>Shopify, WordPress &amp; Next.js</p>
                            </li>
                            <li>
                              <span />
                              <p>White-label, NDA signed</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="button">
                        <span>Reserve capacity</span>
                        <span>
                          <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                        </span>
                        <a className="nicolas_sm_full_link" href={WA_LINK} target="_blank" rel="noopener noreferrer" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="info_box">
                        <div className="info">
                          <h3 className="plan">Per Project</h3>
                          <h3 className="price">
                            <span>Fixed</span> Quote<span>/ project</span>
                          </h3>
                        </div>
                        <div className="features">
                          <ul>
                            <li>
                              <span />
                              <p>Scope &amp; timeline agreed up front</p>
                            </li>
                            <li>
                              <span />
                              <p>Shopify store builds from $1,250</p>
                            </li>
                            <li>
                              <span />
                              <p>Ad-hoc tasks at $35/hour</p>
                            </li>
                            <li>
                              <span />
                              <p>Milestone-based delivery</p>
                            </li>
                            <li>
                              <span />
                              <p>Cross-browser &amp; device QA</p>
                            </li>
                            <li>
                              <span />
                              <p>2 weeks post-launch support</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="button">
                        <span>Send a brief</span>
                        <span>
                          <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                        </span>
                        <a className="nicolas_sm_full_link" href="mailto:saravan1996.krishna@gmail.com?subject=Agency project brief" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="info_box">
                        <div className="info">
                          <h3 className="plan">Bigger Capacity</h3>
                          <h3 className="price">
                            <span>Custom</span> Hours<span>/ month</span>
                          </h3>
                        </div>
                        <div className="features">
                          <ul>
                            <li>
                              <span />
                              <p>Half-time or larger hour blocks</p>
                            </li>
                            <li>
                              <span />
                              <p>Ideal for agencies with steady Shopify work</p>
                            </li>
                            <li>
                              <span />
                              <p>Join your Slack &amp; project boards</p>
                            </li>
                            <li>
                              <span />
                              <p>Ongoing maintenance for your client stores</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="button">
                        <span>Book a call</span>
                        <span>
                          <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
                        </span>
                        <a className="nicolas_sm_full_link" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Engagement */}
      {/* FAQ */}
      <div className="nicolas_sm_question" id="question">
        <div className="container">
          <div className="extra_container">
            <div className="question_in">
              <div className="main_title">
                <h3>Agency questions</h3>
              </div>
              <Faq data={agencyFaq} />
            </div>
          </div>
        </div>
      </div>
      {/* /FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://saravan.dev/agencies#service",
            name: "White-label Shopify development for agencies",
            serviceType: "White-label Shopify development",
            url: "https://saravan.dev/agencies",
            provider: { "@id": "https://saravan.dev/#person" },
            areaServed: ["US", "GB", "EU", "AU", "IN"],
            offers: {
              "@type": "Offer",
              name: "Dedicated developer retainer (40 hours/month)",
              price: "1200",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </NikolasLayout>
  );
};
export default page;
