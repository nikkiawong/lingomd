import React from 'react';
import SearchButton from './SearchButton';
import { fetchDoctorList } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ResultsSearch({ dispatch }, props) {
  let input;
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
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchDoctorList(input.value.trim()));
      }}>
        <div style={searchFormStyles}>
          <p>I'm looking for</p>
          <input type='text' ref={node => {
            input = node;
          }} />
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
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

ResultsSearch.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(ResultsSearch);
