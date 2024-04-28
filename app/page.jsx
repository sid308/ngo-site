"use client"
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import banner1 from '@/public/banner-1.jpg'
import banner2 from '@/public/banner-2.jpg'
import banner3 from '@/public/banner-3.jpg'
import ProgressBar from "@ramonak/react-progress-bar";
import kid_play from '@/public/kid_playing.jpg'
import kid_learn from '@/public/kid_learning.jpg'
import Marquee from "react-fast-marquee";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaRegHandshake } from "react-icons/fa";



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
              <Image src={banner1} alt="banner1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='aspect-video'>
              <Image src={banner2} alt="banner2" />
            </div>
          </SwiperSlide> <SwiperSlide>
            <div className='aspect-video'>
              <Image src={banner3} alt="banner3" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full mx-auto bg-gray-100">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={false}
          // pagination={{
          //   clickable: false,
          // }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="flex items-center md:px-20 my-6 ">
              <div className="w-[30%] mx-auto bg-[#4ABB47] text-6xl text-center font-serif font-bold py-20 text-white px-4">Medical Assistance</div>
              <div className="w-[70%] mx-auto bg-[#424242] px-10 py-20">
                <div className="flex justify-between items-center text-4xl font-medium font-serif text-white  ">
                  <p>$10,50,00.00</p>
                  <p>7.5%</p>
                </div>
                <div className="py-4 px-4">
                  <ProgressBar completed="7.5"></ProgressBar>
                </div>
                <div className="flex justify-between items-center text-xl font-thin font-serif text-white  ">
                  <p>of $100,00,00.00</p>
                  <p>Read More</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center md:px-20 my-6 ">
              <div className="w-[30%] mx-auto bg-[#4ABB47] text-6xl text-center font-serif font-bold py-20 text-white">Women Safety</div>
              <div className="w-[70%] mx-auto bg-[#424242] px-10 py-20">
                <div className="flex justify-between items-center text-4xl font-medium font-serif text-white  ">
                  <p>$10,50,00.00</p>
                  <p>7.5%</p>
                </div>
                <div className="py-4 px-4">
                  <ProgressBar completed="7.5"></ProgressBar>
                </div>
                <div className="flex justify-between items-center text-xl font-thin font-serif text-white  ">
                  <p>of $100,00,00.00</p>
                  <p>Read More</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center md:px-20 my-6 ">
              <div className="w-[30%] mx-auto bg-[#4ABB47] text-6xl text-center font-serif font-bold py-20 text-white">No Belly Left Empty</div>
              <div className="w-[70%] mx-auto bg-[#424242] px-10 py-20">
                <div className="flex justify-between items-center text-4xl font-medium font-serif text-white  ">
                  <p>$10,50,00.00</p>
                  <p>7.5%</p>
                </div>
                <div className="py-4 px-4">
                  <ProgressBar completed="7.5"></ProgressBar>
                </div>
                <div className="flex justify-between items-center text-xl font-thin font-serif text-white  ">
                  <p>of $100,00,00.00</p>
                  <p>Read More</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center px-72 py-20">
        <div className="w-[400px] mx-auto flex items-center justify-end">
          <Image src={kid_play} width={400} className="" />
        </div>
        <div className="shadow-2xl drop-shadow-2xl p-10 mx-auto w-[400px]  flex flex-col items-center justify-start">
          <p className="font-serif text-3xl font-medium">Best NGO for CSR in India:  Foundation</p>
          <p className="text-justify pt-10">We are the best NGO in Delhi NCR and best ngo website India. We endeavor for holistic growth of the Nation and its people. We are the best Social Organization in Delhi NCR, India. Support by Donate to NGO or Donate to Poor. We Mainly focused on poverty in India, Child Development, Women Empowerment, Skill Development, Education for poor & Street Children, Health programs, Environment protection, Consumer awareness, Elderly care, Rural development programs, Slum development, Donate for Livelihood, etc. Donate to India’s best NGO and support development. At , we believe that each and every person is entitled to a worthy, meaningful, and dignified life just as mentioned under Article 21 (Right to life and personal liberty) of the Indian constitution.</p>
        </div>
      </div>
      <div className="bg-[#f2f0ec] py-20">
        <p className="text-6xl font-serif font-semibold text-[#424242] text-center">Make the World Better</p>
        <p className="text-center text-purple-800 font-medium text-sm py-4">HELP US NOW</p>
        <div className="grid grid-cols-4 font-serif font-semibold text-gray-700 place-items-center place-content-around gap-8 px-52 text-center pt-10">
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
          <div className="flex items-center justify-center text-4xl bg-white py-32 hover:bg-red-600 hover:bg-opacity-25">Donate at *Dummy Data*</div>
        </div>
        <div className="flex items-center justify-center px-52 pt-10 gap-x-8">
          <p className="font-serif text-4xl w-[40%] mx-auto text-[#424242]">See how you can make a difference in families lives with just <span className="text-[#4ABB47] ">Rs 5000 a month</span></p>
          <p className="w-[60%] mx-auto text-justify font-sans font-medium text-gray-500 leading-8">As the top 10 NGO and the best NGO in Delhi NCR India, we encourage everyone to join us in our efforts to make a difference. We invite you to donate to our cause, regardless of how small the amount may be. Your contribution will help us in supporting underprivileged children and bringing them a better future.</p>
        </div>

      </div>
      <div className="py-20">
        <p className="text-6xl font-serif font-semibold text-[#424242] text-center">Our Donors</p>
        <div className='smooth-scroll w-[80%] pt-0 md:pt-5 m-auto flex flex-row justify-between'>
          <Marquee style={{ overflow: 'hidden' }} className="py-10">
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>
            <div className='p-8 bg-slate-200 hover:scale-125 transition duration-500'>donor logo</div>

          </Marquee>
        </div>
      </div>
      <div className="flex items-center px-72   gap-x-10">
        <div className="w-full mx-auto flex items-center justify-end">
          <Image src={kid_learn} width={550} className="" />
        </div>
        <div className="shadow-2xl drop-shadow-2xl p-10 mx-auto w-full flex flex-col items-center justify-start  border-2">
          <p className="font-serif text-3xl font-medium">Projects For Skill Training</p>
          <p className="text-justify pt-10">In India, skill development has been regarded as one of the most important factors in job generation. India enjoys a special demographic advantage because more than 60% of the population is under 25 years old. However, employability needs to be raised in order to benefit from such a sizable workforce. According to recent data, just 10% of recent graduates are employable, and the other 90% do not possess the necessary abilities to qualify for employment by a firm. The GDP of India is increasing at a healthy rate of about 6-8%, but employment growth is not keeping up.</p>
        </div>
      </div>
      <div className="bg-[#4ABB47] flex items-center justify-center mt-6 gap-x-52 py-4">
        <div className="flex flex-col items-center justify-center text-white font-serif">
          <BsPeopleFill size={75} className="" />
          <p className="text-3xl text-black font-semibold">1200+</p>
          <p className="text-xl">Visitors</p>
        </div>
        <div className="flex flex-col items-center justify-center text-white font-serif">
          <BiSolidDonateHeart size={75} className="" />
          <p className="text-3xl text-black font-semibold">250+</p>
          <p className="text-xl">Donors</p>
        </div>
        <div className="flex flex-col items-center justify-center text-white font-serif">
          <CgProfile size={75} className="" />
          <p className="text-3xl text-black font-semibold">28+</p>
          <p className="text-xl">Members</p>
        </div>
        <div className="flex flex-col items-center justify-center text-white font-serif">
          <FaRegHandshake size={75} className="" />
          <p className="text-3xl text-black font-semibold">37+</p>
          <p className="text-xl">Volunteers</p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-start justify-center py-28 px-48 gap-x-8">
        <div className="text-white w-[50%] mx-auto">
          <p className="font-serif text-5xl font-bold ">We Make a Difference in their Life</p>
          <p className="py-8 text-[#4ABB47] font-sans font-semibold">NEWS AND UPDATES</p>
          <p className="text-justify font-sans font-medium text-gray-400 leading-8">Our organization also works towards women's empowerment, health, environment, consumer awareness, and cancer patients. We request you to donate to poor and support these types of causes, as each contribution counts towards making a significant impact.
          </p>
          <button className="my-8 bg-[#4ABB47] px-4 py-2">Read More</button>
        </div>
        <div className="w-[50%] mx-auto flex items-start justify-center">
          <video width="540" height="281" controls src=""></video>
        </div>
      </div>
      <div className="py-20">
        <p className="text-6xl font-serif font-semibold text-[#424242] text-center">Latest Causes</p>
        <p className="text-center text-purple-800 font-medium text-sm py-4">HELP US NOW</p>
        </div>
      
    </div>
  );
}
