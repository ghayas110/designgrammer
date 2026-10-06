"use client";
import { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import YouTubeEmbed from "./YouTubeEmbed";
import { formatTotalDuration, getLessons } from "@/data/courses";

const CoursePlayer = ({ course }) => {
    const [currentLesson, setCurrentLesson] = useState(getLessons(course)[0]);

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Video */}
            <div className="flex-1 min-w-0">
                <YouTubeEmbed videoId={currentLesson.videoId} title={currentLesson.title} />
                <h3 className="text-lg font-bold mt-4">{currentLesson.title}</h3>
                <p className="text-sm text-gray-600">
                    Video by {currentLesson.channel} ·{" "}
                    <a
                        href={`https://www.youtube.com/watch?v=${currentLesson.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-black"
                    >
                        Watch on YouTube
                    </a>
                </p>
            </div>

            {/* Lesson list */}
            <aside className="lg:w-96 bg-gray-100 rounded-lg p-4 lg:max-h-[34rem] overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">Course Content</h2>
                {course.sections.map((section, index) => (
                    <Disclosure key={section.title} defaultOpen={index === 0}>
                        <div className="mb-4">
                            <DisclosureButton className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-black">
                                {section.title} ({section.lessons.length} lectures / {formatTotalDuration(section.lessons)})
                            </DisclosureButton>
                            <DisclosurePanel as="ul" className="mt-1">
                                {section.lessons.map((lesson) => {
                                    const isActive = lesson.videoId === currentLesson.videoId;
                                    return (
                                        <li key={lesson.videoId}>
                                            <button
                                                onClick={() => setCurrentLesson(lesson)}
                                                className={`w-full flex justify-between gap-3 px-4 py-2 text-sm text-left rounded-md ${
                                                    isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-200"
                                                }`}
                                            >
                                                <span>▶ {lesson.title}</span>
                                                <span className="shrink-0">{lesson.duration}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </DisclosurePanel>
                        </div>
                    </Disclosure>
                ))}
            </aside>
        </div>
    );
};

export default CoursePlayer;
