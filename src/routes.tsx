import React from 'react'
import { generateUrl } from './utils/url'
import Home from './pages/Home'
import About from './pages/About'

export interface RouteApp {
  name: string
  uri: string
  component: (props?: JSX.IntrinsicAttributes) => JSX.Element
}

export default ([
  {
    name: 'Home',
    uri: generateUrl('/'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <Home {...props} />,
  },
  {
    name: 'About',
    uri: generateUrl('/about'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <About {...props} />,
  },
] as unknown) as RouteApp[]
