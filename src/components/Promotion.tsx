import React from 'react'

interface PromotionProps {
  title: string
  cssClass?: string
  thumbnail?: string
  onClick?: () => void
}

export default function Promotion({
  title,
  onClick,
  cssClass = 'w-full md:w-1/3 p-3 cursor-pointer',
  thumbnail = 'https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
}: PromotionProps) {
  return (
    <div
      className={cssClass}
      {...(typeof onClick === 'function'
        ? {
            onClick,
          }
        : {})}
    >
      <img className="mb-4" src={thumbnail} />
      <span className="text-xl">{title}</span>
    </div>
  )
}
