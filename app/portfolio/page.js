"use client";
import Portfolio from "@/components/Portfolio";
import WorkingProcess from "@/components/WorkingProcess";
import NikolasLayout from "@/layouts/NikolasLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <NikolasLayout>
      {" "}
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="stroke_text">Showcasing </span>
              <span className="underline">My Work: </span>
              <span className="stroke_text">A </span>
              <span className="underline">Portfolio </span>
              <span className="stroke_text">of</span>
              <span className="underline">Success</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* Slider */}
      <div className="nicolas_sm_portfolio_slider swiper-section">
        <div className="slider_in">
          <Swiper
            {...sliderProps.nicolas_sm_portfolio_slider}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                <img src="img/portfolio/Maga.png" alt={1} />
                  {/* <img src="img/slider/1.jpg" alt={1} /> */}
                  <div className="details">
                    <div className="category">
                      <span>MAGA</span>
                    </div>
                    <div className="title">
                      <h3>Shopify Development and Support</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/portfolio/TWN.png" alt={2} />
                  <div className="details">
                    <div className="category">
                      <span>TWN</span>
                    </div>
                    <div className="title">
                      <h3>Shopify Development</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                  <img src="img/portfolio/Homely.png" alt={3} />
                  <div className="details">
                    <div className="category">
                      <span>Homely</span>
                    </div>
                    <div className="title">
                      <h3>Wordpress Development</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                <img src="img/portfolio/LaurusBio.png" alt={4} />
                  <div className="details">
                    <div className="category">
                      <span>Laurus Bio</span>
                    </div>
                    <div className="title">
                      <h3>Wordpress Development</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                <img src="img/portfolio/aliveandwellaustin.png" alt={5} />
                  <div className="details">
                    <div className="category">
                      <span>Alive & Well Austin</span>
                    </div>
                    <div className="title">
                      <h3>Shopify Development</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                <img src="img/portfolio/roasterspack.png" alt={6} />
                  <div className="details">
                    <div className="category">
                      <span>The Roasters Pack</span>
                    </div>
                    <div className="title">
                      <h3>Shopify Development</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                <img src="img/portfolio/dosamigas.png" alt={7} />
                  <div className="details">
                    <div className="category">
                      <span>Dosamigas</span>
                    </div>
                    <div className="title">
                      <h3>Shopify Development</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                <img src="img/portfolio/mutuals.png" alt={8} />
                  <div className="details">
                    <div className="category">
                      <span>Mutuals</span>
                    </div>
                    <div className="title">
                      <h3>Wordpress Development</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="list_inner">
                <img src="img/portfolio/travelearth.png" alt={9} />
                  <div className="details">
                    <div className="category">
                      <span>Travel Earth</span>
                    </div>
                    <div className="title">
                      <h3>UI/UX Design Mockup</h3>
                    </div>
                  </div>
                  <Link
                    className="nicolas_sm_full_link"
                    href=""
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="nicolas_sm_swiper_progress fill">
          <div className="my_pagination_in">
            <span className="pagination_progress">
              <span className="all">
                <span className="all_span" />
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* /Slider */}
      {/* Portfolio */}
      <Portfolio noTitle={true} />
      {/* /Portfolio */}
      {/* Process */}
      <WorkingProcess />
      {/* /Process */}
    </NikolasLayout>
  );
};
export default page;
