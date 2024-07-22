import Link from "next/link";

const Pricing = () => {
  return (
    <div className="nicolas_sm_section">
      <div className="nicolas_sm_pricing">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>06 // Pricing plan</span>
            </div>
            <div className="center">
              <p>
              Package includes 2 weeks of post-launch support to address any issues and ensure smooth operation. Additional pages can be added for an extra cost, and clients are expected to provide the content and images for the website. Upon consultation, a detailed project timeline will be provided to outline the development process and ensure timely delivery.
              </p>
            </div>
            <div className="right">
              <Link href="service">(( Service all ))</Link>
            </div>
          </div>
          <div className="extra_container">
            <div className="pricing_in">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="info_box">
                      <div className="info">
                        <h3 className="plan">Shopify Website</h3>
                        <h3 className="price">
                          $1000<span>/ website</span>
                        </h3>
                      </div>
                      <div className="features">
                        <ul>
                        <li>
                            <span />
                            <p>Pages Included: 5 to 7</p>
                          </li>
                          <li>
                            <span />
                            <p>1 - 2 Weeks Delivery</p>
                          </li>
                          <li>
                            <span />
                            <p>Custom Shopify theme setup</p>
                          </li>
                          <li>
                            <span />
                            <p>Mobile-responsive design</p>
                          </li>
                          <li>
                            <span />
                            <p>Basic SEO optimization</p>
                          </li>
                          <li>
                            <span />
                            <p>Integration with essential apps</p>
                          </li>
                          <li>
                            <span />
                            <p>Blog setup</p>
                          </li>
                          <li>
                            <span />
                            <p>Additional Templtes - 100$ / template</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <span>Start My Project Now</span>
                      <span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </span>
                      <a className="nicolas_sm_full_link" href="mailto:saravan1996.krishna@gmail.com?subject=Looking to build a Shopify Website" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="info_box">
                      <div className="info">
                        <h3 className="plan">WordPress Website</h3>
                        <h3 className="price">
                          $750<span>/ website</span>
                        </h3>
                      </div>
                      <div className="features">
                        <ul>
                          <li>
                            <span />
                            <p>Pages Included: 5</p>
                          </li>
                          <li>
                            <span />
                            <p>1 - 2 Weeks Delivery</p>
                          </li>
                          <li>
                            <span />
                            <p>WordPress theme setup</p>
                          </li>
                          <li>
                            <span />
                            <p>Mobile-responsive design</p>
                          </li>
                          <li>
                            <span />
                            <p>Basic SEO optimization</p>
                          </li>
                          <li>
                            <span />
                            <p>Installation of necessary plugins</p>
                          </li>
                          <li>
                            <span />
                            <p>Contact form integration</p>
                          </li>
                          <li>
                            <span />
                            <p>Blog setup</p>
                          </li>
                          <li>
                            <span />
                            <p>Additional Templtes - 100$ / template</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <span>Start My Project Now</span>
                      <span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </span>
                      <a className="nicolas_sm_full_link" href="mailto:saravan1996.krishna@gmail.com?subject=Looking to build a Wordpress Website" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="info_box">
                      <div className="info">
                        <h3 className="plan">Custom Development</h3>
                        <h3 className="price">
                          $25 - $30<span>/ hour</span>
                        </h3>
                      </div>
                      <div className="features">
                        <ul>
                          <li>
                            <span />
                            <p>Tailored solutions based on specific requirements</p>
                          </li>
                          <li>
                            <span />
                            <p>Custom plugin or app development</p>
                          </li>
                          <li>
                            <span />
                            <p>Third-party API integration</p>
                          </li>
                          <li>
                            <span />
                            <p>Performance optimization</p>
                          </li>
                          <li>
                            <span />
                            <p>Regular updates and maintenance</p>
                          </li>
                          <li>
                            <span />
                            <p>Technical support and troubleshooting</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="button">
                      <span>Start My Project Now</span>
                      <span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </span>
                      <a className="nicolas_sm_full_link" href="mailto:saravan1996.krishna@gmail.com?subject=Need help with custom development" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
