import React from 'react';
import SearchButton from './SearchButton';
import Image from '../assets/images/lingomd-colorlogo-05.png';
import BackgroundImage from '../assets/images/bg-image.jpg';

function Search() {
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
    transform: 'translateX(-50%)',
    textAlign: 'center',
    color: 'white'
  }
  const backgroundStyles = {
    position: 'relative',
    height: '95vh',
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
        <h1>How can we help you today?</h1>
        <form>
          <input type='text' placeholder='I need...' />
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
            <SearchButton/>
        </form>
      </div>
    </div>
  );
}

export default Search;