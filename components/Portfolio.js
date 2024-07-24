import Link from "next/link";
import Marquee from "react-fast-marquee";

const shopifyprojectsData = [
  {
    id: 1,
    name: "Atal The Label",
    tag:"Shopify | Theme Based",
    url:"https://atalthelabel.com",
  },
  {
    id: 2,
    name: "Athletedge",
    tag:"Shopify | Theme Based",
    url:"https://athletedge.in/",
  },
  {
    id: 3,
    name: "The Roasters Pack",
    tag:"Shopify | Custom Quiz App",
    url:"https://theroasterspack.com/",
  },
  {
    id: 4,
    name: "Banogs",
    tag:"Shopify | Custom UI",
    url:"https://bangos.com/",
  },
  {
    id: 5,
    name: "Keika Naturals",
    tag:"Shopify | Custom UI",
    url:"https://keikanaturals.com/",
  },
  {
    id: 7,
    name: "Castle Beds",
    tag:"Shopify | Custom UI",
    url:"https://castlebeds.com/",
  },
  {
    id: 8,
    name: "Cherri Cafe",
    tag:"Shopify | Custom UI",
    url:"https://shop.cherricafe.com/",
  },
  {
    id: 9,
    name: "Charm N Cherish",
    tag:"Shopify | Custom UI",
    url:"https://www.charmncherish.com/",
  },
  {
    id: 10,
    name: "Dosamigas",
    tag:"Shopify | Custom UI",
    url:"https://dosamigas.com/",
  },
  {
    id: 11,
    name: "Sip & Tipple",
    tag:"Shopify | Custom UI",
    url:"https://sipandtipple.com/",
  },
  {
    id: 12,
    name: "VR Labs",
    tag:"Shopify | Custom UI",
    url:"https://www.vrblabs.com/",
  },
  {
    id: 13,
    name: "Lamiglas",
    tag:"Shopify | Custom UI",
    url:"https://www.lamiglas.com/",
  },
  {
    id: 14,
    name: "HFO",
    tag:"Shopify | Custom UI",
    url:"https://www.hempfactoryoutlet.com/",
  },
  {
    id: 15,
    name: "Yuyo Botanics",
    tag:"Shopify | Custom UI",
    url:"https://www.yuyobotanics.com/",
  },
  {
    id: 16,
    name: "djbravo47",
    tag:"Shopify | Theme Based",
    url:"https://www.djb47.com/",
  },
  {
    id: 17,
    name: "Soul Sings",
    tag:"Shopify | Theme Based",
    url:"https://soulslings.com/",
  },
  {
    id: 17,
    name: "Fabpad",
    tag:"Shopify | Theme Based",
    url:"https://fabpad.in/",
  },
  {
    id: 18,
    name: "DADio",
    tag:"Shopify | Theme Based",
    url:"https://dadio.com/",
  },
  {
    id: 19,
    name: "Wildgoose coffee",
    tag:"Shopify | Custom UI",
    url:"https://www.wildgoosecoffee.com/",
  },
  {
    id: 20,
    name: "MAGA",
    tag:"Shopify | Custom UI",
    url:"https://maga.com/",
  },
  {
    id: 21,
    name: "Louloucup",
    tag:"Shopify | Custom UI",
    url:"https://louloucup.com/",
  },
  {
    id: 22,
    name: "MIRESI",
    tag:"Shopify | Theme Based",
    url:"https://miresi.in/",
  },
  {
    id: 23,
    name: "ARTMATT",
    tag:"Shopify | Theme Based",
    url:"https://theartmatt.com/",
  },
  {
    id: 24,
    name: "Anarchy Label",
    tag:"Shopify | Theme Based",
    url:"https://www.anarchylabel.com/",
  },
  {
    id: 25,
    name: "TOH",
    tag:"Shopify | Custom UI",
    url:"https://theorbyhouse.com/",
  },
  {
    id: 26,
    name: "TOH",
    tag:"Shopify | Custom UI",
    url:"https://antennassnow.myshopify.com",
  },
  {
    id: 27,
    name: "Poplarforest Nursery",
    tag:"Shopify | Custom UI",
    url:"https://poplarforestnursery.myshopify.com/",
  },


  
];
const wordpressprojectsData = [
  {
    id: 1,
    name: "315 Work Avenue",
    tag:"Wordpress | Custom Ui | Builders",
    url:"https://315workavenue.com/",
  },
  {
    id: 2,
    name: "Homely",
    tag:"Wordpress | Custom Ui | Builders",
    url:"https://orderhomely.in/",
  },
  {
    id: 3,
    name: "Laurus Bio",
    tag:"Wordpress | Custom Ui | Builders",
    url:"https://laurus.bio/",
  },
  {
    id: 4,
    name: "Brandenburg",
    tag:"Wordpress | Custom Developemnt",
    url:"https://b-one.com/",
  },
  {
    id: 5,
    name: "ACEXMEDIA",
    tag:"Wordpress | Builders",
    url:"https://acexmedia.com/",
  },
  {
    id: 6,
    name: "PHLUSH",
    tag:"Wordpress | Builders",
    url:"https://www.phlush.org/",
  },
  {
    id: 7,
    name: "Rem Capital",
    tag:"Wordpress | Custom Developemnt",
    url:"https://remcapital.com/",
  },
  {
    id: 8,
    name: "Holdfolio",
    tag:"Wordpress | Custom Developemnt",
    url:"https://holdfolio.com/",
  },
  {
    id: 9,
    name: "GHS",
    tag:"Wordpress | Custom Developemnt",
    url:"https://grouphealthsolutions.com/",
  },
  {
    id: 10,
    name: "JMR Sporting",
    tag:"Wordpress | Custom Developemnt | Support Works",
    url:"https://jmrsporting.com/",
  },
  {
    id: 11,
    name: "JMR Sporting",
    tag:"Wordpress | Custom Developemnt | Support Works",
    url:"https://jmrinfotech.com/",
  },
  {
    id: 12,
    name: "JMR Sporting",
    tag:"Wordpress | Woo Commerce",
    url:"https://krakensports.ca/",
  },
  {
    id: 13,
    name: "Brilliant Prep",
    tag:"Wordpress ",
    url:"https://brilliantprep.com/",
  },
  {
    id: 14,
    name: "ZR-DKA",
    tag:"Wordpress | Support ",
    url:"https://zr-dka.com/",
  },

]
const otherprojectsData = [
  {
    id: 0,
    name: "Travel Earth",
    tag:"FIGMA Design | Development Mentorship",
    url:"https://travel.earth/",
  },
  {
    id: 0,
    name: "Beyond Food Bars",
    tag:"Dukaan | Support",
    url:"https://beyondfoodbars.com/",
  },
  {
    id: 1,
    name: "Ranadey",
    tag:"Angular | Collobaration",
    url:"https://ranadey.com/",
  },
  {
    id: 2,
    name: "Upstreet",
    tag:"HTML",
    url:"https://upstreet.in/",
  },
  {
    id: 3,
    name: "GS Canna",
    tag:"HTML",
    url:"https://gscanna.com/",
  },
  {
    id: 4,
    name: "EME",
    tag:"Shopify | Support Works",
    url:"https://espresso-experts.com/",
  },
  {
    id: 5,
    name: "Hafsaad",
    tag:"Shopify | Support Works",
    url:"https://hafsaad.com/",
  },
  {
    id: 6,
    name: "I Support LGBT",
    tag:"Shopify | Support Works",
    url:"https://isupportlgbt.org/",
  },
  {
    id: 7,
    name: "Luminesy",
    tag:"Shopify | Support Works",
    url:"https://luminesy.com/",
  },
  {
    id: 8,
    name: "Goldengate Beds",
    tag:"Shopify | Support Works",
    url:"https://goldengatebeds.com/",
  },
  {
    id: 9,
    name: "Soulslings Singapore",
    tag:"Shopify | Support Works",
    url:"https://soulslingssg.com/",
  },
  {
    id: 10,
    name: "Brasini Swimwear",
    tag:"Shopify | Support Works",
    url:"https://brasiniswimwear.com/",
  },
  {
    id: 11,
    name: "Hype Flags",
    tag:"Shopify | Support Works",
    url:"https://hypeflags.com/",
  },
  {
    id: 12,
    name: "Cynthia Desser",
    tag:"Shopify | Support Works",
    url:"https://cynthiadesser.com/",
  },
]



