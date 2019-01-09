import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import '../../index.scss';
import BookCard from '../BookCard/BookCard';

export const Books = (props) => {
  const { type, possibleBooks, lovedBook, recommendations } = props;
  let text;
  let bookCards;
  let prompt;

  if (type === 'confirm' && possibleBooks) {
    const fullBooks = possibleBooks.filter((book) => {
      return book.id && book.volumeInfo.authors && book.volumeInfo.imageLinks
    })
    text = "Confirm your loved book:";
    bookCards = fullBooks.map((book) => {
      return (
        <BookCard
          {...book}
          key={book.id}
          type={type}
        />
      )
    });
    prompt = (
      <h3 className="sorry-text">
        Don't see your book? Click <span>
          <Link to="/new">here</Link>
        </span> to try again.
      </h3>
    );
  } else if (recommendations.length >= 1) {
    text = `Here are some recommendations based on '${lovedBook}':`;
    bookCards = recommendations.map((book) => {
      return (
        <BookCard
          {...book}
          key={book.sUrl}
          type={type}
        />
      )
    })
  } else {
    prompt = (
      <h3 className="sorry-text">
        Sorry! We don't have any recommendations
         for that book. Please click on "New Search"
         to try a different book.
      </h3>
    )
  }

  return (
    <div className="books">
      <h3 className="books-text">{text}</h3>
      <hr />
      <div className="books-container">
        {bookCards}
        {prompt}
      </div>
    </div>
  )
}

Books.propTypes = {
  lovedBook: PropTypes.object.isRequired,
  possibleBooks: PropTypes.array.isRequired,
  recommendations: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

export const mapStateToProps = (state) => ({
  possibleBooks: state.possibleBooks,
  lovedBook: state.lovedBook,
  recommendations: state.recommendations
})


export default connect(mapStateToProps)(Books);
