import React from 'react'

interface FilterBoxProps {
  amount?: number
  cssTitleClass?: string
  categoryName?: string
  title?: string
}

export default function FilterBox({
  amount = 3,
  categoryName = 'Category',
  cssTitleClass = 'text-lg',
  title = 'Filter by',
}: FilterBoxProps) {
  return (
    <div className="w-full flex flex-col items-start mb-6">
      <h3 className={`underline text-left ${cssTitleClass}`}>{title}</h3>
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
