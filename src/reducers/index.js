import { combineReducers } from 'redux';

import favoritesReducer from './favoritesReducer';
import lovedBookReducer from './lovedBookReducer';
import possibleBooksReducer from './possibleBooksReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  lovedBook: lovedBookReducer,
  possibleBooks: possibleBooksReducer,
  error: errorReducer
})

export default rootReducer;
