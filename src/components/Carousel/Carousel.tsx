import React, { useState } from 'react'
import CarouselItem, { CarouselItemProps } from './CarouselItem'
import CarouselIndicators from './CarouselIndicators'

import './Carousel.css'

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(1)

  const carouselItems: Omit<
    CarouselItemProps,
    'checked' | 'handleNavigatorClick' | 'index'
  >[] = [
    {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
      content1: 'Stripy Zig Zag Jigsaw Pillow and Duvet Set',
      content2: 'view product',
    },
    {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80')",
      content1: 'Real Bamboo Wall Clock',
      content2: 'view product',
    },
    {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
      content1: 'Brown and blue hardbound book',
      content2: 'view product',
    },
  ]

  const handleNavigatorClick = (direction: 'prev' | 'next') => () => {
    let nextActiveIndex = activeIndex
    nextActiveIndex = activeIndex + (direction === 'next' ? 1 : -1)

    if (nextActiveIndex === 4) nextActiveIndex = 1
    if (nextActiveIndex === -1) nextActiveIndex = 3

    setActiveIndex(nextActiveIndex)
  }

  const handleIndicatorOnClick = (indexTarget: number) => () =>
    setActiveIndex(indexTarget)

  return (
    <div
      className="carousel relative container mx-auto"
      style={{
        maxWidth: '1600px',
      }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        {carouselItems &&
          carouselItems.map((carouselItem, index) => (
            <CarouselItem
              key={`ca_${index + 1}`}
              backgroundImage={carouselItem.backgroundImage}
              content1={carouselItem.content1}
              content2={carouselItem.content2}
              checked={activeIndex === index + 1}
              index={`${index + 1}`}
              handleNavigatorClick={handleNavigatorClick}
            />
          ))}

        <CarouselIndicators
          activeIndex={activeIndex}
          handleIndicatorOnClick={handleIndicatorOnClick}
          totalBanner={carouselItems.length}
        />
      </div>
    </div>
  )
}
