// app/dashboard/page.js
"use client";
import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import CourseCard from "@/components/InsCourseCard";

const DashboardPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

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
            <FilterBar onSearch={setSearchTerm} />

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} videoId={course.videoId} />
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
