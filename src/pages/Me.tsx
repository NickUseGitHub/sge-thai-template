import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import Banner from '../components/Banner'
import useRouterHistory from '../hooks/useRouterHistory'
import Settings from '../components/Me/Settings'

export default function Me() {
  const { path } = useRouteMatch()
  const goto = useRouterHistory()

  const gotoPage = (page: string) => () => goto(page)

  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <Banner />

      {/* template holder */}
      <section className="bg-white py-8">
        <div className="w-full flex justify-end items-center">
          <div className="container mx-auto flex flex-col md:flex-row flex-wrap pt-2 pb-12">
            {/* panel left */}
            <div className="flex flex-col w-full md:w-1/5 border-2 p-2 py-4 md:vh-75">
              <h2 className="text-lg text-left underline mb-3">Hello User!</h2>
              <ul className="w-full flex flex-row md:flex-col items-center">
                <li className="w-full flex items-center justify-center md:justify-start p-3 py-1 cursor-pointer">
                  <i className="fa fa-list mr-0 md:mr-2" aria-hidden="true" />
                  <span className="hidden md:block">Order history</span>
                </li>
                <li className="w-full flex items-center justify-center md:justify-start p-3 py-1 cursor-pointer">
                  <i className="fa fa-cog mr-0 md:mr-2" aria-hidden="true" />
                  <span className="hidden md:block">Settings</span>
                </li>
                <li
                  className="w-full flex items-center justify-center md:justify-start p-3 py-1 cursor-pointer"
                  onClick={gotoPage('/')}
                >
                  <i
                    className="fa fa-sign-out mr-0 md:mr-2"
                    aria-hidden="true"
                  />
                  <span className="hidden md:block">Log out</span>
                </li>
              </ul>
            </div>
            {/* end panel left */}

            {/* panel right */}
            <div className="flex flex-col w-full md:w-4/5 px-2">
              <Switch>
                <Route exact path={path}>
                  <Settings />
                </Route>
                <Route path={`${path}/naja`}>Order history</Route>
              </Switch>
            </div>
            {/* end panel right */}
          </div>
        </div>
      </section>
      {/* end template holder */}
    </div>
  )
}
