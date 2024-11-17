"use client";
import React, { useState } from "react";

const feedbacks = [
  {
    quote:
      "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
    source: "StackOverflow, 37,076 responses collected",
    link: "View Web Development courses",
    avatar: "/slide1.png", // Replace with actual image URL
  },
  {
    quote:
      "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
    source: "Alvin Lim, Technical Co-Founder, CTO at Dimensional",
    link: "View this iOS & Swift course",
    avatar: "/slide1.png",
  },
  {
    quote:
      "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
    source: "William A. Wachlin, Partner Account Manager at Amazon Web Services",
    link: "View this AWS course",
    avatar: "/slide1.png",
  },
  {
    quote:
      "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
    source: "Ian Stevens, Head of Capability Development, North America at Publicis Sapient",
    link: "Read full story",
    avatar: "/slide1.png",
  },
  {
    quote:
      "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
    source: "William A. Wachlin, Partner Account Manager at Amazon Web Services",
    link: "View this AWS course",
    avatar: "/slide1.png",
  },
  {
    quote:
      "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
    source: "Ian Stevens, Head of Capability Development, North America at Publicis Sapient",
    link: "Read full story",
    avatar: "/slide1.png",
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        See what others are achieving through learning
      </h2>
      <div className="relative overflow-hidden">
        {/* Feedback Cards */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
            >
              <div
                className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center w-80 h-80 overflow-hidden"
              >
                <img
                  src={feedback.avatar}
                  alt={feedback.source}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <blockquote className="italic text-gray-700 mb-4 line-clamp-3">
                  "{feedback.quote}"
                </blockquote>
                <p className="text-sm text-gray-500">{feedback.source}</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-blue-500 underline hover:text-blue-700"
                >
                  {feedback.link}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300"
        >
          &#8250;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="mt-6 flex justify-center space-x-2">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
