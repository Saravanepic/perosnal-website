import Link from "next/link";

const Service = ({ title = "My services", sectionNumber = "03", servicePage = false }) => {
  return (
    <div className="nicolas_sm_section" id="service">
      <div className={`nicolas_sm_service${servicePage ? " servicepage" : ""}`}>
        <div className="container">
          <div className="service_in">
            <div className="nicolas_sm_main_title">
              <div className="left">
                <span>
                  {sectionNumber} // {title}
                </span>
              </div>
              <div className="center">
                {/* <p>
                Building Loyal Audiences through User-Centric Design and Uncompromising Excellence
                </p> */}
                <p>
                  Crafting Digital Experiences That Build Loyal Audiences—Where User-Centric Design Meets Uncompromising Performance.
                </p>
              </div>
              <div className="right">
                {!servicePage && <Link href="/service">(( All Services ))</Link>}
              </div>
            </div>
            <div className="extra_container">
              <div className="nicolas_sm_interactive_list">
                <div className="interactive_list_inner">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <span className="number">I</span>
                        <h3 className="title"> Shopify Website Development</h3>
                        <img
                          className="interactive_image"
                          src="img/portfolio/1.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">II</span>
                        <h3 className="title">Wordpress Website Development</h3>
                        <img
                          className="interactive_image"
                          src="img/portfolio/2.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">III</span>
                        <h3 className="title">Website Development (via builders)</h3>
                        <img
                          className="interactive_image"
                          src="img/portfolio/3.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">IV</span>
                        <h3 className="title">Front End (Design to HTML)</h3>
                        <img
                          className="interactive_image"
                          src="img/portfolio/4.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">V</span>
                        <h3 className="title">Custom App / JS Solutions</h3>
                        <img
                          className="interactive_image"
                          src="img/portfolio/5.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                  </ul>
                  <div className="movingbox">
                    <div className="space" />
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
export default Service;
