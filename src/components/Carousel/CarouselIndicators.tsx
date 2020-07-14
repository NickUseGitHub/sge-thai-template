import React from 'react'

interface CarouselIndicatorsProps {
  totalBanner: number
  handleIndicatorOnClick: (indexTarget: number) => () => void
}

export default function CarouselIndicators({
  totalBanner,
  handleIndicatorOnClick,
}: CarouselIndicatorsProps) {
  return (
    <ol className="carousel-indicators">
      {[...new Array(totalBanner)].map((_, index) => {
        const indexTarget = index + 1

        return (
          <li
            key={`indicator_${indexTarget}`}
            className="inline-block mr-3"
            onClick={handleIndicatorOnClick(indexTarget)}
          >
            <label className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">
              •
            </label>
          </li>
        )
      })}
    </ol>
  )
}
