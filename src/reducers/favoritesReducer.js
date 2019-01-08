const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.book]
    case 'DELETE_FAVORITE':
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)]
    default:
      return state
  }
}

export default favoritesReducer;
