import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { id } = useParams<{ id: string }>()

  return <div>{id}</div>
}
