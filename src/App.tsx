import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import routes from './routes'
import './App.css'

function App() {
  return (
    <Router>
      <div className="m-auto antialiased font-sans font-serif font-mono text-center">
        <nav>
          <ul>
            {routes.map((route) => (
              <li key={route.uri}>
                <Link to={route.uri}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes
            .slice(0)
            .reverse()
            .map((routeApp) => {
              return (
                <Route key={routeApp.uri} path={routeApp.uri}>
                  {routeApp.component()}
                </Route>
              )
            })}
        </Switch>
      </div>
    </Router>
  )
}

export default App
