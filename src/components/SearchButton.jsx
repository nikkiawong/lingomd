import React from 'react';
import { Link } from 'react-router-dom';

function SearchButton() {
  return (
    <div>
      <Link to='/results'>Search</Link>
    </div>
  );
}

export default SearchButton;