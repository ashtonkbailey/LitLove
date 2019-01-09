import { googleKey } from '../utils/googleAPI.js';
import { addPossibleBooks, setError } from '../actions';

export const addPossibleBooksThunk = (title) => {
  return async (dispatch) => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${googleKey}&maxResults=5&fields=items(id, volumeInfo/title, volumeInfo/authors, volumeInfo/description, volumeInfo/imageLinks)`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error('Unable to get book list')
      }
      const possibleBooks = await response.json();
      dispatch(addPossibleBooks(possibleBooks.items))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}
