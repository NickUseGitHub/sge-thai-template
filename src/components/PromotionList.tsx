import React from 'react'
import useRouterHistory from '../hooks/useRouterHistory'
import Promotion from './Promotion'

interface PromotionListProps {
  title?: string
  amount?: number
}

export default function PromotionList({
  amount = 3,
  title = 'Promotions',
}: PromotionListProps) {
  const goto = useRouterHistory()

  const gotoPromotionList = () => goto('/promotions')
  const gotoPromotionDetail = (id: string) => () => goto(`/promotions/${id}`)

  return (
    <section>
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              onClick={gotoPromotionList}
            >
              {title}
            </a>
          </div>
        </nav>

        <div className="w-full flex flex-wrap">
          {[...new Array(amount)].map((_, index) => (
            <Promotion
              title="Promotion"
              key={`promotion_${index}`}
              onClick={gotoPromotionDetail(String(index))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
