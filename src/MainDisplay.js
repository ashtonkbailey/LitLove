import React from 'react';
import { connect } from 'react-redux';

import Search from './Search';
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

export default connect(mapStateToProps)(MainDisplay);
