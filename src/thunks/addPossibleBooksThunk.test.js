import { addPossibleBooksThunk } from './addPossibleBooksThunk';
import { addPossibleBooks, setError } from '../actions';

describe('addPossibleBooksThunk', () => {
  let mockDispatch;

  beforeEach(() =>{
    mockDispatch = jest.fn()
  });

  it('should throw an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Unable to get book list'
    }));
    const thunk = addPossibleBooksThunk();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Unable to get book list'));
  });

  it('should dispatch addPossibleBooks when response is ok', async () => {
    const mockPossibleBooks = [
      { title: 'hi', author: 'bob loblaw', bookId: 2 },
      { title: 'hey', author: 'bob loblob', bookId: 10 },
      { title: 'hello', author: 'bob lawlaw', bookId: 3 }
    ];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => mockPossibleBooks
    }));
    const thunk = addPossibleBooksThunk();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addPossibleBooks(mockPossibleBooks))
  })
})
