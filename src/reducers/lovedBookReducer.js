const lovedBookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOVED_BOOK':
      return action.book
    default:
      return state
  }
}

export default lovedBookReducer;
