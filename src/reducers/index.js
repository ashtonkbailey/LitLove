import { combineReducers } from 'redux';

import favoritesReducer from './favoritesReducer';
import lovedBookReducer from './lovedBookReducer';
import possibleBooksReducer from './possibleBooksReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  lovedBook: lovedBookReducer,
  possibleBooks: possibleBooksReducer
})

export default rootReducer;
