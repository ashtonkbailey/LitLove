import errorReducer from '../errorReducer';

describe('errorReducer', () => {
  it('should return an error if the action type is SET_ERROR', () => {
    const action = {
      type: 'SET_ERROR',
      error: 'Oops!'
    };
    const state = '';
    const result = errorReducer(state, action);
    expect(result).toEqual('Oops!');
  });

  it('should return default state if action is not passed in', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected)
  });
})