import React from 'react';

const BookCard = ({ volumeInfo, type }) => {
  const imageURL = volumeInfo.imageLinks.smallThumbnail;
  const title = volumeInfo.title;
  const author = volumeInfo.authors[0];
  const blurb = volumeInfo.description;
  let fave;

  if (type === 'confirm') {
    fave = ''
  } else {
    fave = <button>star</button>
  }

  return (
    <div className="card">
      <button
        className="confirm-btn"
      >Confirm</button>
      <img src={imageURL} alt={title} />
        {fave}
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{blurb}</p>
    </div>
  )
}

export default BookCard;
