const possibleBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POSSIBLE_BOOKS':
      return [...action.books]
    default:
      return state
  }
}

export default possibleBooksReducer;