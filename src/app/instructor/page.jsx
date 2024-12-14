// app/dashboard/page.js
"use client";
import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import CourseCard from "@/components/InsCourseCard";

const Instructor = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const courses = [
        {
            id: 1,
            title: "Complete WordPress Course For Beginners",
            instructor: "Ferdy Korpershoek",
            progress: 3,
            rating: 4.5,
            image: "https://via.placeholder.com/150",
            videoId: 1,
        },
        {
            id: 2,
            title: "The Complete Web Developer Course 3.0",
            instructor: "Rob Percival",
            progress: 25,
            rating: 5,
            image: "https://via.placeholder.com/150",
            videoId: 1,
        },
        {
            id: 3,
            title: "React with Redux, React-Router, Hooks and Auth0",
            instructor: "Mohammad Iqbal",
            progress: 16,
            rating: 3.5,
            image: "https://via.placeholder.com/150",
            videoId: 1,
        },
    ];

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Filter Bar */}
            <div className="flex items-center justify-between">
            <FilterBar onSearch={setSearchTerm} />
            <button
                className="m-10 w-fit p-10 bg-black text-white py-2 rounded-md"
                onClick={()=>setIsModalOpen(true)}
            >
                Add Course
            </button>
            </div>
         
            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} videoId={course.videoId} />
                ))}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Course</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Course Name
                                    </label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                        <option>Select Category</option>
                                        <option>Programming</option>
                                        <option>Design</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                                    >
                                        Add Course
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Instructor;
