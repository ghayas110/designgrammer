"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Courses = () => {

  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [activeAccordion, setActiveAccordion] = useState(null); // Track which accordion is open
  const courses = [
    {
      id: 1,
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
      description:
        "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.",
      rating: 4.5,
      reviews: 191363,
      hours: "43 total hours",
      lectures: "387 lectures",
      level: "All Levels",
      price: "$19.99",
      originalPrice: "$99.99",
      badge: "Bestseller",
      image: "https://letstalkscience.ca/sites/default/files/2021-01/Robot_thinking.jpg", // Replace with real image URLs
    },
    {
      id: 2,
      title: "Python for Data Science and Machine Learning Bootcamp",
      description:
        "Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Tensorflow, and more!",
      rating: 4.6,
      reviews: 147103,
      hours: "25 total hours",
      lectures: "165 lectures",
      level: "All Levels",
      price: "$22.99",
      originalPrice: "$109.99",
      image: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1", // Replace with real image URLs
    },
  ];

  const toggleAccordion = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

  return (
    <div className="max-w-8xl mx-auto mt-12 h-screen px-20">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">All Business Analytics & Intelligence courses</h1>

      {/* Info Banner */}
      <div className="text-gray-700 text-sm p-3 rounded-md flex items-center mb-4">
        <span className="material-icons text-gray-600 mr-2">info</span>
        <p>Not sure? All courses have a 30-day money-back guarantee</p>
      </div>

    
      <div className="flex flex-row  ">
        {/* Left Section */}
        <div className="flex flex-col flex-2">
        
          {/* Filter and Sort Buttons */}
          <div className="flex flex-row">

        
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 hover:bg-gray-300"
          >
            Filter (6)
          </button>
          {/* Sort Dropdown */}
          <div className="flex flex-col space-x-2">
            <span>Sort by:</span>
            <select className="bg-gray-200 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-300">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Most Popular</option>
            </select>
          </div>
          </div>
           {/* Sidebar */}
          <div className=" p-4 rounded-md xl:block sm:hidden ">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          {/* Accordion Filters */}
          {["Ratings", "Video Duration", "Topic", "Subcategory", "Level", "Language"].map((filter, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(filter)}
                className="w-full text-left font-bold text-gray-700 border-b pb-2"
              >
                {filter}
              </button>
              {activeAccordion === filter && (
                <div className="mt-2 pl-4 text-gray-600">
                  {/* Placeholder content for each filter */}
                  <p>Select options for {filter}...</p>
                </div>
              )}
            </div>
          ))}
          {/* Close Sidebar */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Close Filters
          </button>
        </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-1">
        <div className=" flex flex-row justify-between flex-1 p-5">
        <p className="text-gray-500 text-sm mt-4 text-purple-900">Clear filters</p>
          <p className="text-gray-500 text-sm mt-4">1 result</p>
        </div>
        <div className="flex flex-row flex-wrap xl:block sm:hidden md:hidden">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => router.push(`/courses/${course.id}`)}
                className="bg-white shadow-md rounded-md overflow-hidden flex flex-row mt-10 hover:shadow-lg cursor-pointer active:bg-gray-100"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-40 h-40 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="font-bold text-lg">{course.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>
                      ⭐ {course.rating} ({course.reviews} reviews)
                    </p>
                    <p>{course.hours} • {course.lectures} • {course.level}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-purple-700 font-bold text-lg">
                      {course.price}
                      <span className="line-through text-gray-500 text-sm ml-2">
                        {course.originalPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div>
      <div className="flex flex-row flex-wrap xl:hidden sm:block md:block">
            {courses.map((course) => (
              <div 
              onClick={() => router.push(`/courses/${course.id}`)}
                key={course.id}
                className="bg-white shadow-md rounded-md overflow-hidden flex flex-row mt-10 hover:shadow-lg cursor-pointer active:bg-gray-100"

              >
                <img
                  src={course.image}
                  alt={course.title}
                    className="w-40 h-100 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="font-bold text-lg">{course.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>
                      ⭐ {course.rating} ({course.reviews} reviews)
                    </p>
                    <p>{course.hours} • {course.lectures} • {course.level}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-purple-700 font-bold text-lg">
                      {course.price}
                      <span className="line-through text-gray-500 text-sm ml-2">
                        {course.originalPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
       
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="absolute top-0 left-0 bg-white shadow-lg p-4 w-64 h-full z-50">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          {/* Accordion Filters */}
          {["Ratings", "Video Duration", "Topic", "Subcategory", "Level", "Language"].map((filter, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(filter)}
                className="w-full text-left font-bold text-gray-700 border-b pb-2"
              >
                {filter}
              </button>
              {activeAccordion === filter && (
                <div className="mt-2 pl-4 text-gray-600">
                  {/* Placeholder content for each filter */}
                  <p>Select options for {filter}...</p>
                </div>
              )}
            </div>
          ))}
          {/* Close Sidebar */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Close Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
