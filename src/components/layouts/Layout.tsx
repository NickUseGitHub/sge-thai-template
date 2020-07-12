import React from 'react'
import NavMenu from './NavMenu'

interface LayoutProps {
  children?: any
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  )
}
