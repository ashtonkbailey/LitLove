import favoritesReducer from '../favoritesReducer';

describe('favoritesReducer', () => {
  it('should return state with the new favorite if the action type is ADD_FAVORITE', () => {
    const action = {
      type: 'ADD_FAVORITE',
      book: { title: 'hi', author: 'bob loblaw' }
    } ;
    const result = favoritesReducer([], action);
    expect(result).toEqual([{ title: 'hi', author: 'bob loblaw' }]);
  });

  it('should return state without the selected favorite if the action type is DELETE_FAVORITE', () => {
    const action = {
      type: 'DELETE_FAVORITE',
      bookId: 10,
      i: 1
    };
    const state = [
      { title: 'hi', author: 'bob loblaw', bookId: 2 },
      { title: 'hey', author: 'bob loblob', bookId: 10 },
      { title: 'hello', author: 'bob lawlaw', bookId: 3 }
    ];
    const expected = [
      { title: 'hi', author: 'bob loblaw', bookId: 2 },
      { title: 'hello', author: 'bob lawlaw', bookId: 3 }
    ];
    const result = favoritesReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should return default state if there is not action type', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  })
})