import React from 'react';
import Image from '../assets/images/lingomd-colorlogo-05.png';
import BackgroundImage from '../assets/images/bg-image.jpg';
import { fetchDoctorList, fetchGeocode } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class Search extends React.Component {
  constructor({ dispatch }, props) {
    super(props);
  }

  render() {
    let input;
    let distanceInput;
    let locationInput;
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
      top: '21%',
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
      width: '550px',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '12px'
    }
    const inputStyles = {
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
      height: '50px',
      width: '450px',
      borderBottom: '1px solid white',
      textAlign: 'center',
      fontFamily: '"Montserrat", sans-serif',
      fontStyle: 'italic',
      color: 'white',
      fontSize: '22px'
    }
    const secondInputStyles = {
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
      borderBottom: '1px solid white',
      textAlign: 'center',
      fontFamily: '"Montserrat", sans-serif',
      color: 'white',
      fontSize: '22px'
    }
    const formStyles = {
      color: 'white',
      fontSize: '22px'
    }
    const selectStyles = {
      height: '50px',
      width: '70px',
      fontSize: '22px',
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '300',
      borderBottom: '1px solid white'
    }
    const searchButtonStyles = {
      color: 'white',
      backgroundColor: '#d22027',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '30px',
      paddingRight: '30px',
      textDecoration: 'none',
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '16px',
      outline: 'none',
      border: 'none',
      marginTop: '20px'
    }

    const isValid = this.props.isValid;
    if (isValid) {
      return <Redirect to='/results' />;
    } else {
      return (
        <div style={backgroundStyles}>
          <div style={mainBodyStyles}>
            <img style={searchImageStyles} src={Image} alt='logo'></img>
            <h1 style={h1Styles}>How can we help you today?</h1>
            <form style={formStyles} onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              let userInput = input.value.trim();
              let inputtedDistance = distanceInput.value;
              let inputtedLocation = locationInput.value.trim();
              this.props.dispatch(fetchGeocode(userInput, inputtedDistance, inputtedLocation));
            }}>
              <input style={inputStyles} type='text' ref={node => {
                input = node;
              }} placeholder='I need...' />
              <div style={formSecondLineStyles}>
              <select style={selectStyles} ref={node => {
                distanceInput = node;
              }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              <p>miles from</p>
              <input style={secondInputStyles} type='text' ref={node => {
                locationInput = node;
              }}/>
              </div>
              <button style={searchButtonStyles} type='submit'>Search</button>
            </form>
          </div>
        </div>
      );
    }

  }
}

const mapStateToProps = state => {
  return {
    isValid: state.isValid
  };
};

Search.propTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Search);
