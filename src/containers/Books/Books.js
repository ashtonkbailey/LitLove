import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookCard from '../BookCard/BookCard';

// import '../../index.scss';

class Books extends Component {
  render() {  
    const { type, possibleBooks } = this.props
    let text;
    let bookCards;

    if (type === 'confirm') {
      text = "Confirm your loved book:";
      bookCards = possibleBooks.items.map((book) => {
        return <BookCard {...book} key={book.id} type={type}/>
      })
    } else {
      // need to bring in book title from lovedBook in store
      text = "Here are some recommendations based on :"
    }

    return (
      <div className="books">
        <h3 className="books-text">{text}</h3>
        <hr />
        <div className="books-container">
          {bookCards}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  possibleBooks: state.possibleBooks
})

export default connect(mapStateToProps)(Books);
