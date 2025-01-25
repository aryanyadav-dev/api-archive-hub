'use client'
import { useState } from 'react'

const categories = [
  'All', 'Editing', 'Coding', 'Data Analysis', 'Machine Learning', 'Finance', 'Communication'
]

const ApiCategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState()

  return (
    <div className="space-y-12">
      {/* APIs based on selected category */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">{selectedCategory}</h2>
          <span className="text-sm text-teal-200"></span>
        </div>
        {/* Here you would render your APIs based on the selectedCategory */}
      </div>
    </div>
  )
}

export default ApiCategoryList
