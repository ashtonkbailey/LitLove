import React from 'react';

import '../../index.scss';

const Books = (props) => {
  const { type } = this.props;
  let text;

  if (type === 'confirm') {
    text = "Confirm your loved book:"
  } else {
    // need to bring in book title from lovedBook in store
    text = "Here are some recommendations based on :"
  }
  return (
    <div>
      <h2>{text}</h2>
      <hr />
      <div className="books-container">

      </div>
    </div>
  )
}

export default Books;
