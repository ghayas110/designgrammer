"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSE_CATEGORIES, COURSES, getCertification, getCourseImage } from "@/data/courses";

const Skills = () => {
  const parentTabs = COURSE_CATEGORIES.map(({ id, label }) => ({ id, label }));

  const childTabs = Object.fromEntries(COURSE_CATEGORIES.map((category) => [category.id, category.topics]));

  const cardData = Object.fromEntries(
    COURSE_CATEGORIES.flatMap((category) => category.topics).map((topic) => [
      topic.id,
      COURSES.filter((course) => course.topic === topic.id),
    ])
  );

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
        From SQL to the cloud, PrimeX Solution helps you master Oracle and prepare for Oracle certification.
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
        <Link key={card.id} href={`/courses/${card.id}`} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          <img
            src={getCourseImage(card)}
            alt={card.title}
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{card.instructor}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span> {card.rating}
            </span>
            <span>{card.reviews.toLocaleString("en-US")} reviews</span>
          </div>
          <p className="text-xs text-gray-600 mt-2">🎓 Oracle exam {getCertification(card).exam}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-lg">${card.price}</span>
            {card.badge && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                {card.badge}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default Skills;
