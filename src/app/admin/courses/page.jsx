"use client";
import { useState } from "react";

export default function ManageCourses() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courses, setCourses] = useState([
        { id: 1, name: "Introduction to Programming", instructor: "John Doe", students: 50 },
        { id: 2, name: "Data Structures", instructor: "Jane Smith", students: 40 },
        { id: 3, name: "Machine Learning Basics", instructor: "Robert Brown", students: 30 },
    ]);

    const [newCourse, setNewCourse] = useState({ name: "", instructor: "", students: "" });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAddCourse = (e) => {
        e.preventDefault();
        if (newCourse.name && newCourse.instructor && newCourse.students) {
            const newId = courses.length + 1;
            setCourses([...courses, { id: newId, ...newCourse }]);
            setNewCourse({ name: "", instructor: "", students: "" });
            closeModal();
        }
    };

    const handleDelete = (id) => {
        setCourses(courses.filter((course) => course.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Manage Courses</h1>

            {/* Add Course Button */}
            <button
                onClick={openModal}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-6"
            >
                Add Course
            </button>

            {/* Courses Table */}
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Course ID</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Course Name</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Instructor</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Students Enrolled</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-700">{course.id}</td>
                                <td className="px-6 py-4 text-gray-700">{course.name}</td>
                                <td className="px-6 py-4 text-gray-700">{course.instructor}</td>
                                <td className="px-6 py-4 text-gray-700">{course.students}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(course.id)}
                                        className="text-red-500 border border-red-500 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Course Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Course</h2>
                            <form onSubmit={handleAddCourse}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Course Name
                                    </label>
                                    <input
                                        type="text"
                                        value={newCourse.name}
                                        onChange={(e) =>
                                            setNewCourse({ ...newCourse, name: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Instructor Name
                                    </label>
                                    <input
                                        type="text"
                                        value={newCourse.instructor}
                                        onChange={(e) =>
                                            setNewCourse({ ...newCourse, instructor: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Students Enrolled
                                    </label>
                                    <input
                                        type="number"
                                        value={newCourse.students}
                                        onChange={(e) =>
                                            setNewCourse({ ...newCourse, students: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={closeModal}
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
