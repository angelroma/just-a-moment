import { applyMiddleware, createStore } from 'redux';
import combineReducers from './reducers/index.reducer';
import logger from 'redux-logger'

const store = createStore(
  combineReducers,
  applyMiddleware(logger)
)

export default store;
