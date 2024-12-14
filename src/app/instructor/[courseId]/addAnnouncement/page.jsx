"use client";
import { useState } from "react";

export default function AddAnnouncement() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: "Holiday Notice", description: "School will be closed on October 10th.", createdAt: "2024-10-05" },
        { id: 2, title: "Exam Schedule", description: "Midterm exams will start from October 15th.", createdAt: "2024-10-07" },
    ]);

    const [newAnnouncement, setNewAnnouncement] = useState({ title: "", description: "" });

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const handleAddAnnouncement = (e) => {
        e.preventDefault();
        if (newAnnouncement.title && newAnnouncement.description) {
            const newId = announcements.length + 1;
            const createdAt = new Date().toISOString().split("T")[0];
            setAnnouncements([
                ...announcements,
                { id: newId, ...newAnnouncement, createdAt },
            ]);
            setNewAnnouncement({ title: "", description: "" });
            closeAddModal();
        }
    };

    const handleDelete = (id) => {
        setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Add Announcement Button */}
            <button
                onClick={openAddModal}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-6"
            >
                Add Announcement
            </button>

            {/* Announcements Table */}
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Announcement ID</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Title</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Description</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Created At</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {announcements.map((announcement) => (
                            <tr key={announcement.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-700">{announcement.id}</td>
                                <td className="px-6 py-4 text-gray-700">{announcement.title}</td>
                                <td className="px-6 py-4 text-gray-700">{announcement.description}</td>
                                <td className="px-6 py-4 text-gray-700">{announcement.createdAt}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(announcement.id)}
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

            {/* Add Announcement Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Announcement</h2>
                            <form onSubmit={handleAddAnnouncement}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Announcement Title
                                    </label>
                                    <input
                                        type="text"
                                        value={newAnnouncement.title}
                                        onChange={(e) =>
                                            setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        * Description
                                    </label>
                                    <textarea
                                        value={newAnnouncement.description}
                                        onChange={(e) =>
                                            setNewAnnouncement({ ...newAnnouncement, description: e.target.value })
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        rows="4"
                                        required
                                    ></textarea>
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
