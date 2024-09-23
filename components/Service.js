import Link from "next/link";

const Service = ({ title = "My services", sectionNumber = "03" }) => {
  return (
    <div className="nicolas_sm_section" id="service">
      <div className="nicolas_sm_service">
        <div className="container">
          <div className="service_in">
            <div className="nicolas_sm_main_title">
              <div className="left">
                <span>
                  {sectionNumber} // {title}
                </span>
              </div>
              <div className="center">
                <p>
                Building Loyal Audiences through User-Centric Design and Uncompromising Excellence
                </p>
              </div>
              <div className="right">
                <Link href="service">(( All Services ))</Link>
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
                        <Link
                          className="nicolas_sm_full_link"
                          href=""
                        />
                        <img
                          className="interactive_image"
                          src="img/portfolio/1.jpg"
                          alt={1}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">II</span>
                        <h3 className="title">Wordpress Website Development</h3>
                        <Link
                          className="nicolas_sm_full_link"
                          href=""
                        />
                        <img
                          className="interactive_image"
                          src="img/portfolio/2.jpg"
                          alt={1}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">III</span>
                        <h3 className="title">Website Development (via builders)</h3>
                        <Link
                          className="nicolas_sm_full_link"
                          href=""
                        />
                        <img
                          className="interactive_image"
                          src="img/portfolio/3.jpg"
                          alt={1}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">IV</span>
                        <h3 className="title">Front End (Design to HTML)</h3>
                        <Link
                          className="nicolas_sm_full_link"
                          href=""
                        />
                        <img
                          className="interactive_image"
                          src="img/portfolio/4.jpg"
                          alt={1}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <span className="number">V</span>
                        <h3 className="title">Custom App / JS Solutions</h3>
                        <Link
                          className="nicolas_sm_full_link"
                          href=""
                        />
                        <img
                          className="interactive_image"
                          src="img/portfolio/5.jpg"
                          alt={1}
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
