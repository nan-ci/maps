import { createStore, applyMiddleware, compose } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer'

// const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  // initialState,
  composeEnhancers(
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  )
)

console.log('e', store.getState())

export default store
