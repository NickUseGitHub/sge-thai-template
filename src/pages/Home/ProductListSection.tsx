import React from 'react'
import { mockProducts } from '../../configs'
import Product from '../../components/Product'
import FlashSale from './FlashSale'
import useRouterHistory from '../../hooks/useRouterHistory'

interface ProductListProps {
  title: string
  page?: number
  isFlashSale?: boolean
  limit?: number
}

export default function ProductListSection({
  title,
  page = 1,
  isFlashSale,
  limit,
}: ProductListProps) {
  const goto = useRouterHistory()

  const productToShow = [...new Array(page)]
    .map(() => mockProducts)
    .reduce(
      (prevProducts, paginatedProduct) => [
        ...prevProducts,
        ...paginatedProduct,
      ],
      [],
    )

  const onProductClick = (index: number) => () => goto(`/products/${index}`)

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
          {productToShow.slice(0, limit).map((product, index) => (
            <Product
              key={`product_${index}`}
              thumbnail={product.thumbnail}
              title={product.title}
              onClick={onProductClick(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
