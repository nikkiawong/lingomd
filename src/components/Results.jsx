import React from 'react';
import SearchResults from './SearchResults';
import Map from './Map';
import SearchButton from './SearchButton';
import Nav from './Nav';

function Results() {
  return (
    <div>
      <Nav />
      <SearchButton />
      <SearchResults />
      <Map />
    </div>
  );
}

export default Results;