import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <div className="banner mw">
      <Swiper 
      navigation={true}
      pagination={true} 
      modules={[Pagination, Navigation]} 
      className="__inner">
        <SwiperSlide>
          <div style={{backgroundImage: "url(/img/Img_bg1.jpg)"}}>
            <p>Event</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: "url(/img/Img_bg2.jpg)"}}>
            <p>Event</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: "url(/img/Img_bg3.jpg)"}}>
            <p>Event</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
