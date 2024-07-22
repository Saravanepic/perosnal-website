import About from "@/components/About";
import Counter from "@/components/Counter";
import MarqueeTitle from "@/components/MarqueeTitle";
import Partners from "@/components/Partners";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
const page = () => {
  return (
    <NikolasLayout>
      {/* Page_title */}
      <div className="nicolas_sm_page_title mb-0">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="stroke_text">Hi from </span>
              <span className="underline">Saravan,</span>
              <span className="stroke_text">a </span>
              <span className="underline">Web developer </span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* About_video */}
      {/* <div className="nicolas_sm_about_video">
        <div className="container">
          <div className="extra_container">
            <div className="video_box">
              <img src="img/about/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img className="sm_svg" src="img/svg/playback.svg" alt={1} />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* /About_video */}
      {/* About_me */}
      <About sectionTitle="ABOUT ME" nextSection="counter" />
      {/* /About_me */}
      {/* Counter */}
      {/* <div className="nicolas_sm_counter" id="counter">
        <div className="container">
          <div className="extra_container">
            <div className="counter_in">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="space" />
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/1.png" alt={1} />
                      </div>
                      <div className="title">
                        <span>Front End</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={95}
                            data-speed={1500}
                          >
                            <Counter end={95} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/2.png" alt={2} />
                      </div>
                      <div className="title">
                        <span>JS Tech</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={95}
                            data-speed={1500}
                          >
                            <Counter end={80} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/3.png" alt={3} />
                      </div>
                      <div className="title">
                        <span>Shopify</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={80}
                            data-speed={1500}
                          >
                            <Counter end={90} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="space"></div>
                    <div className="box">
                      <div className="icon">
                        <img src="img/about/4.png" alt={4} />
                      </div>
                      <div className="title">
                        <span>WordPress</span>
                        <h3>
                          <span
                            className="sm_counter"
                            data-from={0}
                            data-to={95}
                            data-speed={1500}
                          >
                            <Counter end={90} />
                          </span>
                          %
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* /Counter */}
      {/* Experience */}
      <div className="nicolas_sm_experience">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>// My experience</span>
            </div>
            <div className="center">
              <p>
                I believe in the transformative power of digital experiences.
                I craft websites and digital products that elevate your online
                presence but also drive real business value.
              </p>
            </div>
            <div className="right">
              <Link href="portfolio">(( Projects all ))</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="experience_in">
            <div className="list_inner">
                <div className="left">
                  <p>As a Freelancer</p>
                </div>
                <div className="center">
                  <p>Currently working full-time, collaborating with various agencies.</p>
                </div>
                <div className="right">
                  <span>2022 - Present</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Creative Labs</p>
                </div>
                <div className="center">
                  <p>Freelance Tech Lead</p>
                </div>
                <div className="right">
                  <span>2024 - Present</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Genisys Group</p>
                </div>
                <div className="center">
                  <p>Freelance Shopify Developer</p>
                </div>
                <div className="right">
                  <span>2024 - Present</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>pimCloud</p>
                </div>
                <div className="center">
                  <p>Front End Developer</p>
                  <p className="fs-6">Helping in building a SASS product</p>
                </div>
                <div className="right">
                  <span>2023 - Present</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Friction Studio</p>
                </div>
                <div className="center">
                  <p>Freelance Senior Shopify Developer</p>
                </div>
                <div className="right">
                  <span>2022 - Present</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Outplay</p>
                </div>
                <div className="center">
                  <p>Senior Web Developer</p>
                </div>
                <div className="right">
                  <span>2022 - 2023</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>PLC</p>
                </div>
                <div className="center">
                  <p>Web Development Strategist</p>
                </div>
                <div className="right">
                  <span>2020 - 2022</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>First Principles</p>
                </div>
                <div className="center">
                  <p>Software Engineer L1</p>
                </div>
                <div className="right">
                  <span>2018 - 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Experience */}
      
        
      {/* About_testimonials */}
      <TestimonialSlider sectionNumber="" />
      {/* /About_testimonials */}
       {/* About_partners */}
      {/* <Partners sectionNumber="" /> */}
      {/* About_partners */}
    </NikolasLayout>
  );
};
export default page;
