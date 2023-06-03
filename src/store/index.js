import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let store = null
store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createLogger(), thunk),
    )
)

export default store