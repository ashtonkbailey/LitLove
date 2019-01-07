import { googleKey } from '../utils/googleAPI.js';
import { addPossibleBooks } from '../actions';

export const lovedBookThunk = async (title) => {
  return async (dispatch) => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${googleKey}&fields=items(volumeInfo/title, volumeInfo/authors, volumeInfo/description, volumeInfo/imageLinks)`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error('Unable to get book list')
      }
      const possibleBooks = await response.json();
      dispatch(addPossibleBooks(possibleBooks))
    }
  }
}