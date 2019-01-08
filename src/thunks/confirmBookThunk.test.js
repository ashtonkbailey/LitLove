import { confirmBookThunk } from './confirmBookThunk';
import { addLovedBook, addRecommendations, setError } from '../actions';

describe('confirmBookThunk', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should throw an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Unable to get book recommendations'
    }));
    const thunk = confirmBookThunk();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Unable to get book recommendations'));
  });

  it('should dispatch addLovedBook when response is ok', async () => {
    const mockTitle = 'Hi';
    const mockRecommendations = [
      { title: 'hi', author: 'bob loblaw', bookId: 2 },
      { title: 'hey', author: 'bob loblob', bookId: 10 },
      { title: 'hello', author: 'bob lawlaw', bookId: 3 }
    ]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => mockRecommendations
    }));
    const thunk = confirmBookThunk(mockTitle);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addLovedBook(mockTitle));
  });

  it.skip('should dispatch addRecommendations when response is ok', async () => {
    const mockTitle = 'Hi';
    const mockRecommendations = [
      { title: 'hi', author: 'bob loblaw', bookId: 2 },
      { title: 'hey', author: 'bob loblob', bookId: 10 },
      { title: 'hello', author: 'bob lawlaw', bookId: 3 }
    ];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => recommendedBooks.Similar.mockRecommendations
    }));
    const thunk = confirmBookThunk(mockTitle);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addRecommendations(mockRecommendations));
  });
})