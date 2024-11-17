import React from 'react'

const Courses = () => {
    const cardData = [
        
            {
              id: 1,
              image: "/images/python-course-1.jpg",
              title: "The Complete Python Bootcamp",
              author: "Jose Portilla",
              rating: 4.6,
              reviews: "522,184",
              price: "$69.99",
            },
            {
              id: 2,
              image: "/images/python-course-2.jpg",
              title: "100 Days of Code: Python Pro Bootcamp",
              author: "Dr. Angela Yu",
              rating: 4.7,
              reviews: "333,927",
              price: "$69.99",
              tag: "Bestseller",
            },
            {
                id: 2,
                image: "/images/python-course-2.jpg",
                title: "100 Days of Code: Python Pro Bootcamp",
                author: "Dr. Angela Yu",
                rating: 4.7,
                reviews: "333,927",
                price: "$69.99",
                tag: "Bestseller",
              },
    ]
    return (
        <div className="container mx-auto p-6">
              <div className="flex flex-col pt-5">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
       Learners are Viewing
      </h1>
    
    </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={card.image}
            alt={card.title}
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{card.author}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span> {card.rating}
            </span>
            <span>{card.reviews} reviews</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-lg">{card.price}</span>
            {card.tag && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                {card.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
            
        
        </div>
    )
}

export default Courses
