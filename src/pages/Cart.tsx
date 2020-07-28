import React from 'react'
import Banner from '../components/Banner'
import { mockProducts } from '../configs'
import CartItem from '../components/Cart/CartItem'
import useRouterHistory from '../hooks/useRouterHistory'

export default function ProductsPage() {
  const goto = useRouterHistory()

  const gotoPaymentPage = () => goto('/payment')

  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <h1 className="w-full text-3xl text-left underline px-2 md:px-0">
            ตะกร้าสินค้า
          </h1>

          <div className="w-full flex flex-col md:flex-row mt-10">
            {/* Item List */}
            <div className="w-full md:w-3/5 p-2">
              <div className="w-full">
                {mockProducts.slice(0, 3).map((product) => (
                  <CartItem
                    key={product.title}
                    title={product.title}
                    thumbnail={product.thumbnail}
                  />
                ))}
              </div>
              <div className="w-full flex flex-col items-start mt-10">
                <span className="text-xl text-left font-bold underline">
                  ข้อมูลผู้รับสินค้า
                </span>
                <ul className="w-full">
                  <li className="w-full flex flex-col text-left my-2">
                    <span>ชื่อ - นามสกุล</span>
                    <input className="border-2" />
                  </li>
                  <li className="w-full flex flex-col text-left my-2">
                    <span>ที่อยู่</span>
                    <input className="border-2" />
                  </li>
                  <li className="w-full flex flex-col text-left my-2">
                    <span>อีเมล์</span>
                    <input className="border-2" />
                  </li>
                  <li className="w-full flex flex-col text-left my-2">
                    <span>โทร</span>
                    <input className="border-2" />
                  </li>
                </ul>
              </div>
            </div>
            {/* End Item List */}

            {/* cart info */}
            <div className="w-full md:w-2/5 p-2">
              <div className="flex flex-col border-2 p-2">
                <span className="text-lg font-bold border-b-2">Summary</span>
                <div className="w-full">
                  <ul className="w-full p-4">
                    <li className="w-full flex justify-between">
                      <span>ราคาสินค้า</span>
                      <span className="pt-1 text-gray-900">£99.99</span>
                    </li>
                    <li className="w-full flex justify-between">
                      <span>ส่วนลด</span>
                      <span className="pt-1 text-red-900">- £9.99</span>
                    </li>
                    <li className="w-full flex justify-between border-b-2">
                      <span>ราคาค่าจัด</span>
                      <span className="pt-1 text-gray-900">£9.99</span>
                    </li>
                    <li className="w-full flex justify-between items-center">
                      <span>ราคารวมทั้งสิ้น</span>
                      <span className="pt-1 text-2xl text-gray-900 font-bold">
                        £99.99
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Promotion Code */}
              <div className="w-full bg-red-300 flex justify-between items-center mt-4 p-4">
                <span className="font-bold text-sm md:text-xl">
                  Promotion code
                </span>
                <input className="w-1/2 pt-1 md:pt-2" />
              </div>
              {/* end Promotion Code */}

              <div className="w-full flex justify-end py-4">
                <button className="w-full md:w-1/2 m-2 bg-orange-600 p-2 text-white rounded-full">
                  Get Rewards
                </button>
                <button
                  className="w-full md:w-1/2 m-2 bg-green-600 p-2 text-white rounded-full"
                  onClick={gotoPaymentPage}
                >
                  Checkout
                </button>
              </div>
            </div>
            {/* end cart info */}
          </div>
        </div>
      </section>
    </div>
  )
}
