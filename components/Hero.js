import CopyEmail from "@/components/CopyEmail";

const Hero = () => {
  return (
    <div className="nicolas_sm_section" id="home">
      <div className="nicolas_sm_hero">
        <div className="container">
          <div className="hero_text">
            <div className="left">
              <h3 className="stroke_text">Hi there! 👋</h3>
              <h1>
                <span className="inline_text">
                  {/* Saravan Krishna */}
                  I'm Saravan
                  <span className="arrow">
                    <div className="wings">
                      <div className="wing">
                        <span className="up" />
                      </div>
                      <div className="wing">
                        <span className="down" />
                      </div>
                    </div>
                  </span>
                </span>
              </h1>
            </div>
            <div className="right">
              <h3>
                <span className="inline_text">Shopify &amp; Web<br/>developer</span>
              </h3>
              <h3 className="stroke_text">Based in Bangalore</h3>
            </div>
          </div>
          <div className="hero_scroll_title">
            <span>
              01 // 05 - scroll{" "}
              <img
                className="sm_svg bounce"
                src="img/svg/down_arrow.svg"
                alt=""
              />
            </span>
          </div>
          <div className="overlay_el">
            <div className="overlay_bg" />
            <div className="overlay_content">
              <div className="hero_info_area">
                <div className="left">
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>About me</h3>
                    <p>
                      I'm a <b>Shopify specialist and freelance web developer</b> with 8+ years of experience.
                      I build fast, conversion-focused stores and websites for agencies and brands, bridging design and code.
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>What I do</h3>
                    <p>
                    <b>Shopify stores that look great and sell.</b>
                    <br/>Custom Shopify themes / Shopify CRO / Shopify apps &amp; integrations, plus WordPress, WooCommerce and React / Next.js builds.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <span>
                    <img src="img/hero/Hero.webp" alt="Saravan, freelance Shopify and web developer" fetchPriority="high" />
                  </span>
                </div>
                <div className="right">
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>Contact me</h3>
                    <p>
                      Email <CopyEmail />
                      <br /><br />
                      Phone Number<br/> <a href="https://wa.me/919494962048?text=Hello, I am reaching out for some work to be done" target="_blank" rel="noopener noreferrer">+91 94949 62048</a>
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>Find Me</h3>
                    <ul className="social">
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/facebook.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/twitter.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/instagram.svg"
                            alt=""
                          />
                        </a>
                      </li> */}
                      <li>
                        <a href="https://www.linkedin.com/in/saravana-krishna/">
                          <img
                            className="sm_svg"
                            src="img/svg/linkedin.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/behance.svg"
                            alt=""
                          />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
