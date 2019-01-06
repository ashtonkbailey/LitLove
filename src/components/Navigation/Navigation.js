import React from 'react';
import { Link } from 'react-router-dom';

import '../../index.scss';

const Navigation = (props) => {
  return (
    <div className="nav">
      <Link to="/new">
        <button className="new-search-btn">
          New Search
        </button>
      </Link>
      <Link to="/favorites">
        <button className="favorites-btn">
          Favorites
        </button>
      </Link>
    </div>
  )
}

export default Navigation;
