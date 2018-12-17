import React from 'react';
import SearchButton from './SearchButton';
import Image from '../assets/images/lingomd-colorlogo-05.png';
import BackgroundImage from '../assets/images/bg-image.jpg';
import { fetchDoctorList } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Search({ dispatch }, props) {
  let input;
  const searchImageStyles = {
    width: '175px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  const mainBodyStyles = {
    width: '1000px',
    position: 'absolute',
    margin: '0',
    padding: '0',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%)',
    textAlign: 'center',
    color: 'white'
  }
  const h1Styles = {
    textShadow: '1px 0.5px #c6c6c6'
  }
  const backgroundStyles = {
    position: 'relative',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1521453510357-5c7a77db7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80)',
    backgroundImageRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  const formSecondLineStyles = {
    display: 'flex',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  return (
    <div style={backgroundStyles}>
      <div style={mainBodyStyles}>
        <img style={searchImageStyles} src={Image} alt='logo'></img>
        <h1 style={h1Styles}>How can we help you today?</h1>
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchDoctorList(input.value.trim()));
        }}>
          <input type='text' ref={node => {
            input = node;
          }} placeholder='I need...' />
            <div style={formSecondLineStyles}>
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
        <Link to='/results'>Results</Link>
      </div>
    </div>
  );
}

Search.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Search);
