import React, { Component } from 'react';

import { lovedBookFetch } from '../../utils/apiCalls';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange = (e) => {
    // may just sub in 'title' if there aren't any other state items
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { title } = this.state;
    const possibleBooks = await lovedBookFetch(title);
  }

  render() {
    const { title } = this.state;
    const { type } = this.props;

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
            autofocus={true}
          />
          <button className="search-btn">
            {button}
          </button>
        </form>
      </div>
    )
  }
}

export default Search;
