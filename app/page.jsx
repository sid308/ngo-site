"use client"
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import banner1 from '@/public/banner-1.jpg'
import banner2 from '@/public/banner-2.jpg'
import banner3 from '@/public/banner-3.jpg'

export default function Home() {
  return (
    <div className="pt-48">
      <div className="w-full mx-auto">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className='aspect-video'>
              <Image src={banner1} alt="banner1"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='aspect-video'>
              <Image src={banner2} alt="banner2"/>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div className='aspect-video'>
              <Image src={banner3} alt="banner3"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
