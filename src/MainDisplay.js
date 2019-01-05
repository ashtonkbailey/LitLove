import React from 'react';
import { connect } from 'react-redux';

import Search from './containers/Search/Search';
import Books from './Books';

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
