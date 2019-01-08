import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BookCard from '../BookCard/BookCard';

export class Books extends Component {
  render() {  
    const { type, possibleBooks, lovedBook, recommendations } = this.props;
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
}

export const mapStateToProps = (state) => ({
  possibleBooks: state.possibleBooks,
  lovedBook: state.lovedBook,
  recommendations: state.recommendations
})


export default connect(mapStateToProps)(Books);
