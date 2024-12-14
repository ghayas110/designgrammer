"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    // Determine if we're in the course detail page or the main dashboard

    const pathSegments = pathname.split("/"); // Split path into segments
    
    const courseId = pathSegments[2]; // Extract courseId
    // const videoId = pathSegments[3]; // Extract videoId (if needed)
    // Dynamically set the title and menu based on the current page
    const isCourseDetail = pathname.startsWith(`/dashboard/${courseId}`);
    const title = isCourseDetail ? "Course Title" : "My Learning"; // Replace "Course Title" dynamically
    const menuItems = isCourseDetail
        ? [
              { name: "Lectures", href: `/dashboard/${courseId}/lectures`, icon: "🎥" },
              { name: "Assignments", href: `/dashboard/${courseId}/assignments`, icon: "📝" },
              { name: "Quizzes", href: `/dashboard/${courseId}/quizzes`, icon: "❓" },
              { name: "Announcements", href: `/dashboard/${courseId}/announcements`, icon: "📢" },
          ]
        : [
              { name: "All Courses", href: "/dashboard" },
         
          ];

    return (
        <div className="flex flex-col h-screen">
            {/* Top Navbar */}
            <header className="bg-black text-white pt-5 px-6">
                <div className="text-3xl font-bold mb-4">{title}</div>
                <nav className="flex space-x-6">
                    {menuItems.map((item) => (
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
