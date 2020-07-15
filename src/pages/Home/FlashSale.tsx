/* global window */
import React, { useState, useEffect } from 'react'
import './FlashSale.css'
import { pad } from '../../utils/textHelper'

export default function FlashSale() {
  const [countTime, setCounttime] = useState<number>(2 * 60 * 60)

  useEffect(function () {
    const newCountTime = countTime - 1
    const timeoutId = window.setTimeout(
      () => setCounttime(newCountTime > 0 ? newCountTime : 0),
      1000,
    )

    return () => window.clearTimeout(timeoutId)
  })

  const hour = Math.floor(countTime / (60 * 60))
  const minute = Math.floor((countTime / 60) % 60)
  const second = countTime % 60

  return (
    <div className="w-full flashsale p-3 text-white">
      <span className="font-bold text-xl">Flashsale ends in</span>
      <span className="p-2">
        {pad(hour, 2)}:{pad(minute, 2)}:{pad(second, 2)}
      </span>
    </div>
  )
}
