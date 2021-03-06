import React, { useState } from 'react'
import Banner from '../../components/Banner'
import PromotionList from '../../components/PromotionList'
import InifiniteScroll from '../../components/InifiniteScroll'
import FiltersBar from '../../components/FiltersBar'

export default function PromotionsPage() {
  const maxAmount = 39
  const [amoutPromotion, setAmoutPromotion] = useState<number>(15)

  const onEnterBottomScreen = () => {
    if (amoutPromotion > maxAmount) return

    setAmoutPromotion(amoutPromotion + 6)
  }

  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <FiltersBar title="Promotion filters" buttonAmount={5} />
      <PromotionList title="โปรโมชั่นต่างๆ" amount={amoutPromotion} />
      <InifiniteScroll onEnter={onEnterBottomScreen} />
    </div>
  )
}
