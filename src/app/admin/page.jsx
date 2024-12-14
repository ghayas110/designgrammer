"use client";

export default function AdminDashboard() {
    // Example data for dashboard statistics
    const stats = [
        { title: "Total Users", value: 1200, bgColor: "bg-blue-500" },
        { title: "Total Instructors", value: 75, bgColor: "bg-green-500" },
        { title: "Total Courses", value: 250, bgColor: "bg-purple-500" },
        { title: "Pending Reports", value: 12, bgColor: "bg-red-500" },
    ];

    const quickLinks = [
        { name: "Manage Users", href: "/admin/users", icon: "👤" },
        { name: "Manage Instructors", href: "/admin/instructors", icon: "🧑‍🏫" },
        { name: "Manage Courses", href: "/admin/courses", icon: "📚" },
        // { name: "View Reports", href: "/admin/reports", icon: "📊" },
        // { name: "Announcements", href: "/admin/announcements", icon: "📢" },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className={`p-6 rounded-lg shadow-md text-white ${stat.bgColor}`}
                    >
                        <h3 className="text-xl font-semibold">{stat.title}</h3>
                        <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Quick Links Section */}
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <div className="text-3xl mr-4">{link.icon}</div>
                        <div>
                            <h3 className="text-lg font-semibold">{link.name}</h3>
                            <p className="text-sm text-gray-500">Go to {link.name}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
