import React from 'react'
import { generateUrl } from './utils/url'
import Home from './pages/Home/Home'
import ProductListPage from './pages/Product/List'
import ProductDetail from './pages/Product/Detail'
import PromotionListPage from './pages/Promotion/List'
import PromotionDetail from './pages/Promotion/Detail'
import About from './pages/About'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import MePage from './pages/Me'
import RewardsPage from './pages/Rewards'
import Login from './pages/Authen/Login'

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
    name: 'RewardList',
    uri: generateUrl('/rewards'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <RewardsPage {...props} />,
  },
  {
    name: 'PromotionList',
    uri: generateUrl('/promotions'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => (
      <PromotionListPage {...props} />
    ),
  },
  {
    name: 'PromotionDetail',
    uri: generateUrl('/promotions/:id'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => (
      <PromotionDetail {...props} />
    ),
  },
  {
    name: 'ProductList',
    uri: generateUrl('/products'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => (
      <ProductListPage {...props} />
    ),
  },
  {
    name: 'ProductDetail',
    uri: generateUrl('/products/:id'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <ProductDetail {...props} />,
  },
  {
    name: 'PaymentGateway',
    uri: generateUrl('/payment'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <Payment {...props} />,
  },
  {
    name: 'Member',
    uri: generateUrl('/me'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <MePage {...props} />,
  },
  {
    name: 'Login',
    uri: generateUrl('/login'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <Login {...props} />,
  },
  {
    name: 'Cart',
    uri: generateUrl('/cart'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <Cart {...props} />,
  },
  {
    name: 'About',
    uri: generateUrl('/about'),
    // eslint-disable-next-line react/display-name
    component: (props: JSX.IntrinsicAttributes) => <About {...props} />,
  },
] as unknown) as RouteApp[]
