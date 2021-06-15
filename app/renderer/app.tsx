import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Title from './Title'

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route
          path='/'
          render={() => (
            <>
              <div>可视化简历平台</div>
              <div>这是 Electron + React </div>
            </>
          )}
        />
      </Switch>
      <Title text={'陈天凤'} styles={{ color: 'pink' }} />
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
