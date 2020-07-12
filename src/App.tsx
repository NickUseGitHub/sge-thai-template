import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import routes from './routes'
import Layout from './components/layouts/Layout'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  )
}

export default App
