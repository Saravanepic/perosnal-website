import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { Copyright2 } from "@/layouts/Copyright";
import NikolasLayout from "@/layouts/NikolasLayout";
const page = () => {
  return (
    <NikolasLayout noFooter>
      <div className="nicolas_sm_contact">
        <div className="nicolas_sm_page_title">
          <div className="container">
            <div className="nicolas_sm_breadcrumbs">
              <span>
                <a href="#">Home</a>
              </span>
              <span>Contact me</span>
            </div>
            <div className="page_title_in">
              <h3>Explore top suites tailored for you.</h3>
            </div>
          </div>
        </div>
        <div className="nicolas_sm_footer">
          <div className="container">
            <div className="extra_container">
              <div className="footer_in">
                <div className="arrow_button anchor">
                  <a href="#question">
                    <img
                      className="sm_svg"
                      src="img/svg/down_arrow.svg"
                      alt={1}
                    />
                  </a>
                </div>
                <div className="left">
                  <div className="title">
                    <h3>Contact information</h3>
                  </div>
                  <div className="contact">
                    <ul>
                      <li>
                        <span>Stay up to date</span>
                        <a href="#">+91 9494962048</a>
                        <a href="#">saravan1996.krishna@gmail.com</a>
                      </li>
                      <li>
                        <span>Address</span>
                        <p>Bangalore, KA, India</p>
                      </li>
                    </ul>
                  </div>
                  <div className="social_button">
                    <ul>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/saravana-krishna-4a6851171/" target="_blank">Linkedin</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="maps">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width={1920}
                height={603}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Brooklyn,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
              <a href="https://embedgooglemap.net/124/">123movies</a>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{text-align:right;height:603px;width:100%;}",
                }}
              />
              <a href="https://www.embedgooglemap.net" />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".gmap_canvas {overflow:hidden;background:none!important;height:603px;width:1920px;}",
                }}
              />
            </div>
          </div>
        </div> */}
        <div className="nicolas_sm_question" id="question">
          <div className="container">
            <div className="extra_container">
              <div className="question_in">
                <div className="main_title">
                  <h3>Have any questions?</h3>
                </div>
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright2 />
    </NikolasLayout>
  );
};
export default page;
