import React from 'react'
import NavMenu from './NavMenu'
import Footer from './Footer'

interface LayoutProps {
  children?: any
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  )
}
