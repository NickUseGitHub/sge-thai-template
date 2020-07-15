import React from 'react'
import Banner from '../../components/Banner'
import PromotionList from '../Home/PromotionList'

export default function PromotionsPage() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <PromotionList title="โปรโมชั่นต่างๆ" amount={15} />
    </div>
  )
}
