"use client";
import { useState } from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Hands-on training",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
    imageUrl: "/slide2.png"
  },
  {
    id: 2,
    title: "Certification prep",
    description:
      "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
    imageUrl: "/slide1.png"
  },
  {
    id: 3,
    title: "Insights and analytics",
    description:
      "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
    imageUrl: "/images/insights-analytics.jpg"
  },
  {
    id: 4,
    title: "Customizable content",
    description:
      "Create tailored learning paths for team and organization goals and even host your own content and resources.",
    imageUrl: "/images/customizable-content.jpg"
  }
];

export default function Goals() {
  const [activeImage, setActiveImage] = useState(cardData[0].imageUrl);

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-20">
      {/* Left Section */}
      <div className="flex-1 space-y-4 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Learning focused on your goals
        </h2>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`p-4 border rounded-lg cursor-pointer ${
              activeImage === card.imageUrl ? "border-purple-500" : "border-gray-300"
            }`}
            onClick={() => setActiveImage(card.imageUrl)}
          >
            <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex-1 px-4">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src={activeImage}
            alt="Goal Image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
