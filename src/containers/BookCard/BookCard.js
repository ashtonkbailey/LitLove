import React from 'react';
import { connect } from 'react-redux'

import { confirmBookThunk } from '../../thunks/confirmBookThunk'


const BookCard = ({ volumeInfo, type, confirmBook }) => {
  const imageURL = volumeInfo.imageLinks.smallThumbnail;
  const bookTitle = volumeInfo.title;
  const author = volumeInfo.authors[0];
  const blurb = volumeInfo.description;
  let fave;

  if (type === 'confirm') {
    fave = ''
  } else {
    fave = <button>star</button>
  }

  const handleClick = (e) => {
    confirmBook(bookTitle);
  }

  return (
    <div className="card">
      <button
        className="confirm-btn"
        onClick={handleClick}
      >Confirm</button>
      <img src={imageURL} alt={bookTitle} />
        {fave}
      <h3>{bookTitle}</h3>
      <h4>{author}</h4>
      <p>{blurb}</p>
    </div>
  )
}


export const mapDispatchToProps = (dispatch) => ({
  confirmBook: (bookTitle) => dispatch(confirmBookThunk(bookTitle))
})

export default connect(null, mapDispatchToProps)(BookCard);
