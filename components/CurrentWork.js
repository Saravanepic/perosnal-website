import Link from "next/link";
import Marquee from "react-fast-marquee";

const CurrentWork = ({ noTitle = false }) => {
  return (
    <div className="nicolas_sm_section" id="portfolio">
      <div className="nicolas_sm_portfolio">
        <div className="nicolas_sm_extra_title">
          {!noTitle && (
            <div className="container">
              <div className="projects">
                <span>04 // Currently Working on</span>
                <Link href="portfolio">(( project all ))</Link>
              </div>
            </div>
          )}
          <Marquee className="title marquee">
            <div className="wrap">
              <div>
                <h3>Current</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work's</h3>
              </div>
              <div>
                <h3>Current</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work's</h3>
              </div>
              <div>
                <h3>Current</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work's</h3>
              </div>
              <div>
                <h3>Current</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work's</h3>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="container">
          <div className="portfolio_in">
            <ul>
              
               <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/IB.png" alt={4} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        Ice Barrel
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://icebarrel.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/Granny.png" alt={4} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                      Granny's Pickles
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://grannyspickles.myshopify.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/pupsentials.png" alt={4} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                      Pupsentials - WIP 
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://www.pupsentials.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/TWN.png" alt={1} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                    <span className="tag">Shopify Website</span>
                      <h3>
                          TWN
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="https://twn-shop-store.myshopify.com/">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              
             

              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/EG.png" alt={5} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                          Enter Gallery
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://entergallery.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

               <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/Timba.png" alt={4} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                      Timba
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://bytimba.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

             
           
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWork;
