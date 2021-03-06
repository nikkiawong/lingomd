import React from 'react';
import ResultList from './ResultList';
import MapContainer from './GoogleMap';

function SearchResults() {
  const searchResultsStyles = {
    display: 'flex',
    flexDirection: 'row',
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
      <MapContainer />
    </div>
  );
}

export default SearchResults;
