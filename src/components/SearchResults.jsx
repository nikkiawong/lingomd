import React from 'react';
import ResultList from './ResultList';
import Map from './Map';

function SearchResults() {
  const searchResultsStyles = {
    display: 'flex',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '80px',
    marginBottom: '80px'
  }
  return (
    <div style={searchResultsStyles}>
      <ResultList/>
      <Map />
    </div>
  );
}

export default SearchResults;