"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewArrivals = () => {
  const products = [
    {
      image: "/lingerie1.png",
      name: "Lace Bralette Set",
      price: "$49.99",
    },
    {
      image: "/lingerie2.png",
      name: "Satin Nightwear",
      price: "$59.99",
    },
    {
      image: "/lingerie3.png",
      name: "Mesh Bodysuit",
      price: "$39.99",
    },
    {
      image: "/lingerie4.png",
      name: "Classic Push-Up Bra",
      price: "$29.99",
    },
    {
      image: "/lingerie5.png",
      name: "Lace Panty Set",
      price: "$19.99",
    },
  ];

  return (
    <section className="new-arrivals bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          New Arrivals
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          className="new-arrivals-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover h-48 w-full rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                  Shop Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
