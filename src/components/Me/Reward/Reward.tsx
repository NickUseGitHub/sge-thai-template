import React, { useState } from 'react'
import { Reward as RewardType } from '../../../types'

interface RewardProps extends RewardType {
  className?: string
}

export default function Reward({
  thumbnail,
  title,
  className = 'w-full md:w-1/4 my-2 md:m-2',
}: RewardProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleOnClick = () => setIsActive(!isActive)

  return (
    <div
      className={`${className} ${isActive ? 'bg-green-200' : ''}`}
      onClick={handleOnClick}
    >
      <div className="w-full p-3">
        <img src={thumbnail} />
      </div>
      <div className="w-full flex justify-between items-center px-2">
        <span className="text-2xl">{title}</span>
        <span className="text-orange-400 text-2xl">
          <i className="fa fa-rub" aria-hidden="true" /> 30
        </span>
      </div>
    </div>
  )
}
