import possibleBooksReducer from '../possibleBooksReducer';

describe('possibleBooksReducer', () => {
  it('should return possible books if the action type is ADD_POSSIBLE_BOOKS', () => {
    const action = {
      type: 'ADD_POSSIBLE_BOOKS',
      books: [
        { title: 'hi', author: 'bob loblaw', bookId: 2 },
        { title: 'hey', author: 'bob loblob', bookId: 10 },
        { title: 'hello', author: 'bob lawlaw', bookId: 3 }
      ]
    };
    const expected = [
        { title: 'hi', author: 'bob loblaw', bookId: 2 },
        { title: 'hey', author: 'bob loblob', bookId: 10 },
        { title: 'hello', author: 'bob lawlaw', bookId: 3 }
    ];
    const result = possibleBooksReducer([], action);
    expect(result).toEqual(expected);
  });

  it('should return default state if there is no action type', () => {
    const expected = [];
    const result = possibleBooksReducer(undefined, {});
    expect(result).toEqual(expected);
  })
})