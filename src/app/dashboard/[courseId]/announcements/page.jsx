"use client";
import React, { useState } from "react";

const Announcements = () => {
  // Inline JSON data for announcements
  const announcements = [
    {
      id: 1,
      title: "New Quiz Available",
      date: "2024-01-01",
      content: "Check out the new quiz on Design Basics.",
    },
    {
      id: 2,
      title: "Upcoming Event",
      date: "2024-02-10",
      content: "Join us for the live webinar on Color Theory.",
    },
    {
      id: 3,
      title: "System Maintenance",
      date: "2024-03-05",
      content: "The system will be down for maintenance.",
    },
  ];

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null); // Selected announcement for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  const openModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Announcements</h1>

      {/* Announcements List */}
      {announcements.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold mb-2">
                {announcement.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{announcement.date}</p>
              <button
                onClick={() => openModal(announcement)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          No announcements available.
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/2 p-6">
            <h2 className="text-xl font-bold mb-4">
              {selectedAnnouncement.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Date: {selectedAnnouncement.date}
            </p>
            <p className="text-gray-700 mb-6">{selectedAnnouncement.content}</p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcements;
