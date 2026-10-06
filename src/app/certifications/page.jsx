import Link from "next/link";
import { ORACLE_CERTIFICATIONS, getCourse } from "@/data/courses";

export const metadata = {
  title: "Oracle Certifications | PrimeX Solution",
  description: "Prepare for Oracle certification exams with PrimeX Solution video courses.",
};

const levelStyles = {
  Foundations: "bg-green-100 text-green-700",
  Associate: "bg-blue-100 text-blue-700",
  Professional: "bg-purple-100 text-purple-700",
};

export default function CertificationsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col pt-5 md:p-12">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">Oracle Certifications</h1>
        <p className="text-sm text-gray-600 mt-2 md:mt-4 md:text-base lg:text-lg">
          Every PrimeX Solution course prepares you for an official Oracle certification exam and includes a certificate of completion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ORACLE_CERTIFICATIONS.map((cert) => {
          const course = getCourse(cert.courseId);
          return (
            <div key={cert.id} className="bg-white shadow-md rounded-lg p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded ${levelStyles[cert.level]}`}>{cert.level}</span>
                <span className="text-sm font-semibold">Exam {cert.exam}</span>
              </div>
              <h2 className="text-lg font-bold mt-3">{cert.name}</h2>
              <p className="text-sm text-gray-600 mt-2 flex-1">{cert.summary}</p>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs uppercase tracking-wide text-gray-500">Prep course</p>
                <Link href={`/courses/${course.id}`} className="text-sm font-medium underline hover:text-purple-700">
                  {course.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">How it works</h2>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
          <li>Enroll in the prep course for the certification you want.</li>
          <li>Watch every video lecture to earn your PrimeX Solution certificate of completion.</li>
          <li>Book the official exam with Oracle University when you are ready.</li>
        </ol>
      </div>
    </div>
  );
}
