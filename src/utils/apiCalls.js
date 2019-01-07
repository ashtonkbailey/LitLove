
import { tDKey } from './tasteDiveAPI.js';

export const lovedBookFetch = async (title) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${googleKey}&fields=items(volumeInfo/title, volumeInfo/authors, volumeInfo/description, volumeInfo/imageLinks)`;
  const response = await fetch(url)
  const possibleBooks = await response.json();

}