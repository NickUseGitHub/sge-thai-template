import React from 'react'
import Magnifier from '../Icons/Magnifier'

export default function OrderHistories() {
  return (
    <div className="w-full px-4 mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between text-left text-2xl font-bold">
        <span>Order Histories</span>
        <div className="flex md:justify-end items-center">
          <input className="w-4/5 md:w-1/2 rounded-lg border-2 mr-2 px-2" />
          <Magnifier />
        </div>
      </div>

      <div className="w-full mt-8">
        <ul className="w-full flex flex-col">
          {[...new Array(8)].map((_, index) => (
            <li
              key={`history_${index}`}
              className="w-full flex justify-between items-center p-2 m-1 border-b-2 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center text-left">
                <span className="md:mr-8">ref: #{index + 1}</span>
                <span className="md:mr-8">20 ก.ค 63 - 21:38</span>
                <span className="text-gray-900 md:mr-8">4,199.99 บาท</span>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <span className="rounded-lg bg-green-300 text-sm text-white p-1 md:mr-8">
                  สถานะ: ชำระแล้ว
                </span>
                <span>
                  <i className="fa fa-envelope-o" aria-hidden="true" />{' '}
                  ถามแอดมิน
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
