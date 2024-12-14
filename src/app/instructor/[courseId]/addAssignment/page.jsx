"use client";
import { useState } from "react";

export default function AddAssignment() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [assignments, setAssignments] = useState([
        { id: 1, title: "Assignment 1", createdAt: "2024-10-05", file: null },
        { id: 2, title: "Assignment 2", createdAt: "2024-10-10", file: null },
    ]);

    const [newAssignment, setNewAssignment] = useState({ title: "", file: null });

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const handleAddAssignment = (e) => {
        e.preventDefault();
        if (newAssignment.title && newAssignment.file) {
            const newId = assignments.length + 1;
            const createdAt = new Date().toISOString().split("T")[0];
            setAssignments([
                ...assignments,
                { id: newId, title: newAssignment.title, createdAt, file: newAssignment.file.name },
            ]);
            setNewAssignment({ title: "", file: null });
            closeAddModal();
        }
    };

    const handleDelete = (id) => {
        setAssignments(assignments.filter((assignment) => assignment.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Add Assignment Button */}
            <button
                onClick={openAddModal}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-6"
            >
                Add Assignment
            </button>

            {/* Assignments Table */}
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Assignment ID</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Title</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Created At</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">View File</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assignment) => (
                            <tr key={assignment.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-700">{assignment.id}</td>
                                <td className="px-6 py-4 text-gray-700">{assignment.title}</td>
                                <td className="px-6 py-4 text-gray-700">{assignment.createdAt}</td>
                                <td className="px-6 py-4 text-blue-500 hover:underline cursor-pointer">
                                    {assignment.file ? assignment.file : "No File Uploaded"}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(assignment.id)}
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

            {/* Add Assignment Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Assignment</h2>
                            <form onSubmit={handleAddAssignment}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Assignment Title
                                    </label>
                                    <input
                                        type="text"
                                        value={newAssignment.title}
                                        onChange={(e) =>
                                            setNewAssignment({ ...newAssignment, title: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Upload Assignment File
                                    </label>
                                    <input
                                        type="file"
                                        onChange={(e) =>
                                            setNewAssignment({ ...newAssignment, file: e.target.files[0] })
                                        }
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={closeAddModal}
                                        className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                    >
                                        OK
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
