import ContactForm from "@/components/ContactForm";

const Footer = () => {
  return (
    <div className="nicolas_sm_section" id="contact">
      <div className="nicolas_sm_footer">
        <div className="container">
          <div className="extra_container">
            <div className="footer_in">
              <div className="left">
                <div className="title">
                  <h3>
                    <span>
                      Feel free to reach out to me. I'm always open to discuss
                      new projects
                    </span>
                  </h3>
                </div>
                <div className="contact">
                  <ul>
                    <li>
                      <div>
                        <span>Stay up to date</span>
                      </div>
                      <a href="tel:+919494962048">+91 9494962048</a>
                      <a href="mailto:saravan1996.krishna@gmail.com">saravan1996.krishna@gmail.com</a>
                    </li>
                    {/* <li>
                      <div>
                        <span>Address</span>
                      </div>
                      <p>223 Thatcher Road St, Brooklyn,</p>
                      <p>Manhattan, NY 10463</p>
                    </li> */}
                  </ul>
                </div>
                <div className="social_button">
                  <ul>
                    {/* <li>
                      <a href="#">
                        <span>Facebook</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.linkedin.com/in/saravana-krishna-4a6851171/" target="_blank">
                        <span>Linkedin</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <span>Behance</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Dribbble</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              {/* <div className="right">
                <ContactForm />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
