import React from 'react';
import SearchButton from './SearchButton';

function ResultsSearch() {
  const resultsSearchStyles = {
    textAlign: 'center',
    marginTop: '80px'
  }
  const searchFormStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '30px'
  }
  return (
    <div style={resultsSearchStyles}>
      <h2>Your Matches</h2>
      <form>
        <div style={searchFormStyles}>
          <p>I'm looking for</p>
          <input type='text' />
          <select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>30</option>
          </select>
          <p>miles from</p>
          <input type='text' />
        </div>
        <SearchButton />
      </form>
    </div>
  );
}

export default ResultsSearch;