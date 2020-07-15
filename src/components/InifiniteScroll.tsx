/* global document, window */
import React, { useRef } from 'react'
import { Waypoint } from 'react-waypoint'

interface InifiniteScrollProps {
  onEnter: () => void
  offset?: number
}

export default function InifiniteScroll({
  onEnter,
  offset = 0,
}: InifiniteScrollProps) {
  const timeoutId = useRef<number | null>(null)

  const handleOnEnter = (callback: () => void) => () => {
    const pixelScrolled =
      document.body.scrollTop || document.documentElement.scrollTop

    callback()

    timeoutId.current = window.setTimeout(() => {
      const top = pixelScrolled + window.innerHeight / 2
      window.scrollTo(0, top)
    }, 3000)
  }

  const handleOnLeave = () => {
    if (!timeoutId.current) return

    window.clearTimeout(timeoutId.current)
  }

  return (
    <Waypoint
      onEnter={handleOnEnter(onEnter)}
      onLeave={handleOnLeave}
      bottomOffset={`-${offset}px`}
      fireOnRapidScroll={false}
    >
      <div className="loading">...Loading</div>
    </Waypoint>
  )
}
