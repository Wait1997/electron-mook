import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import resumeReducer from './reducer/resume'
import globalReducer from './reducer/global'
import templateReducer from './reducer/template'

const rootReducer = combineReducers({
  resumeReducer,
  globalReducer,
  templateReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
