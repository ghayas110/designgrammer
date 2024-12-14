"use client";
import { useState } from "react";

export default function ManageStudents() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [students, setStudents] = useState([
        { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Introduction to Programming" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Data Structures" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", course: "Machine Learning" },
    ]);

    const [newStudent, setNewStudent] = useState({ name: "", email: "", course: "" });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAddStudent = (e) => {
        e.preventDefault();
        if (newStudent.name && newStudent.email && newStudent.course) {
            const newId = students.length + 1;
            setStudents([...students, { id: newId, ...newStudent }]);
            setNewStudent({ name: "", email: "", course: "" });
            closeModal();
        }
    };

    const handleDelete = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Manage Students</h1>

            {/* Add Student Button */}
            <button
                onClick={openModal}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-6"
            >
                Add Student
            </button>

            {/* Students Table */}
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Student ID</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Name</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Email</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Course</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-700">{student.id}</td>
                                <td className="px-6 py-4 text-gray-700">{student.name}</td>
                                <td className="px-6 py-4 text-gray-700">{student.email}</td>
                                <td className="px-6 py-4 text-gray-700">{student.course}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(student.id)}
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

            {/* Add Student Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Student</h2>
                            <form onSubmit={handleAddStudent}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Name
                                    </label>
                                    <input
                                        type="text"
                                        value={newStudent.name}
                                        onChange={(e) =>
                                            setNewStudent({ ...newStudent, name: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Email
                                    </label>
                                    <input
                                        type="email"
                                        value={newStudent.email}
                                        onChange={(e) =>
                                            setNewStudent({ ...newStudent, email: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Course
                                    </label>
                                    <input
                                        type="text"
                                        value={newStudent.course}
                                        onChange={(e) =>
                                            setNewStudent({ ...newStudent, course: e.target.value })
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
                                        Add Student
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
