import Marquee from "react-fast-marquee";

const About = ({
  sectionTitle = "02 // Discover More About Me",
  nextSection = "service",
}) => {
  return (
    <div className="nicolas_sm_section" id="about">
      <div className="nicolas_sm_about">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>{sectionTitle}</span>
            </div>
            <div className="center">
              <p>
                Vizag roots, Bangalore hustle. For 8+ years I&apos;ve helped agencies and brands ship fast, high-converting Shopify stores and websites—through clean code and creative problem-solving.
              </p>
            </div>
            <div className="right">
              <div className="scroll anchor">
                <a href={`#${nextSection}`} aria-label="Scroll to next section" />
                <img className="sm_svg" src="img/svg/down_arrow.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="extra_container">
            <div className="biography">
              <ul>
                <li>
                  <div className="list_inner">
                    <span>Location</span>
                    <h3>Based in Bangalore | From Vizag</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Experience</span>
                    <h3>8+ years experience</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Tech Journey</span>
                    <h3>Coding since 2017</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Language</span>
                    <h3>English</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nicolas_sm_round">
          <Marquee className="marquee">
            <div className="wrap">
              <div>
                <img src="img/about/star.png" alt="" />
              </div>
              <div>
                <h3>100+ success projects</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt="" />
              </div>
              <div>
                <h3>50+ happy clients</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt="" />
              </div>
              <div>
                <h3>100+ Ecommerce sites delivered</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt="" />
              </div>
              <div>
                <h3>3+ custom stack projects</h3>
              </div>
              
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default About;
