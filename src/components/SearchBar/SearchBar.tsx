import React, { useState } from 'react'
import Magnifier from '../Icons/Magnifier'
import './SearchBar.css'
import { Product } from '../../types'
import { mockProducts } from '../../configs'

function SearchResultItem({ product }: { product: Product }) {
  return (
    <div className="w-full flex p-2 hover:bg-gray-300">
      <div className="h-16 w-1/3">
        <img className="h-full w-auto" src={product.thumbnail} />
      </div>
      <p className="w-2/3">
        {product.title} <br />
        <span className="pt-1 text-gray-900">£9.99</span>
      </p>
    </div>
  )
}

export default function SearchBar() {
  const [isShowResult, setIsShowResult] = useState<boolean>(false)

  const handleOnClick = () => setIsShowResult(!isShowResult)

  return (
    <div className="w-full flex flex-col relative">
      <div className="flex justify-center" onClick={handleOnClick}>
        <input className="rounded-md w-4/5 mr-1" />
        <Magnifier />
      </div>
      {isShowResult && (
        <div className="flex flex-wrap justify-center relative md:absolute m-auto mt-2 box-result">
          {mockProducts.map((product) => (
            <SearchResultItem key={product.title} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
