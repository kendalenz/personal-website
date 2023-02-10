import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import users from './users';

const reducer = combineReducers({
    users,
  });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './users';
