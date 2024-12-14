"use client";
import { useState } from "react";

export default function StudentList() {
    // Sample Data: List of courses with enrolled students
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: "Introduction to Programming",
            students: [
                { id: 101, name: "Alice Johnson", email: "alice@example.com" },
                { id: 102, name: "Bob Smith", email: "bob@example.com" },
            ],
        },
        {
            id: 2,
            name: "Data Structures and Algorithms",
            students: [
                { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
                { id: 104, name: "Diana Prince", email: "diana@example.com" },
            ],
        },
        {
            id: 3,
            name: "Machine Learning Basics",
            students: [
                { id: 105, name: "Evan Rogers", email: "evan@example.com" },
            ],
        },
    ]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Student List</h1>

            {/* Iterate through courses */}
            {courses.map((course) => (
                <div key={course.id} className="mb-8 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        {course.name}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th className="px-6 py-3 text-left text-gray-600 font-semibold">
                                        Student ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-gray-600 font-semibold">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-gray-600 font-semibold">
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {course.students.map((student) => (
                                    <tr
                                        key={student.id}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 text-gray-700">
                                            {student.id}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {student.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {student.email}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}
