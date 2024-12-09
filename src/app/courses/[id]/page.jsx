"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6">
      {/* Course Overview Section */}
      <section className="flex flex-col md:flex-row gap-6 bg-gray-100 p-6 rounded-lg">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</h1>
          <p className="text-gray-700 mb-6">Master ChatGPT, Generative AI Tools, Prompting, and Practical Engineering with Hands-On Practice!</p>
          <p className="text-sm text-gray-600">Rating: 4.7 (2,648 ratings) | 13,001 students enrolled</p>
          <div className="mt-4">
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-purple-700">Add to cart - $49.99</button>
          </div>
        </div>
        <div className="md:w-1/3">
          <Image src="/images/python-course-1.jpg" alt="Course Image" width={500} height={300} className="rounded-lg" />
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
        <ul className="list-disc list-inside">
          <li>Understand the fundamentals of ChatGPT and Generative AI</li>
          <li>Learn how to prompt effectively for best outcomes</li>
          <li>Use AI tools to enhance productivity and creativity</li>
          <li>Hands-on practice with real-world examples</li>
        </ul>
      </section>

      {/* Requirements Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
        <p>Basic understanding of programming is needed but not mandatory.</p>
      </section>

      {/* Course Content Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left p-4 border">Section</th>
              <th className="text-left p-4 border">Number of Lectures</th>
              <th className="text-left p-4 border">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border">Introduction to Generative AI</td>
              <td className="p-4 border">4 lectures</td>
              <td className="p-4 border">30 minutes</td>
            </tr>
            <tr>
              <td className="p-4 border">Introduction to Generative AI</td>
              <td className="p-4 border">4 lectures</td>
              <td className="p-4 border">30 minutes</td>
            </tr>
            {/* Repeat for other sections */}
          </tbody>
        </table>
      </section>

      {/* Instructor Information Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
        <div className="flex items-center gap-4">
          <Image src="/slide1.png" alt="Instructor Image" width={100} height={100} className="rounded-full" />
          <div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-700">Instructor Rating: 4.9 (2,340 ratings)</p>
            <p className="text-gray-600">John is a professional AI researcher with over 10 years of experience...</p>
          </div>
        </div>
      </section>

      {/* Reviews and Ratings Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="mb-4">
          <p className="font-semibold">Jane Smith</p>
          <p className="text-gray-600">"This course is very informative, I learned a lot about how to use AI tools in my projects."</p>
        </div>
        {/* Repeat for more reviews */}
      </section>

      {/* Related Courses Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Students also bought</h2>
        <div className="flex gap-6 overflow-x-auto">
          <div className="w-1/3 p-4 bg-gray-100 rounded-lg">
            <Image src="/images/python-course-1.jpg" alt="Course Thumbnail" width={300} height={200} className="rounded-lg w-full" />
            <h3 className="mt-2 text-lg font-bold">Advanced AI Techniques</h3>
            <p className="text-gray-700">$49.99</p>
          </div>
          {/* Repeat for more courses */}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