const Portfolio = ({ noTitle = false }) => {
  return (
    <div className="nicolas_sm_section" id="portfolio">
      <div className="nicolas_sm_portfolio">
        <div className="nicolas_sm_extra_title">
          {!noTitle && (
            <div className="container">
              <div className="projects">
                <span>04 // let me show you</span>
                <Link href="portfolio">(( project all ))</Link>
              </div>
            </div>
          )}
          <Marquee className="title marquee">
            <div className="wrap">
              <div>
                <h3>Recent</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Recent</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Recent</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
              <div>
                <h3>Recent</h3>
              </div>
              <div>
                <h3 className="stroke_text_bolder">Work</h3>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="container">
          <div className="portfolio_in portfolio_custom">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/1.jpg" alt={1} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                          Alive & Well
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="https://aliveandwellaustin.shop/" target="_blank">
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
                    <img src="img/portfolio/2.jpg" alt={2} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        Seavoir
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="https://seavoir.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={2}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="list_inner">
                  <div className="image">
                    <img src="img/portfolio/3.jpg" alt={3} />
                  </div>
                  <div className="title_holder">
                    <div className="left">
                      <span className="tag">Shopify Website</span>
                      <h3>
                        River Tree Skylights
                      </h3>
                    </div>
                    <div className="right">
                      <Link href="https://rivertreeskylights.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={2}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

             
            </ul>
          </div>

          <div className="shopify_projects">
            <h2>Shopify <span className="underline">Projects</span></h2>
           
            <ul className="shopify_projects_wrapper">
            {shopifyprojectsData.map((item) =>(
                <li key={item.id}>
                  <div className="project_name">{item.name}</div>
                    <div className="project_type">
                      <span className="tag">{item.tag}</span>
                    </div>
                    <div className="project_link">
                      <Link href={item.url} target="_blank">
                            <img
                              className="sm_svg"
                              src="img/svg/down_arrow.svg"
                              alt={item.name}
                            />
                      </Link>
                    </div>
                  
                </li>
              )    
            )}
              {/* <li>
                <div className="project_name">Atal The Label</div>
                <div className="project_type">
                  <span className="tag">Shopify Website</span>
                </div>
                <div className="project_link">
                  <Link href="https://atalthelabel.com/" target="_blank">
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                  </Link>
                </div>
              </li> */}

              
            </ul>
          </div>

          <div className="shopify_projects">
            <h2>Wordpress <span className="underline">Projects</span></h2>
           
            <ul className="shopify_projects_wrapper">
            {wordpressprojectsData.map((item) =>(
                <li key={item.id}>
                  <div className="project_name">{item.name}</div>
                    <div className="project_type">
                      <span className="tag">{item.tag}</span>
                    </div>
                    <div className="project_link">
                      <Link href={item.url} target="_blank">
                            <img
                              className="sm_svg"
                              src="img/svg/down_arrow.svg"
                              alt={item.name}
                            />
                      </Link>
                    </div>
                  
                </li>
              )    
            )}
            </ul>
          </div>

          <div className="shopify_projects">
            <h2>Support <span className="underline">Projects</span></h2>
           
            <ul className="shopify_projects_wrapper">
            {otherprojectsData.map((item) =>(
                <li key={item.id}>
                  <div className="project_name">{item.name}</div>
                    <div className="project_type">
                      <span className="tag">{item.tag}</span>
                    </div>
                    <div className="project_link">
                      <Link href={item.url} target="_blank">
                            <img
                              className="sm_svg"
                              src="img/svg/down_arrow.svg"
                              alt={item.name}
                            />
                      </Link>
                    </div>
                  
                </li>
              )    
            )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
