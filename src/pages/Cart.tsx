import React from 'react'
import Banner from '../components/Banner'
import { mockProducts } from '../configs'
import CartItem from '../components/Cart/CartItem'

export default function ProductsPage() {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <h1 className="w-full text-3xl text-left underline px-2 md:px-0">
            ตะกร้าสินค้า
          </h1>

          <div className="w-full flex">
            {/* Item List */}
            <div className="w-full md:w-3/4 p-2 mt-10">
              {mockProducts.slice(0, 3).map((product) => (
                <CartItem
                  key={product.title}
                  title={product.title}
                  thumbnail={product.thumbnail}
                />
              ))}
            </div>
            {/* End Item List */}
          </div>
        </div>
      </section>
    </div>
  )
}
