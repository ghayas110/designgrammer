"use client";

import React, { useState } from "react";

const Skills = () => {
  const parentTabs = [
    { id: "data-science", label: "Data Science" },
    { id: "it-certifications", label: "IT Certifications" },
    { id: "leadership", label: "Leadership" },
    { id: "web-development", label: "Web Development" },
    { id: "communication", label: "Communication" },
    { id: "business-analytics", label: "Business Analytics & Intelligence" },
  ];

  const childTabs = {
    "data-science": [
      { id: "datascience", label: "Data Science", learners: "7M+" },
      { id: "python", label: "Python", learners: "46.6M+" },
      { id: "machinelearning", label: "Machine Learning", learners: "8M+" },
      { id: "deeplearning", label: "Deep Learning", learners: "2M+" },
    ],
    "it-certifications": [
      { id: "cert1", label: "CompTIA A+", learners: "1M+" },
      { id: "cert2", label: "AWS Certification", learners: "2M+" },
    ],
    "leadership": [
      { id: "leadership-1", label: "Leadership", learners: "1M+" },
      { id: "leadership-2", label: "Leadership", learners: "2M+" },
    ],
    "web-development": [
      { id: "web-dev-1", label: "Web Development", learners: "1M+" },
      { id: "web-dev-2", label: "Web Development", learners: "2M+" },
    ],
    "communication": [
      { id: "communication-1", label: "Communication", learners: "1M+" },
      { id: "communication-2", label: "Communication", learners: "2M+" },
    ],
    "business-analytics": [
      { id: "analytics-1", label: "Business Analytics", learners: "1M+" },
      { id: "analytics-2", label: "Business Analytics", learners: "2M+" },
    ],
  };

  const cardData = {
    python: [
      {
        id: 1,
        image: "/images/python-course-1.jpg",
        title: "The Complete Python Bootcamp",
        author: "Jose Portilla",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
      {
        id: 2,
        image: "/images/python-course-2.jpg",
        title: "100 Days of Code: Python Pro Bootcamp",
        author: "Dr. Angela Yu",
        rating: 4.7,
        reviews: "333,927",
        price: "$69.99",
        tag: "Bestseller",
      },
    ],
    datascience: [
      {
        id: 1,
        image: "/images/data-science-course-1.jpg",
        title: "Data Science and Machine Learning Bootcamp",
        author: "Jose Portilla",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
      {
        id: 2,
        image: "/images/data-science-course-2.jpg",
        title: "The Complete Data Science Course - 2023 Edition",
        author: "Jose Portilla",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
    ],
    machinelearning: [
      {
        id: 1,
        image: "/images/machine-learning-course-1.jpg",
        title: "The Complete Machine Learning Course - 2023 Edition",
        author: "Jose Portilla",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
      {
        id: 2,
        image: "/images/machine-learning-course-2.jpg",
        title: "The Complete Machine Learning Bootcamp",
        author: "Jose Portilla",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
    ],
    deeplearning: [
      {
        id: 1,
        image: "/images/deep-learning-course-1.jpg",
        title: "Deep Learning A-ZTM: Hands-On Artificial Neural Networks",
        author: "Andrei Neagoie",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
      {
        id: 2,
        image: "/images/deep-learning-course-2.jpg",
        title: "Deep Learning A-ZTM: Hands-On Artificial Neural Networks",
        author: "Andrei Neagoie",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
    ],
    cert1: [
      {
        id: 1,
        image: "/images/it-certification-1.jpg",
        title: "AWS Certified Cloud Practitioner",
        author: "AWS",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
      {
        id: 2,
        image: "/images/it-certification-2.jpg",
        title: "AWS Certified Cloud Practitioner",
        author: "AWS",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
    ],
    cert2: [
      {
        id: 1,
        image: "/images/it-certification-1.jpg",
        title: "AWS Certified Cloud Practitioner",
        author: "AWS",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },      
    ],
    
    "web-development": [
      {
        id: 1,
        image: "/images/web-development-course-1.jpg",
        title: "The Complete Web Development Bootcamp",
        author: "Dr. Angela Yu",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
      {
        id: 2,
        image: "/images/web-development-course-2.jpg",
        title: "The Complete 2023 Web Development Bootcamp",
        author: "Dr. Angela Yu",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
    ],
    "mobile-app-development": [
      {
        id: 1,
        image: "/images/mobile-app-development-course-1.jpg",
        title: "The Complete Mobile App Development Bootcamp",
        author: "Dr. Angela Yu",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
      {
        id: 2,
        image: "/images/mobile-app-development-course-2.jpg",
        title: "The Complete 2023 Mobile App Development Bootcamp",
        author: "Dr. Angela Yu",
        rating: 4.6,
        reviews: "522,184",
        price: "$69.99",
      },
    ],
  };

  const [activeParentTab, setActiveParentTab] = useState(parentTabs[0].id);
  const [activeChildTab, setActiveChildTab] = useState(childTabs[activeParentTab][0]?.id);

  const handleParentTabChange = (id) => {
    setActiveParentTab(id);
    setActiveChildTab(childTabs[id][0]?.id);
  };

  return (
    <div className="container mx-auto p-6">
         <div className="flex flex-col pt-5  md:p-12">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
        All the skills you need in one place
      </h1>
      <p className="text-sm text-gray-600 mt-2 md:mt-4 md:text-base lg:text-lg">
        From critical skills to technical topics, Udemy supports your professional development.
      </p>
    </div>
    {/* Parent Tabs */}
    <div className="flex overflow-x-auto space-x-4 border-b pb-2">
      {parentTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleParentTabChange(tab.id)}
          className={`py-2 px-4 text-sm font-medium ${
            activeParentTab === tab.id
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Child Tabs */}
    <div className="flex overflow-x-auto space-x-4 mt-4">
      {childTabs[activeParentTab]?.map((child) => (
        <button
          key={child.id}
          onClick={() => setActiveChildTab(child.id)}
          className={`py-2 px-4 text-sm font-medium rounded-full ${
            activeChildTab === child.id
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {child.label} <span className="text-xs">({child.learners})</span>
        </button>
      ))}
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {cardData[activeChildTab]?.map((card) => (
        <div key={card.id} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={card.image}
            alt={card.title}
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{card.author}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span> {card.rating}
            </span>
            <span>{card.reviews} reviews</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-lg">{card.price}</span>
            {card.tag && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                {card.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Skills;
