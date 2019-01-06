import React from 'react';

import '../../index.scss';

const Navigation = (props) => {
  return (
    <div className="nav">
      <button className="new-search-btn">
        New Search
      </button>
      <button className="favorites-btn">
        Favorites
      </button>
    </div>
  )
}

export default Navigation;
