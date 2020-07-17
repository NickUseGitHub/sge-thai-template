import React, { useState } from 'react'

interface ButtonFilterProps {
  title?: string
}

function ButtonFilter({ title = 'Category' }: ButtonFilterProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const onButtonClick = () => setIsActive(!isActive)

  return (
    <button
      className={`rounded-full border-2 border-black text-sm p-2 mr-2 mb-2 outline-none ${
        isActive ? 'bg-green-300' : ''
      }`}
      onClick={onButtonClick}
    >
      {title}
    </button>
  )
}

interface FiltersBarProps {
  title?: string
  buttonAmount?: number
  buttonTitle?: string
}

export default function FiltersBar({
  title = 'Category Filters',
  buttonAmount = 3,
  buttonTitle = 'Category',
}: FiltersBarProps) {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap">
        <h3 className="font-bold text-xl mb-2 p-2">{title}</h3>
        <div className="w-full flex flex-wrap p-2">
          {[...new Array(buttonAmount)].map((_, index) => (
            <ButtonFilter key={`btn_filter_${index}`} title={buttonTitle} />
          ))}
        </div>
      </div>
    </section>
  )
}
