import React from 'react'
import Magnifier from '../Icons/Magnifier'

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center">
      <input className="rounded-md w-4/5 mr-1" />
      <Magnifier />
    </div>
  )
}
