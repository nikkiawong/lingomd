import React from 'react';
import SearchResults from './SearchResults';
import Map from './Map';
import SearchButton from './SearchButton';

function Results() {
  return (
    <div>
      Results
      <SearchButton />
      <SearchResults />
      <Map />
    </div>
  );
}

export default Results;