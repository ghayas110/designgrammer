// app/dashboard/page.js
"use client";
import { useState } from "react";
import FilterBar from "@/components/FilterBar";

import CourseCard from "@/components/CourseCard";
import { COURSES, getCourseImage } from "@/data/courses";

// Sample enrollment progress (%) per course id
const PROGRESS = { 1: 35, 2: 12, 3: 0, 4: 60, 5: 8, 6: 0 };

const DashboardPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const courses = COURSES.map((course) => ({
        ...course,
        progress: PROGRESS[course.id] ?? 0,
        image: getCourseImage(course),
    }));

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
