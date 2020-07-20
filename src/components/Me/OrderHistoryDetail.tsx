import React from 'react'
import CartItem from '../Cart/CartItem'
import { mockProducts } from '../../configs'
import useRouterHistory from '../../hooks/useRouterHistory'

export default function OrderHistoryDetail() {
  const goto = useRouterHistory()
  const gotoPaymentPage = () => goto('/payment')

  return (
    <div className="w-full px-4 mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between text-left text-2xl font-bold">
        <span>Order History Detail</span>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row">
        {/* Item List */}
        <div className="w-full md:w-3/5 p-2">
          <div className="w-full">
            {mockProducts.slice(0, 3).map((product) => (
              <CartItem
                readonly
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
              <li className="w-full flex justify-between text-left my-2">
                <span>ชื่อ - นามสกุล</span>
                <span>นกน้อย อยากบิน</span>
              </li>
              <li className="w-full flex justify-between text-left my-2">
                <span>อีเมล์</span>
                <span>email@email.com</span>
              </li>
              <li className="w-full flex justify-between text-left my-2">
                <span>ที่อยู่</span>
                <span>12/388 อ.​ อำเภอ ต.ตำบล จ.จังหวัด 10400</span>
              </li>
              <li className="w-full flex justify-between text-left my-2">
                <span>โทร</span>
                <span>099-999-9999</span>
              </li>
            </ul>
          </div>
        </div>
        {/* End Item List */}

        <div className="w-full md:w-2/5">
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
            <span className="font-bold text-sm md:text-xl">Promotion code</span>
            <span className="font-bold text-black text-lg md:text-2xl">
              PROCODE
            </span>
          </div>
          {/* end Promotion Code */}

          <div className="w-full flex justify-end py-4">
            <button
              className="w-full md:w-1/3 bg-green-600 p-2 text-white rounded-full"
              onClick={gotoPaymentPage}
            >
              Checkout
            </button>
          </div>
        </div>
        {/* end cart info */}
      </div>
    </div>
  )
}
