import React from 'react'
import Banner from '../../components/Banner'
import HomeLineSection from './HomeLineSection'
import ProductListSection from './ProductListSection'

export default function Home() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <ProductListSection title="Flash sale!!" isFlashSale />
      <ProductListSection title="สินค้ายอดนิยม" />
      <HomeLineSection />
    </div>
  )
}
