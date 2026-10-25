import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);
export const sliderProps = {
  testimonial: {
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  nicolas_sm_portfolio_slider: {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".my_next",
      prevEl: ".my_prev",
    },

    pagination: {
      el: ".nicolas_sm_swiper_progress",
      type: "custom", // progressbar
      renderCustom: function (swiper, current, total) {
        // progress animation
        var scale, translateX;
        var progressDOM = document.querySelector(".nicolas_sm_swiper_progress");
        if (progressDOM && progressDOM.classList.contains("fill")) {
          translateX = "0px";
          scale = parseInt((current / total) * 100) / 100;
        } else {
          scale = parseInt((1 / total) * 100) / 100;
          translateX =
            ((current - 1) * parseInt((100 / total) * 100)) / 100 + "px";
        }

        // Swiper replaces the pagination element's innerHTML with this return value
        return `<div class="my_pagination_in"><span class="pagination_progress"><span class="all"><span class="all_span" style="transform: translate3d(${translateX},0px,0px) scaleX(${scale}) scaleY(1)"></span></span></span></div>`;
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  },
  blogHeroSlider: {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    dots: false,
  },
};
