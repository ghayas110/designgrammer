"use client";
import { useState } from "react";

export default function ManageInstructors() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [instructors, setInstructors] = useState([
        { id: 1, name: "John Doe", email: "john.doe@example.com", expertise: "Programming" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", expertise: "Data Science" },
        { id: 3, name: "Robert Brown", email: "robert.brown@example.com", expertise: "Machine Learning" },
    ]);

    const [newInstructor, setNewInstructor] = useState({ name: "", email: "", expertise: "" });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAddInstructor = (e) => {
        e.preventDefault();
        if (newInstructor.name && newInstructor.email && newInstructor.expertise) {
            const newId = instructors.length + 1;
            setInstructors([...instructors, { id: newId, ...newInstructor }]);
            setNewInstructor({ name: "", email: "", expertise: "" });
            closeModal();
        }
    };

    const handleDelete = (id) => {
        setInstructors(instructors.filter((instructor) => instructor.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Manage Instructors</h1>

            {/* Add Instructor Button */}
            <button
                onClick={openModal}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-6"
            >
                Add Instructor
            </button>

            {/* Instructors Table */}
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Instructor ID</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Name</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Email</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Expertise</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructors.map((instructor) => (
                            <tr key={instructor.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-700">{instructor.id}</td>
                                <td className="px-6 py-4 text-gray-700">{instructor.name}</td>
                                <td className="px-6 py-4 text-gray-700">{instructor.email}</td>
                                <td className="px-6 py-4 text-gray-700">{instructor.expertise}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(instructor.id)}
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

            {/* Add Instructor Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Instructor</h2>
                            <form onSubmit={handleAddInstructor}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Name
                                    </label>
                                    <input
                                        type="text"
                                        value={newInstructor.name}
                                        onChange={(e) =>
                                            setNewInstructor({ ...newInstructor, name: e.target.value })
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
                                        value={newInstructor.email}
                                        onChange={(e) =>
                                            setNewInstructor({ ...newInstructor, email: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Expertise
                                    </label>
                                    <input
                                        type="text"
                                        value={newInstructor.expertise}
                                        onChange={(e) =>
                                            setNewInstructor({ ...newInstructor, expertise: e.target.value })
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
                                        Add Instructor
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
