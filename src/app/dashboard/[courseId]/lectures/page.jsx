"use client";
import { useParams } from "next/navigation";
import CourseLearning from "@/components/CourseLearning";

const CourseDetailPage = () => {
    const { courseId } = useParams();

    return <CourseLearning courseId={courseId} />;
};

export default CourseDetailPage;
