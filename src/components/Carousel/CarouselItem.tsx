import React from 'react'

export interface CarouselItemProps {
  backgroundImage: string
  content1: string
  content2: string
  checked: boolean
  index: string
  handleNavigatorClick: (direction: 'prev' | 'next') => () => void
}

export default function CarouselItem({
  backgroundImage,
  content1,
  content2,
  checked,
  index,
  handleNavigatorClick,
}: CarouselItemProps) {
  return (
    <>
      <input
        className="carousel-open"
        type="radio"
        id={`carousel-${index}`}
        name="carousel"
        aria-hidden="true"
        hidden
        checked={checked}
      />
      <div
        className="carousel-item absolute opacity-0"
        style={{
          height: '50vh',
        }}
      >
        <div
          className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
          style={{
            backgroundImage,
          }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
              <p className="text-black text-2xl my-4">{content1}</p>
              <a
                className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="#"
              >
                {content2}
              </a>
            </div>
          </div>
        </div>
      </div>
      <label
        className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        onClick={handleNavigatorClick('prev')}
      >
        ‹
      </label>
      <label
        className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        onClick={handleNavigatorClick('next')}
      >
        ›
      </label>
    </>
  )
}
