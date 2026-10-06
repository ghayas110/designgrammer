import React from 'react'
import Link from 'next/link'
import { COURSES, getCertification, getCourseImage } from '@/data/courses'

const Courses = () => {
    const cardData = [...COURSES].sort((a, b) => b.students - a.students).slice(0, 3)
    return (
        <div className="container mx-auto p-6">
              <div className="flex flex-col pt-5">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
       Learners are Viewing
      </h1>

    </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {cardData.map((card) => (
        <Link key={card.id} href={`/courses/${card.id}`} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
          <img
            src={getCourseImage(card)}
            alt={card.title}
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{card.instructor}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span> {card.rating}
            </span>
            <span>{card.reviews.toLocaleString("en-US")} reviews</span>
          </div>
          <p className="text-xs text-gray-600 mt-2">🎓 Oracle exam {getCertification(card).exam}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-lg">${card.price}</span>
            {card.badge && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                {card.badge}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>


        </div>
    )
}

export default Courses
