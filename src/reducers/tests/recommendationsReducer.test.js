import recommendationsReducer from '../recommendationsReducer';

describe('recommendationsReducer', () => {
  it('should return the recommended books when action type is ADD_RECOMMENDATIONS', () => {
    const action = {
      type: 'ADD_RECOMMENDATIONS',
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
    const result = recommendationsReducer([], action);
    expect(result).toEqual(expected);
  });

  it('should return default state if there is no action type', () => {
    const expected = [];
    const result = recommendationsReducer(undefined, {});
    expect(result).toEqual(expected);
  })
})
