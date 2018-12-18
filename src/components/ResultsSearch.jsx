import React from 'react';
import SearchButton from './SearchButton';
import { fetchDoctorList } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ResultsSearch({ dispatch }, props) {
  let input;
  let distanceInput;
  const resultsSearchStyles = {
    textAlign: 'center',
    marginTop: '80px',
    color: '#848484'
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
  const inputStyles = {
    border: 'none',
    borderBottom: '1px solid #848484',
    outline: 'none',
    color: '#848484',
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: '300'
  }
  const selectStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    height: '25px',
    borderRadius: '0',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: '300',
    fontSize: '18px',
    boxShadow: 'none'
  }
  const spanStyles = {
    borderBottom: '1px solid #848484'
  }
  return (
    <div style={resultsSearchStyles}>
      <h2>Your Matches</h2>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        let userInput = input.value.trim();
        let inputtedDistance = distanceInput.value;
        dispatch(fetchDoctorList(userInput, inputtedDistance));
      }}>
        <div style={searchFormStyles}>
          <p>I'm looking for</p>
          <input style={inputStyles} type='text' ref={node => {
            input = node;
          }} />
          <span style={spanStyles}><select style={selectStyles} ref={node => {
            distanceInput = node;
          }}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select></span>
          <p>miles from</p>
          <input style={inputStyles} type='text' />
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
