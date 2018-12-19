import React from 'react';
import ResultList from './ResultList';

function SearchResults() {
  const searchResultsStyles = {
    display: 'flex',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'flex-start',
    marginTop: '80px',
    marginBottom: '80px'
  }
  return (
    <div style={searchResultsStyles}>
      <ResultList/>
    </div>
  );
}

export default SearchResults;
