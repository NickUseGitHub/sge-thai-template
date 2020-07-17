import React from 'react'

interface FilterBoxProps {
  title?: string
  categoryName?: string
  amount?: number
}

export default function FilterBox({
  title = 'Filter by',
  categoryName = 'Category',
  amount = 3,
}: FilterBoxProps) {
  return (
    <div className="w-full flex flex-col items-start mb-6">
      <h3 className="text-lg underline text-left">{title}</h3>
      <ul>
        {[...new Array(amount)].map((_, index) => (
          <li key={`${categoryName}_filter_${index}`}>
            <input className="cursor-pointer mr-1" type="checkbox" />
            <span>
              {categoryName} {index + 1}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
