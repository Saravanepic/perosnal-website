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
                <span>03 // Currently Working on</span>
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
                    <img src="img/portfolio/maanthan.webp" alt="Maanthan job portal screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Maanthan</span>
                      <h3>
                        Custom SASS Job Portal
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://www.maanthan.com/" target="_blank" aria-label="Visit Maanthan" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/smoor.webp" alt="SMOOR website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        SMOOR - (WIP)
                      </h3>
                    </div>
                    <div className="right">
                    {/* <Link href="https://www.maanthan.com/" target="_blank" aria-label="Visit SMOOR" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </li>

               <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/enough.webp" alt="ENOUGH website screenshot" className="object-cover" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        ENOUGH
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://weareenough.co/" target="_blank" aria-label="Visit ENOUGH" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/IB.webp" alt="Ice Barrel website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        Ice Barrel
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://icebarrel.com/" target="_blank" aria-label="Visit Ice Barrel" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

                 <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/Timba.webp" alt="Timba website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                      Timba
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://bytimba.com/" target="_blank" aria-label="Visit Timba" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/NLT.webp" alt="NLT website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        NLT
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://newlondontech.com/" target="_blank" aria-label="Visit NLT" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              

               {/* <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/ojjsea.webp" alt="Ojjsea website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        Ojjsea - WIP
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://ojjsea.myshopify.com/" target="_blank" aria-label="Visit Ojjsea" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li> */}
              
              

              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/Granny.webp" alt="Granny's Pickles website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                      Granny's Pickles
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://grannyspickles.myshopify.com/" target="_blank" aria-label="Visit Granny's Pickles" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/pupsentials.webp" alt="Pupsentials website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                      Pupsentials 
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://www.pupsentials.com/" target="_blank" aria-label="Visit Pupsentials" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/cd.webp" alt="Cosmos Diamonds website screenshot" />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        Cosmos Diamonds
                      </h3>
                    </div>
                    <div className="right">
                    <Link href="https://cosmos.diamonds/" target="_blank" aria-label="Visit Cosmos Diamonds" rel="noopener noreferrer">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt=""
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
