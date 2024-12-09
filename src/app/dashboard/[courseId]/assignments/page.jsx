"use client";
import { useState } from "react";

const AssignmentsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const assignments = [
        {
            id: 1,
            title: "Conducting User Research",
            course: "User Research and Personas",
            dueDate: "July 1, 2024",
            status: "Done",
            statusClass: "bg-green-100 text-green-700",
            submitAction: "Submitted",
        },
        {
            id: 2,
            title: "Competitive Analysis Report",
            course: "Competitive Analysis in UX",
            dueDate: "July 25, 2024",
            status: "Progress",
            statusClass: "bg-blue-100 text-blue-700",
            submitAction: "Upload",
        },
        {
            id: 3,
            title: "Creating Wireframes",
            course: "Wireframing and Prototyping",
            dueDate: "August 1, 2024",
            status: "Progress",
            statusClass: "bg-blue-100 text-blue-700",
            submitAction: "Upload",
        },
        {
            id: 4,
            title: "Usability Testing and Feedback",
            course: "Usability Testing and Iterations",
            dueDate: "August 22, 2024",
            status: "Pending",
            statusClass: "bg-red-100 text-red-700",
            submitAction: "Upload",
        },
        {
            id: 5,
            title: "Developing Visual Design",
            course: "Visual Design and Branding",
            dueDate: "August 29, 2024",
            status: "Pending",
            statusClass: "bg-red-100 text-red-700",
            submitAction: "Upload",
        },
        {
            id: 6,
            title: "Creating a Design System",
            course: "Design Systems and Components",
            dueDate: "September 5, 2024",
            status: "Pending",
            statusClass: "bg-red-100 text-red-700",
            submitAction: "Upload",
        },
    ];

    const totalPages = Math.ceil(assignments.length / rowsPerPage);
    const visibleAssignments = assignments.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Assignments</h1>
            <p className="text-gray-600 mb-6">
                View and manage your course assignments
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-300 rounded-lg">
                    <thead className="bg-gray-100 text-left hidden md:table-header-group">
                        <tr>
                            <th className="p-3 border-b border-gray-300">Assignment Title</th>
                            <th className="p-3 border-b border-gray-300">Course/Lessons</th>
                            <th className="p-3 border-b border-gray-300">Due Date</th>
                            <th className="p-3 border-b border-gray-300">Status</th>
                            <th className="p-3 border-b border-gray-300">Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleAssignments.map((assignment) => (
                            <tr
                                key={assignment.id}
                                className="flex flex-col md:table-row md:flex-none"
                            >
                                {/* Mobile view */}
                                <td
                                    className="p-3 border-b border-gray-200 flex flex-col md:table-cell md:flex-none"
                                >
                                    <span className="font-bold md:hidden">Assignment Title:</span>
                                    {assignment.title}
                                </td>
                                <td
                                    className="p-3 border-b border-gray-200 flex flex-col md:table-cell md:flex-none"
                                >
                                    <span className="font-bold md:hidden">Course/Lessons:</span>
                                    {assignment.course}
                                </td>
                                <td
                                    className="p-3 border-b border-gray-200 flex flex-col md:table-cell md:flex-none"
                                >
                                    <span className="font-bold md:hidden">Due Date:</span>
                                    {assignment.dueDate}
                                </td>
                                <td
                                    className="p-3 border-b border-gray-200 flex flex-col md:table-cell md:flex-none"
                                >
                                    <span className="font-bold md:hidden">Status:</span>
                                    <span
                                        className={`px-2 py-1 text-sm rounded-md ${assignment.statusClass}`}
                                    >
                                        {assignment.status}
                                    </span>
                                </td>
                                <td
                                    className="p-3 border-b border-gray-200 flex flex-col md:table-cell md:flex-none"
                                >
                                    <span className="font-bold md:hidden">Submit:</span>
                                    {assignment.submitAction === "Submitted" ? (
                                        <span className="text-gray-500">Submitted</span>
                                    ) : (
                                        <button className="text-blue-600 hover:underline">
                                            {assignment.submitAction}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                <div className="flex items-center">
                    <label htmlFor="rowsPerPage" className="text-sm text-gray-600">
                        Show
                    </label>
                    <select
                        id="rowsPerPage"
                        className="ml-2 p-2 border border-gray-300 rounded-md text-sm"
                        value={rowsPerPage}
                        onChange={(e) => {
                            setRowsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                    <span className="ml-2 text-sm text-gray-600">Row</span>
                </div>

                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 rounded-md ${
                                currentPage === index + 1
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            }`}
                            onClick={() => handlePagination(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssignmentsPage;
