// React Swiper
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import your gallery CSS
import "../Styles/gallery.css";

function Gallery() {
  useEffect(() => {
    const galleryText = document.querySelector(".gallery-text");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (galleryText) observer.observe(galleryText);

    return () => {
      if (galleryText) observer.unobserve(galleryText);
    };
  }, []);

  return (
    <section className="swiper-section" id="gallery">
      <div className="container">
        {/* Animated Text */}
        <div className="gallery-text">
          <h1 className="heading">My Gallery</h1>
          <div className="title-divider"></div>
          <p className="subheading">
            Capturing our beautiful moments together.
          </p>
        </div>

        {/* Swiper */}
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
          <SwiperSlide><img src="/images/2.jpg" alt="slide 1" /></SwiperSlide>
          <SwiperSlide><img src="/images/3.jpg" alt="slide 2" /></SwiperSlide>
          <SwiperSlide><img src="/images/4.jpg" alt="slide 3" /></SwiperSlide>
          <SwiperSlide><img src="/images/5.jpg" alt="slide 4" /></SwiperSlide>
          <SwiperSlide><img src="/images/capture.jpg" alt="slide 5" /></SwiperSlide>
          <SwiperSlide><img src="/images/3.jpg" alt="slide 6" /></SwiperSlide>
          <SwiperSlide><img src="/images/4.jpg" alt="slide 7" /></SwiperSlide>

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
    </section>
  );
}

export default Gallery;
