"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
    {
      image: "/slide2.png",
      title: "Empower Your Team",
      description:
        "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
    },
    {
      image: "/slide2.png",
      title: "Skills that drive you forward",
      description: "Skills for your present (and your future). Get started with us.",
    },
  ];

  return (
    <section className="relative w-full xl:px-20">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center bg-gray-100">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:mt-20">
              <div className="bg-white p-6 md:p-8 rounded-md shadow-md max-w-md w-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                    Plan for individuals
                  </button>
                  <button className="border border-black px-6 py-2 rounded-md hover:bg-gray-100">
                    Plan for organization
                  </button>
                </div>
              </div>
              <div className="w-full md:w-auto mb-6 md:mb-0">
                <img
                  src={slide.image}
                  alt="Team discussion"
                  className="object-contain h-60 md:h-80 lg:h-[500px] w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
