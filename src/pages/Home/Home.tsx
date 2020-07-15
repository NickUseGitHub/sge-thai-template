import React from 'react'
import Banner from '../../components/Banner'
import HomeLineSection from './HomeLineSection'
import ProductListSection from './ProductListSection'
import WhyUseUs from './WhyUseUs'
import PromotionList from './PromotionList'

export default function Home() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <ProductListSection title="Flash sale!!" isFlashSale />
      <ProductListSection title="Best selling" />
      <PromotionList />
      <WhyUseUs />
      <HomeLineSection />
    </div>
  )
}
