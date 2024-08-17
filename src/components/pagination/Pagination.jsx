import React from 'react'

const Pagination = () => {
  return (
    <div className="flex justify-between mb-8">
      <button className="min-w-28 bg-red-600 text-white px-4 py-2 rounded">Previous</button>
      <button className="min-w-28 bg-red-600 text-white px-4 py-2 rounded">Next</button>
    </div>
  )
}

export default Pagination