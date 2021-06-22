import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import routes from './route'

export default function Routers() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((router) => (
          <Route
            path={router.path}
            key={router.path}
            exact={router.exact}
            render={(props) => <router.component {...props} routes={router.children} />}
          />
        ))}
      </Switch>
    </HashRouter>
  )
}
