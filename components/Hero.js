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
                <span className="inline_text">Freelance WEB<br/>developer</span>
              </h3>
              <h3 className="stroke_text">Based in Bangalore</h3>
            </div>
          </div>
          <div className="hero_scroll_title">
            <span>
              01 // 06 - scroll{" "}
              <img
                className="sm_svg bounce"
                src="img/svg/down_arrow.svg"
                alt={1}
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
                      {/* Hello, my name’s <b>Saravan</b>,  */}
                      I'm a versatile <b>Dynamic and Creative Freelance web developer</b> blending clean code with creative solutions.
                       I love bridging gaps between design and functionality. Let’s build something fluid, scalable, and user-obsessed.
                    </p>
                  </div>
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>What i do</h3>
                    <p>
                    <b>Transforming Ideas into Stunning Web Experience.</b> 
                    <br/>Website Development / Shopify / Wordpress / Woocommerce / Dukaan / React and Next JS / Website Consulatation etc.........
                    </p>
                  </div>
                </div>
                <div className="center">
                  <span>
                    <img src="img/hero/Hero.png" alt="Saravan Pic" loading="lazy"/>
                  </span>
                </div>
                <div className="right">
                  <div className="info_list">
                    <img src="img/hero/shape.png" alt="shape" />
                    <h3>Contact me</h3>
                    <p>
                      Email <a href="mailto:saravan1996.krishna@gmail.com">saravan1996.krishna@gmail.com</a>
                      <br /><br />
                      Phone Number<br/> <a href="tel:+919494962048">9494962048</a>
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
                            alt={1}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/twitter.svg"
                            alt={2}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/instagram.svg"
                            alt={3}
                          />
                        </a>
                      </li> */}
                      <li>
                        <a href="https://www.linkedin.com/in/saravana-krishna-4a6851171/">
                          <img
                            className="sm_svg"
                            src="img/svg/linkedin.svg"
                            alt={4}
                          />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <img
                            className="sm_svg"
                            src="img/svg/behance.svg"
                            alt={5}
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
