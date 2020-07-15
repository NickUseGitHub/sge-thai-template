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
        "url('https://www.sgethai.com/wp-content/uploads/2018/12/เครื่องซีลสูญญากาศ-slide-3.jpg')",
      content1: 'VACUUM BAGS - ถุงซีลสูญญากาศ ราคาส่ง ถูกที่สุดในประเทศไทย',
      content2: 'ช๊อปปิ้ง ถุงซีลสูญญากาศ',
    },
    {
      backgroundImage:
        "url('https://www.sgethai.com/wp-content/uploads/2018/12/เครื่องซีลสูญญากาศ-vacuum-sealer-slide-2.jpg')",
      content1: 'ซีลสูญญากาศถุงได้ทุกชนิด ทำงานต่อเนื่อง 24 ชั่วโมง',
      content2: 'ช๊อปปิ้ง ซีลสูญญากาศถุง',
    },
  ]

  const handleNavigatorClick = (direction: 'prev' | 'next') => () => {
    let nextActiveIndex = activeIndex
    nextActiveIndex = activeIndex + (direction === 'next' ? 1 : -1)

    if (nextActiveIndex === carouselItems.length + 1) nextActiveIndex = 1
    if (nextActiveIndex === -1) nextActiveIndex = carouselItems.length

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
