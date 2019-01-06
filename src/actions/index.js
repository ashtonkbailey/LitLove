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

// loved book
export const addLovedBook = (book) => ({
  type: 'ADD_LOVED_BOOK',
  book
})
