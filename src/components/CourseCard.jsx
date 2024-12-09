"use client";
import { useRouter } from "next/navigation";

const CourseCard = ({ course }) => {
    const router = useRouter();

    const handleStartCourse = () => {
        router.push(`/dashboard/${course.id}`);
    };

    return (
        <div className="p-4 bg-white rounded-md shadow-md">
            <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-4">{course.title}</h3>
            <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-sm text-gray-600">Progress: {course.progress}%</p>
            <p className="text-sm text-gray-600">Rating: ⭐ {course.rating}</p>
            <button
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md"
                onClick={handleStartCourse}
            >
                Start Course
            </button>
        </div>
    );
};

export default CourseCard;
