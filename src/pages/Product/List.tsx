import React, { useState } from 'react'
import Banner from '../../components/Banner'
import InifiniteScroll from '../../components/InifiniteScroll'
import FilterBox from '../../components/FilterBox'
import Product from '../../components/Product'
import { mockProducts } from '../../configs'
import FilterTopBar from '../../components/FilterTopBar'

export default function PromotionsPage() {
  const maxPage = 3
  const [page, setPage] = useState<number>(1)

  const onEnterBottomScreen = () => {
    if (page > maxPage) return

    setPage(page + 1)
  }

  const productToShow = [...new Array(page)]
    .map(() => mockProducts)
    .reduce(
      (prevProducts, paginatedProducts) => [
        ...prevProducts,
        ...paginatedProducts,
      ],
      [],
    )

  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />

      <section className="bg-white py-8">
        <div className="container mx-auto flex items-start justify-start flex-wrap pt-4 pb-12">
          <FilterTopBar>
            <FilterBox
              cssTitleClass="text-sm"
              title="Filter by product category"
            />
            <FilterBox
              cssTitleClass="text-sm"
              title="Filter by product brand"
              categoryName="Brand"
            />
            <FilterBox
              cssTitleClass="text-sm"
              title="Filter by product price range"
              categoryName="Price"
            />
          </FilterTopBar>

          {/* Left panel */}
          <div className="hidden md:flex flex-col w-1/5  border-2 p-2">
            <FilterBox
              cssTitleClass="text-lg"
              title="Filter by product category"
            />
            <FilterBox
              cssTitleClass="text-lg"
              title="Filter by product brand"
              categoryName="Brand"
            />
            <FilterBox
              cssTitleClass="text-lg"
              title="Filter by product price range"
              categoryName="Price"
            />
          </div>
          {/* end Left panel */}
          {/* Right panel */}
          <div className="flex flex-col w-full md:w-4/5 p-4">
            <h3 className="text-xl font-bold text-left">สินค้า</h3>

            <div className="flex flex-wrap">
              {productToShow.map((product) => (
                <Product
                  key={product.title}
                  thumbnail={product.thumbnail}
                  title={product.title}
                />
              ))}

              <div className="w-full text-center">
                <InifiniteScroll onEnter={onEnterBottomScreen} />
              </div>
            </div>
          </div>
          {/* end Right panel */}
        </div>
      </section>
    </div>
  )
}
