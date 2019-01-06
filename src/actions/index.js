// favorites
export const addFavorite = (book) => ({
  type: 'ADD_FAVORITE',
  book
})

export const deleteFavorite = (book) => ({
  type: 'DELETE_FAVORITE',
  book
})

// loved book
export const addLovedBook = (book) => ({
  type: 'ADD_LOVED_BOOK',
  book
})
