import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { confirmBookThunk } from '../../thunks/confirmBookThunk'

class BookCard extends Component {
  constructor() {
    super();
    this.state = {
      confirmed: false
    }
  }
  handleClick = async (e) => {
    const bookTitle = this.props.volumeInfo.title;
    await this.props.confirmBook(bookTitle);
    this.setState({ confirmed: true })
  }

  render () {
    const { confirmed } = this.state;
    let bookTitle;
    let blurb;
    let fave;
    let imageURL;
    let author;

    if (this.props.type === 'confirm') {
      imageURL = this.props.volumeInfo.imageLinks.smallThumbnail;
      author = this.props.volumeInfo.authors[0];
      bookTitle = this.props.volumeInfo.title;
      blurb = this.props.volumeInfo.description;
      fave = ''
    } else {
      bookTitle = this.props.Name;
      blurb = this.props.wTeaser;
      fave = <button>star</button>
    }

    if (confirmed) {
      return <Redirect to="/recommendations" />
    }

    return (
      <div className="card">
        <button
          className="confirm-btn"
          onClick={this.handleClick}
        >Confirm</button>
        <img src={imageURL} alt={bookTitle} />
          {fave}
        <h3>{bookTitle}</h3>
        <h4>{author}</h4>
        <p>{blurb}</p>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  confirmBook: (bookTitle) => dispatch(confirmBookThunk(bookTitle))
})

export default connect(null, mapDispatchToProps)(BookCard);
