import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import EastIcon from "@mui/icons-material/East";

const ServiceSlider = (props) => {
  let sliderArray = props.data;

  return (
    <Fragment>
      <Swiper
        spaceBetween={30}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        // speed={800} // Adjust the speed (in milliseconds) as needed
        effect="slide" // Use "fade" for fade effect
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {sliderArray?.length > 0 &&
          sliderArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="image_wrap">
                  <img src={item.image} alt="" />
                  <div className="content_wrap">
                    <p className="title">{item.title}</p>
                    <div className="icon_wrap">
                      <EastIcon />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Fragment>
  );
};

export default ServiceSlider;
