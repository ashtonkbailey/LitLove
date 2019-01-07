import { tDKey } from '../utils/tasteDiveAPI.js';
import { addLovedBook, addRecommendations, setError } from '../actions';

export const confirmBookThunk = (bookTitle) => {
  return async (dispatch) => {
    try {
      const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${bookTitle}&type=books&info=1&k=${tDKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error('Unable to get book recommendations')
      }
      const recommendedBooks = await response.json();
      dispatch(addLovedBook(bookTitle));
      dispatch(addRecommendations(recommendedBooks.Similar.Results))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}
