import React, { Component } from 'react';

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

  handleSubmit = () => {

  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <p className="search-text">
          Welcome!
          <br/>
          We’d like to help you find your next great read.
          Enter a book title you love, and click the search
          button to find that book. Based on your choice,
          we’ll give you some recommendations.
        </p>
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
            Start your Search
          </button>
        </form>
      </div>
    )
  }
}

export default Search;
