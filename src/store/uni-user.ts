import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/uni-user'

const composeEnhancers = compose

const middlewares = [
    thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
)

const configStore = () => createStore(rootReducer, enhancer);

export default configStore