import React from 'react'

interface PromotionListProps {
  title?: string
  amount?: number
}

export default function PromotionList({
  amount = 3,
  title = 'Promotions',
}: PromotionListProps) {
  return (
    <section>
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              {title}
            </a>
          </div>
        </nav>

        <div className="w-full flex flex-wrap">
          {[...new Array(amount)].map((_, index) => (
            <div
              key={`promotion_${index}`}
              className="w-full md:w-1/3 p-3 cursor-pointer"
            >
              <img
                className="mb-4"
                src="https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              />
              <span className="text-xl">Promotion</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
