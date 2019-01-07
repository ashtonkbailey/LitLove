import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addPossibleBooksThunk } from '../../thunks/addPossibleBooksThunk';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      submitted: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { title } = this.state;
    await this.props.addPossibleBooks(title);
    this.setState({ submitted: true })
  }

  render() {
    const { title, submitted } = this.state;
    const { type } = this.props;

    if (submitted) {
      return <Redirect to="/confirmBook" />
    }

    let text;
    let button;

    if (type === 'welcome') {
      text = (
        <p className="welcome text">
          Welcome!
          <br/>
          We’d like to help you find your next great read.
          Enter a book title you love, and click the search
          button to find that book. Based on your choice,
          we’ll give you some recommendations.
        </p>);
      button = "Start your Search"
    } else {
      text = (
        <p className="search text">
          Looking for your next book?
          Enter a title you love to start the search process.
        </p>);
      button = "New Search"
    }

    return (
      <div>
        {text}
        <form
          className="search-form"
          onSubmit={this.handleSubmit}
        >
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={title}
            placeholder="Book Title"
            autoFocus={true}
          />
          <button className="search-btn">
            {button}
          </button>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addPossibleBooks: (title) => dispatch(addPossibleBooksThunk(title))
})

export default connect(null, mapDispatchToProps)(Search);
