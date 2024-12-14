"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    // Determine if we are in a specific admin section
    const pathSegments = pathname.split("/"); // Split path into segments
    const isAdminSection = pathSegments[1] === "admin"; // Check if the path starts with 'admin'

    const title = isAdminSection ? "Admin Portal" : "Dashboard";

    // Admin-specific menu
    const adminMenuItems = [
        { name: "Dashboard", href: "/admin" },
        { name: "Manage Users", href: "/admin/users" },
        { name: "Manage Instructors", href: "/admin/instructors" }, // New Menu Item
        { name: "Manage Courses", href: "/admin/courses" },

    ];

    return (
        <div className="flex flex-col h-screen">
            {/* Top Navbar */}
            <header className="bg-black text-white pt-5 px-6">
                <div className="text-3xl font-bold mb-4">{title}</div>
                <nav className="flex space-x-6">
                    {adminMenuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-lg pb-2 ${
                                pathname === item.href
                                    ? "border-b-2 border-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 overflow-y-auto p-6">{children}</main>
        </div>
    );
}
