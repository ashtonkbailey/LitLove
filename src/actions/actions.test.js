import * as actions from './index';

describe('actions', () => {
  it('addFavorite should take in the payload and return an object with a type of ADD_FAVORITE', () => {
    const book = {};
    const expected = {
      type: 'ADD_FAVORITE',
      book
    };
    const result = actions.addFavorite(book)
    expect(result).toEqual(expected);
  });

  it('deleteFavorite should take in the payload and return an object with a type of DELETE_FAVORITE', () => {
    const bookId = 1;
    const i = 9;
    const expected = {
      type: 'DELETE_FAVORITE',
      bookId,
      i
    };
    const result = actions.deleteFavorite(bookId, i)
    expect(result).toEqual(expected);
  });

  it('addPossibleBooks should take in the payload and return an object with a type of ADD_POSSIBLE_BOOKS', () => {
    const books = [];
    const expected = {
      type: 'ADD_POSSIBLE_BOOKS',
      books
    };
    const result = actions.addPossibleBooks(books)
    expect(result).toEqual(expected);
  });

  it('addLovedBook should take in the payload and return an object with a type of ADD_LOVED_BOOK', () => {
    const book = {};
    const expected = {
      type: 'ADD_LOVED_BOOK',
      book
    };
    const result = actions.addLovedBook(book)
    expect(result).toEqual(expected);
  });

  it('addRecommendations should take in the payload and return an object with a type of ADD_RECOMMENDATIONS', () => {
    const books = [];
    const expected = {
      type: 'ADD_RECOMMENDATIONS',
      books
    };
    const result = actions.addRecommendations(books)
    expect(result).toEqual(expected);
  });

  it('setError should take in the payload and return an object with a type of SET_ERROR', () => {
    const error = '';
    const expected = {
      type: 'SET_ERROR',
      error
    };
    const result = actions.setError(error)
    expect(result).toEqual(expected);
  });
})
