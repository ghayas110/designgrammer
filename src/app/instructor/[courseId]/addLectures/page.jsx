"use client";
import { useState } from "react";

export default function AddLecture() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [lectures, setLectures] = useState([
        { id: 54, title: "Lecture 1", createdAt: "2024-10-05", video: null },
        { id: 55, title: "Lecture 2", createdAt: "2024-10-05", video: null },
    ]);
    const [newLecture, setNewLecture] = useState({ title: "", file: null });
    const [selectedLecture, setSelectedLecture] = useState(null);

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const openViewModal = (lecture) => {
        setSelectedLecture(lecture);
        setIsViewModalOpen(true);
    };

    const closeViewModal = () => setIsViewModalOpen(false);

    const handleAddLecture = (e) => {
        e.preventDefault();
        if (newLecture.title && newLecture.file) {
            const newId = lectures.length + 54;
            const createdAt = new Date().toISOString().split("T")[0];
            setLectures([
                ...lectures,
                {
                    id: newId,
                    title: newLecture.title,
                    createdAt,
                    video: URL.createObjectURL(newLecture.file),
                },
            ]);
            setNewLecture({ title: "", file: null });
            closeAddModal();
        }
    };

    const handleDelete = (id) => {
        setLectures(lectures.filter((lecture) => lecture.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Add Lecture Button */}
            <button
                onClick={openAddModal}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-6"
            >
                Add Lecture
            </button>

            {/* Lecture Table */}
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Lecture ID</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Title</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Created At</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">View Lecture</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lectures.map((lecture) => (
                            <tr key={lecture.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-700">{lecture.id}</td>
                                <td className="px-6 py-4 text-gray-700">{lecture.title}</td>
                                <td className="px-6 py-4 text-gray-700">{lecture.createdAt}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => openViewModal(lecture)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Lecture
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(lecture.id)}
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

            {/* Add Lecture Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Lecture</h2>
                            <form onSubmit={handleAddLecture}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Lecture Title
                                    </label>
                                    <input
                                        type="text"
                                        value={newLecture.title}
                                        onChange={(e) =>
                                            setNewLecture({ ...newLecture, title: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Upload Lecture File
                                    </label>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={(e) =>
                                            setNewLecture({ ...newLecture, file: e.target.files[0] })
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

            {/* View Lecture Modal */}
            {isViewModalOpen && selectedLecture && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-2/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">{selectedLecture.title}</h2>
                            {selectedLecture.video ? (
                                <video
                                    src={selectedLecture.video}
                                    controls
                                    className="w-full h-auto rounded-lg"
                                />
                            ) : (
                                <p className="text-gray-500">No video uploaded for this lecture.</p>
                            )}
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={closeViewModal}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
