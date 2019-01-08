// favorites
export const addFavorite = (book) => ({
  type: 'ADD_FAVORITE',
  book
})

export const deleteFavorite = (bookId, i) => ({
  type: 'DELETE_FAVORITE',
  bookId,
  i
})

// possible books
export const addPossibleBooks = (books) => ({
  type: 'ADD_POSSIBLE_BOOKS',
  books
})

// loved book
export const addLovedBook = (book) => ({
  type: 'ADD_LOVED_BOOK',
  book
})

// recommendations
export const addRecommendations = (books) => ({
  type: 'ADD_RECOMMENDATIONS',
  books
})

// errors
export const setError = (error) => ({
  type: 'SET_ERROR',
  error
})
