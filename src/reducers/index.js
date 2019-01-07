import { combineReducers } from 'redux';

import favoritesReducer from './favoritesReducer';
import lovedBookReducer from './lovedBookReducer';
import possibleBooksReducer from './possibleBooksReducer';
import errorReducer from './errorReducer';
import recommendationsReducer from './recommendationsReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  lovedBook: lovedBookReducer,
  recommendations: recommendationsReducer,
  possibleBooks: possibleBooksReducer,
  error: errorReducer
})

export default rootReducer;
