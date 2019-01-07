import React from 'react';

const BookCard = ({ volumeInfo }) => {
  const imageURL = volumeInfo.imageLinks.smallThumbnail;
  const title = volumeInfo.title;
  const author = volumeInfo.authors[0];
  const blurb = volumeInfo.description;

  return (
    <div className="card">
      <img src={imageURL} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{blurb}</p>
    </div>
  )
}

export default BookCard;
