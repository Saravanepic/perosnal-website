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
                I’m a bay-area born developer
                based in Bangalore. I’m currently working as a Freelance Web Developer with agencies and companie's, creating connected brands, product commerce, and engaging web experiences.
              </p>
            </div>
            <div className="right">
              <div className="scroll anchor">
                <a href={`#${nextSection}`} />
                <img className="sm_svg" src="img/svg/down_arrow.svg" alt={2} />
              </div>
            </div>
          </div>
          <div className="extra_container">
            <div className="biography">
              <ul>
                <li>
                  <div className="list_inner">
                    <span>Born in</span>
                    <h3>Vizag, India</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Experience</span>
                    <h3>5.5 years experience</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Date of birth</span>
                    <h3>25 March, 1997</h3>
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
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>100+ success projects</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>50+ happy clients</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>50+ Ecommerce sites delivered</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>3+ custom stack projects</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default About;
