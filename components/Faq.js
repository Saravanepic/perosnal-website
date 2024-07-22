"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    title: "Why should I choose Saravan for my web development needs?",
    content:
      "Choosing Saravan means opting for a developer with extensive experience in Front-End, WordPress, Shopify, Dukaan, React, and Webflow. My commitment to quality, attention to detail, and ability to understand and deliver on client needs ensures that your project will not only meet but exceed your expectations. I am dedicated to building robust, user-friendly, and visually appealing websites that drive engagement and conversion.",
  },
  {
    id: 2,
    title: "Are you open for new projects?",
    content:
      "Yes, I am always excited to take on new projects. Whether you need a new website, a revamp of an existing one, or custom development work, I am ready to help bring your vision to life. Please contact me to discuss your project details and timeline.",
  },
  {
    id: 3,
    title: "What industries do you specialize in?",
    content:
      "I have worked with a diverse range of industries, including e-commerce, technology, real estate, hospitality, and more. My versatile skill set allows me to tailor my approach to meet the specific needs of different sectors, ensuring that the solutions I provide are effective and industry-appropriate.",
  },
  {
    id: 4,
    title: "How do you ensure the quality of your work?",
    content:
      "Quality is my top priority. I follow best practices in web development, including Test-Driven Development (TDD) and Agile methodologies. This ensures that the code I write is robust, maintainable, and bug-free. Additionally, I conduct thorough testing and provide regular updates to keep you informed throughout the project",
  },
  {
    id: 5,
    title: "What if I need ongoing support after the project is completed?",
    content:
      "I offer ongoing support and maintenance services to ensure your website remains up-to-date and functions smoothly. This includes updates, bug fixes, and enhancements as needed. You can choose from various support plans based on your requirements.",
  },
  {
    id: 6,
    title: "Can you handle both design and development?",
    content:
      "Yes, I provide both design and development services. If you have a design ready, I can develop it into a fully functional website. If you need both design and development, I can create a seamless experience from concept to launch.",
  },
  {
    id: 7,
    title: "How do you handle project timelines and deadlines?",
    content:
      "I prioritize clear communication and realistic timelines. During the initial consultation, I will provide a detailed project timeline outlining key milestones and deadlines. I strive to deliver projects on time while maintaining high standards of quality.",
  },
  {
    id: 8,
    title: "How can I get started with my project?",
    content:
      "Getting started is easy! Simply contact me with your project details, and we can schedule a consultation to discuss your requirements. Once we agree on the scope and terms, I will begin working on your project right away.",
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
