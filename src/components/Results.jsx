import React from 'react';
import SearchResults from './SearchResults';
import Nav from './Nav';
import ResultsSearch from './ResultsSearch';

function Results() {
  return (
    <div>
      <Nav />
      <ResultsSearch />
      <SearchResults />
    </div>
  );
}

export default Results;
