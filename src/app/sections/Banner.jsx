// app/HeroSlider.js

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner =()=> {
  const slides = [
    {
      image: "/slide1.png",
      title: "Empower Your Team",
      description: "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
    },
    {
      image: "/slide2.png",
      title: "Skills that drive you forward",
      description: "Skills for your present (and your future). Get started with us.",
    },
    
  ];

  return (
    <section className="relative w-full xl:px-20 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{ delay: 9000, disableOnInteraction: false , pauseOnMouseEnter: true, }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
         <SwiperSlide className="flex items-center bg-gray-100 rounded-md ">
         <div className="container mx-auto flex items-center px-6 sm:mt-20 sm:h-[500px] ">
           <div className="bg-white p-8 rounded-md shadow-md max-w-md ">
             <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
             <p className="text-gray-600 mb-6">
             {slide.description}
             </p>
             <div className="flex space-x-4">
               <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                 Plan for individuals
               </button>
               <button className="border border-black px-6 py-2 rounded-md hover:bg-gray-100">
                 Plan for organizations
               </button>
             </div>
           </div>
           <div className="hidden md:block flex-1">
             <img
               src={slide.image}
               alt="Team discussion"
               className="object-contain h-[500px] w-full"
             />
           </div>
         </div>
       </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner