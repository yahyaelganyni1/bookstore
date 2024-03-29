import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
