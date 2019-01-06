import React from 'react';
import { connect } from 'react-redux';

import '../../index.scss';
import Search from '../Search/Search';
import Books from '../Books/Books';

const MainDisplay = (props) => {
  const { searchResults } = props;
  let display;

  if (!searchResults) {
    display = (<Search />)
  } else {
    display = (<Books />)
  }

  return (
    <div>
      {display}
    </div>
  )
}

export default MainDisplay;
// connect(mapStateToProps)(MainDisplay);
