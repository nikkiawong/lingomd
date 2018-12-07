import React from 'react';
import SearchResults from './SearchResults';
import Map from './Map';
import Nav from './Nav';
import ResultsSearch from './ResultsSearch';

function Results() {
  return (
    <div>
      <Nav />
      <ResultsSearch />
      <SearchResults />
      <Map />
    </div>
  );
}

export default Results;