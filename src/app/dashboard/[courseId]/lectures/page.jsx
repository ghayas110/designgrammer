"use client";
import { useState } from "react";

const CourseDetailPage = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = ["Overview", "Q&A", "Notes", "Announcements", "Reviews", "Learning Tools"];

    return (
        <div className="p-6">
            {/* Video Section */}
            <div className="mb-6">
                <div className="relative w-full h-80 bg-black flex items-center justify-center">
                    <button className="text-white text-4xl">▶️</button>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                    Learn Web Development in 2024! Build apps, websites, and projects using HTML, CSS, JavaScript, PHP, Python, MySQL & more!
                </div>
            </div>

            {/* Tabs */}
            <div>
                <div className="flex border-b">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm ${
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
                            <p>
                                Learn Web Development in 2024! Build apps, websites, and projects using HTML, CSS, JavaScript, PHP, Python, MySQL, and more!
                            </p>
                            <p className="text-gray-600 text-sm mt-2">
                                ⭐ 4.3 (72,328 ratings) | 315,817 students | 31 hours total
                            </p>
                            <p className="text-gray-600 text-sm">Last updated June 2024</p>
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

export default CourseDetailPage;
