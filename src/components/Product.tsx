import React from 'react'
import { Product as ProductType } from '../types'

interface ProductProps extends ProductType {}

export default function Product({ thumbnail, title }: ProductProps) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-6 flex flex-col">
      <a href="#">
        <img className="hover:grow hover:shadow-lg" src={thumbnail} />
        <div className="pt-3 flex items-center justify-start">
          <p className="">{title}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="pt-1 text-gray-900">£9.99</p>
          <button className="rounded-full p-2 bg-gray-300 text-sm">
            Buy now
          </button>
        </div>
      </a>
    </div>
  )
}
