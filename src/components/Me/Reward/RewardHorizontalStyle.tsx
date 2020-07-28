import React from 'react'
import { Reward as RewardType } from '../../../types'

interface RewardProps extends RewardType {
  className?: string
}

export default function RewardHorizontalStyle({
  thumbnail,
  title,
  className = 'w-full flex my-2 md:m-2',
}: RewardProps) {
  return (
    <div className={className}>
      <div className="w-1/3 p-3">
        <img src={thumbnail} />
      </div>
      <div className="w-2/3 flex flex-col justify-center items-end px-2">
        <span className="text-2xl">{title}</span>
        <span className="text-orange-400 text-2xl">
          <i className="fa fa-rub" aria-hidden="true" /> 30
        </span>
      </div>
    </div>
  )
}
