import React from 'react'
import ReactDOM from 'react-dom'
import Routers from '@r/router/index'
import { Provider } from 'react-redux'
import store from '@r/store'
import 'normalize.css'

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
