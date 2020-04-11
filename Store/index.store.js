import { applyMiddleware, createStore, compose } from 'redux';
import combineReducers from './reducers/index.reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

console.log(process.env.NODE_ENV)

export const store = compose(applyMiddleware(...middlewares))(createStore)(combineReducers);

