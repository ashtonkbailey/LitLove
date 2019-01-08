import lovedBookReducer from '../lovedBookReducer';

describe('lovedBookReducer', () => {
  it('should return the loved book if the action type is ADD_LOVED_BOOK', () => {
    const action = {
      type: 'ADD_LOVED_BOOK',
      book: { title: 'hi', author: 'bob loblaw' }
    };
    const result = lovedBookReducer(undefined, action);
    expect(result).toEqual({ title: 'hi', author: 'bob loblaw' })
  });

  it('should return default state if there is no action type', () => {
    const expected = {};
    const result = lovedBookReducer(undefined, {});
    expect(result).toEqual(expected);
  })
})