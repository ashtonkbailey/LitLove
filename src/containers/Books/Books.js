import React, { Component } from 'react';
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

  if (type === 'confirm') {
    text = "Confirm your loved book:";
    bookCards = possibleBooks.items.map((book) => {
      return (
        <BookCard
          {...book}
          key={book.id}
          type={type}
        />
      )
    });
    prompt = (
      <h3 className="end-text">
        Don't see your book? Click
        <span>
          <Link to="/new"> here </Link>
        </span>
        to try again.
      </h3>
    )
  } else {
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
  possibleBooks: PropTypes.object.isRequired,
  recommendations: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

export const mapStateToProps = (state) => ({
  possibleBooks: state.possibleBooks,
  lovedBook: state.lovedBook,
  recommendations: state.recommendations
})


export default connect(mapStateToProps)(Books);
