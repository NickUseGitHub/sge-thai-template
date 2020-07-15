import React from 'react'
import { mockProducts } from '../../configs'
import Product from '../../components/Product'
import FlashSale from './FlashSale'

interface ProductListProps {
  title: string
  isFlashSale?: boolean
}

export default function ProductListSection({
  title,
  isFlashSale,
}: ProductListProps) {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {isFlashSale && <FlashSale />}
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              {title}
            </a>

            <div className="flex items-center" id="store-nav-content">
              <button className="rounded-full p-3 bg-gray-200">
                สินค้าอื่นๆ
              </button>
            </div>
          </div>
        </nav>

        <div className="w-full flex flex-wrap">
          {mockProducts.map((product, index) => (
            <Product
              key={`product_${index}`}
              thumbnail={product.thumbnail}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
