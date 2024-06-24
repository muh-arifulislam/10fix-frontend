// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import React from "react";

type PropsType = {
  data: Record<string, unknown>[] | null;
  render: React.ElementType;
  pagination?: boolean;
  navigation?: boolean;
  autoPlay?: boolean;
  spaceBetween?: number;
  slidePerView?: number;
};

const Slider = ({
  data,
  render,
  pagination = false,
  navigation = true,
  autoPlay = true,
  spaceBetween = 30,
  slidePerView = 3,
}: PropsType) => {
  return (
    <Swiper
      slidesPerView={slidePerView}
      spaceBetween={spaceBetween}
      loop={true}
      autoplay={
        autoPlay
          ? {
              delay: 2500,
              disableOnInteraction: false,
            }
          : false
      }
      navigation={navigation}
      pagination={
        pagination
          ? {
              dynamicBullets: true,
            }
          : false
      }
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {data?.map((item) => (
        <SwiperSlide key={item._id as string}>
          {React.createElement(render, { data: item })}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
