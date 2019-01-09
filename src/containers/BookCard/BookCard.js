import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../index.scss';
import { confirmBookThunk } from '../../thunks/confirmBookThunk'

export class BookCard extends Component {
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
    let imageURL;
    let author;
    let cardContent;

    if (this.props.type === 'confirm') {
      imageURL = this.props.volumeInfo.imageLinks.smallThumbnail;
      author = this.props.volumeInfo.authors[0];
      bookTitle = this.props.volumeInfo.title;
      blurb = this.props.volumeInfo.description;
      cardContent = (
        <div>
          <button
            className="confirm-btn"
            onClick={this.handleClick}
          >Confirm</button>
          <img src={imageURL} alt={bookTitle} />
          <h3>{bookTitle}</h3>
          <h4>{author}</h4>
          <p>{blurb}</p>
        </div>
      )
    } else {
      bookTitle = this.props.Name;
      blurb = this.props.wTeaser;
      cardContent = (
        <div>
          <h3 className="rec-title">{bookTitle}</h3>
          <p>{blurb}</p>
        </div>
      )
    }

    if (confirmed) {
      return <Redirect to="/recommendations" />
    }

    return (
      <div className="card">
        {cardContent}
      </div>
    )
  }
}

BookCard.propTypes = {
  confirmBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  volumeInfo: PropTypes.object.isRequired
}

export const mapDispatchToProps = (dispatch) => ({
  confirmBook: (bookTitle) => dispatch(confirmBookThunk(bookTitle))
})

export default connect(null, mapDispatchToProps)(BookCard);
