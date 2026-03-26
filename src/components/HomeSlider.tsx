// components/HomeSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      className="w-full"
    >
      <SwiperSlide>
        <img src="/images/slider1.jpeg" className="w-full" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/slider2.jpeg" className="w-full" />
      </SwiperSlide>
    </Swiper>
  );
}
