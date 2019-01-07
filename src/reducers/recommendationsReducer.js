const recommendationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECOMMENDATIONS':
      return action.books
    default:
      return state
  }
}

export default recommendationsReducer;
