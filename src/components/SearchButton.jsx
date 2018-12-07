import React from 'react';
import { Link } from 'react-router-dom';

function SearchButton() {
  const searchButtonStyles = {
    color: 'white',
    backgroundColor: '#d22027',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textDecoration: 'none'
  }
  const buttonStyles = {
    marginTop: '15px'
  }
  return (
    <div style={buttonStyles}>
      <Link style={searchButtonStyles} to='/results'>Search</Link>
    </div>
  );
}

export default SearchButton;