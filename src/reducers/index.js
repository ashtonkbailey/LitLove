import { combineReducers } from 'redux';

import favoritesReducer from './favoritesReducer';
import lovedBookReducer from './lovedBookReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  lovedBook: lovedBookReducer
})

export default rootReducer;
