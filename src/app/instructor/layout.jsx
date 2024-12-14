"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Determine if we're in the course detail page or the main dashboard
    const pathSegments = pathname.split("/"); // Split path into segments
    const courseId = pathSegments[2]; // Extract courseId
    const isCourseDetail = pathname.startsWith(`/instructor/${courseId}`) && pathSegments.length === 4;
    const title = isCourseDetail ? "Course Title" : "Instructor Portal"; // Replace "Course Title" dynamically

    // Instructor-specific menu
    const menuItems = isCourseDetail
        ? [
              { name: "Lectures", href: `/instructor/${courseId}/addLectures`, icon: "🎥" },
              { name: "Assignment", href: `/instructor/${courseId}/addAssignment`, icon: "📝" },
              { name: "Quizzes", href: `/instructor/${courseId}/addQuiz`, icon: "❓" },
              { name: "Announcements", href: `/instructor/${courseId}/addAnnouncement`, icon: "📢" },
          ]
        : [
              { name: "My Courses", href: "/instructor" },
              { name: "Student Lists", href: "/instructor/students" },
            //   { name: "Reports", href: "/instructor/reports" },
          ];

    return (
        <div className="flex flex-col h-screen">
            {/* Top Navbar */}
            <header className="bg-black text-white pt-5 px-6">
                <div className="text-3xl font-bold mb-4">{title}</div>
                <nav className="flex space-x-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-lg pb-2 ${
                                pathname === item.href
                                    ? "border-b-2 border-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 overflow-y-auto p-6">{children}</main>

            {/* Modal */}
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
                                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
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
}
