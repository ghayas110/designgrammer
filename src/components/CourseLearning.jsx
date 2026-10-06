"use client";
import { useState } from "react";
import Link from "next/link";
import CoursePlayer from "./CoursePlayer";
import { getCertification, getCourse, getCourseStats } from "@/data/courses";

const tabs = ["Overview", "Q&A", "Notes", "Announcements", "Reviews", "Learning Tools"];

const CourseLearning = ({ courseId }) => {
    const [activeTab, setActiveTab] = useState("Overview");
    const course = getCourse(courseId);

    if (!course) {
        return (
            <div className="p-6">
                <p className="mb-4">Course not found.</p>
                <Link href="/dashboard" className="underline">Back to My Learning</Link>
            </div>
        );
    }

    const certification = getCertification(course);
    const { lectures, duration } = getCourseStats(course);

    return (
        <div className="p-6">
            {/* Video Section */}
            <div className="mb-6">
                <CoursePlayer key={course.id} course={course} />
            </div>

            {/* Tabs */}
            <div>
                <div className="flex border-b overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm whitespace-nowrap ${
                                activeTab === tab
                                    ? "border-b-2 border-black text-black"
                                    : "text-gray-500 hover:text-black"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {activeTab === "Overview" && (
                        <div>
                            <h2 className="text-xl font-bold">{course.title}</h2>
                            <p className="mt-2">{course.description}</p>
                            <p className="text-gray-600 text-sm mt-2">
                                ⭐ {course.rating} ({course.reviews.toLocaleString("en-US")} ratings) | {course.students.toLocaleString("en-US")} students | {lectures} lectures • {duration} total
                            </p>
                            <div className="mt-4 p-4 bg-white border rounded-lg">
                                <p className="text-sm font-semibold">🎓 Certification</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Prepares you for <strong>{certification.name}</strong> (exam {certification.exam}). Complete every lecture to earn your PrimeX Solution certificate of completion.
                                </p>
                            </div>
                        </div>
                    )}
                    {activeTab === "Q&A" && <div>Q&A Section Content</div>}
                    {activeTab === "Notes" && <div>Notes Section Content</div>}
                    {activeTab === "Announcements" && <div>Announcements Section Content</div>}
                    {activeTab === "Reviews" && <div>Reviews Section Content</div>}
                    {activeTab === "Learning Tools" && <div>Learning Tools Section Content</div>}
                </div>
            </div>
        </div>
    );
};

export default CourseLearning;
