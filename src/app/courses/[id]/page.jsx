import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CoursePlayer from '@/components/CoursePlayer';
import {
  COURSES,
  getCertification,
  getChannels,
  getCourse,
  getCourseImage,
  getCourseStats,
} from '@/data/courses';

export function generateStaticParams() {
  return COURSES.map((course) => ({ id: String(course.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = getCourse(id);
  return { title: course ? `${course.title} | PrimeX Solution` : 'Course not found | PrimeX Solution' };
}

const CourseDetail = async ({ params }) => {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();

  const certification = getCertification(course);
  const { lectures, duration } = getCourseStats(course);
  const relatedCourses = COURSES.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div className="container mx-auto p-6">
      {/* Course Overview Section */}
      <section className="flex flex-col md:flex-row gap-6 bg-gray-100 p-6 rounded-lg">
        <div className="md:w-2/3">
          {course.badge && (
            <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded mb-3">{course.badge}</span>
          )}
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <p className="text-sm text-gray-600">
            Rating: ⭐ {course.rating} ({course.reviews.toLocaleString("en-US")} ratings) | {course.students.toLocaleString("en-US")} students enrolled
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {lectures} video lectures • {duration} total • {course.level} • Video lessons by {course.instructor}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-purple-700">
              Add to cart - ${course.price}
            </button>
            <span className="line-through text-gray-500">${course.originalPrice}</span>
          </div>
        </div>
        <div className="md:w-1/3">
          <Image src={getCourseImage(course)} alt={course.title} width={480} height={360} className="rounded-lg w-full h-auto" />
        </div>
      </section>

      {/* Certification Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Certification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5">
            <p className="text-xs uppercase tracking-wide text-gray-500">Prepares you for · {certification.level}</p>
            <h3 className="text-lg font-bold mt-1">{certification.name}</h3>
            <p className="text-sm font-medium mt-1">Exam {certification.exam}</p>
            <p className="text-gray-600 text-sm mt-2">{certification.summary}</p>
            <Link href="/certifications" className="inline-block text-sm underline mt-3 hover:text-purple-700">
              View all Oracle certifications
            </Link>
          </div>
          <div className="border rounded-lg p-5">
            <p className="text-xs uppercase tracking-wide text-gray-500">Included with this course</p>
            <h3 className="text-lg font-bold mt-1">PrimeX Solution Certificate of Completion</h3>
            <p className="text-gray-600 text-sm mt-2">
              Finish all {lectures} lectures to earn a certificate of completion you can add to your CV and LinkedIn profile.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">{"What you'll learn"}</h2>
        <ul className="list-disc list-inside">
          {course.learn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Course Videos Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-1">Course Videos</h2>
        <p className="text-sm text-gray-600 mb-4">
          {course.sections.length} sections • {lectures} lectures • {duration} total length
        </p>
        <CoursePlayer course={course} />
      </section>

      {/* Requirements Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
        <ul className="list-disc list-inside">
          {course.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Video Creators Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Video Creators</h2>
        <p className="text-gray-700">
          The lessons in this course are free YouTube videos published by {getChannels(course).join(', ')}.
          Use the &quot;Watch on YouTube&quot; link under each video to support the creators.
        </p>
      </section>

      {/* Related Courses Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Students also bought</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCourses.map((related) => (
            <Link key={related.id} href={`/courses/${related.id}`} className="p-4 bg-gray-100 rounded-lg hover:shadow-md">
              <Image src={getCourseImage(related)} alt={related.title} width={480} height={360} className="rounded-lg w-full h-40 object-cover" />
              <h3 className="mt-2 text-lg font-bold">{related.title}</h3>
              <p className="text-gray-700">${related.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
