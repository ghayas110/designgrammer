import React from 'react'

const Quizzes = () => {
    const quizzes = [
        {
          id: 1,
          title: "Introduction to Design",
          difficulty: "Easy",
          questions: 10,
          createdAt: "2024-01-01",
        },
        {
          id: 2,
          title: "Color Theory Basics",
          difficulty: "Medium",
          questions: 15,
          createdAt: "2024-01-15",
        },
        {
          id: 3,
          title: "Typography Fundamentals",
          difficulty: "Hard",
          questions: 20,
          createdAt: "2024-02-01",
        },
      ];
      
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Quizzes</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">#</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Title</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Difficulty</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Questions</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Created At</th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz, index) => (
              <tr key={quiz.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{quiz.title}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{quiz.difficulty}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{quiz.questions}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{quiz.createdAt}</td>
                <td className="px-4 py-2 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Quizzes
