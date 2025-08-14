// React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules (✅ only import from "swiper/modules")
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import your gallery CSS (correct path)
import "../Styles/gallery.css";

function Gallery() {
  return (
    <div className="container">
      <h1 className="heading">My Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* Update image paths once you add them in /public/images or /src/Styles/images */}
        <SwiperSlide><img src="/images/img_1.jpg" alt="slide 1" /></SwiperSlide>
        <SwiperSlide><img src="/images/img_2.jpg" alt="slide 2" /></SwiperSlide>
        <SwiperSlide><img src="/images/img_3.jpg" alt="slide 3" /></SwiperSlide>
        <SwiperSlide><img src="/images/img_4.jpg" alt="slide 4" /></SwiperSlide>
        <SwiperSlide><img src="/images/img_5.jpg" alt="slide 5" /></SwiperSlide>
        <SwiperSlide><img src="/images/img_6.jpg" alt="slide 6" /></SwiperSlide>
        <SwiperSlide><img src="/images/img_7.jpg" alt="slide 7" /></SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Gallery;
