"use client";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
export default function CourseLayout({ children }) {
    <Disclosure>
      {({ open }) => (
        <div className="mb-4">
          <Disclosure.Button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            {section.title} ({section.totalLessons}/{section.totalTime})
          </Disclosure.Button>
          {open && (
            <div className="px-4 py-2 text-sm text-gray-600">
              <ul>
                {section.lessons.map((lesson, i) => (
                  <li key={i} className="flex justify-between py-1">
                    <span>{lesson.title}</span>
                    <span>{lesson.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Disclosure>
    const courseSections = [
        {
            title: "Section 1: Getting Started",
            lessons: [
                { title: "Introduction to the course", duration: "1 min" },
                { title: "Setting up your environment", duration: "3 min" },
                { title: "Course resources", duration: "2 min" },
            ],
            totalLessons: 6,
            totalTime: "14 min",
        },
        {
            title: "Section 2: HTML5",
            lessons: [
                { title: "Introduction to HTML5", duration: "10 min" },
                { title: "Creating a basic HTML structure", duration: "15 min" },
            ],
            totalLessons: 34,
            totalTime: "1 hr 54 min",
        },
        // Add more sections here...
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
      

            {/* Main Content */}
            <main className="flex-1 flex flex-col bg-white">
                {children}
            </main>
            <aside className="w-80 bg-gray-100 border-r p-4 overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">Course Content</h2>
                <div>
                    {courseSections.map((section, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <div className="mb-4">
                                    <Disclosure.Button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        {section.title} ({section.totalLessons}/{section.totalTime})
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 py-2 text-sm text-gray-600">
                                        <ul>
                                            {section.lessons.map((lesson, i) => (
                                                <li key={i} className="flex justify-between py-1">
                                                    <span>{lesson.title}</span>
                                                    <span>{lesson.duration}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </aside>
        </div>
    );
}
