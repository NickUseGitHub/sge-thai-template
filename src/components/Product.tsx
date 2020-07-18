import React from 'react'
import { Product as ProductType } from '../types'

interface ProductProps extends ProductType {
  onClick?: () => void
}

export default function Product({ thumbnail, title, onClick }: ProductProps) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-6 flex flex-col">
      <a {...(typeof onClick === 'function' ? { onClick } : { href: '#' })}>
        <img className="hover:grow hover:shadow-lg" src={thumbnail} />
        <div className="pt-3 flex h-20 items-start justify-start">
          <p className="text-left">{title}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="pt-1 text-gray-900">£9.99</p>
          <button className="rounded-full p-2 bg-theme text-sm">Buy now</button>
        </div>
      </a>
    </div>
  )
}
