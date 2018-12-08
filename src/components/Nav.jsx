import React from 'react';
import WhiteLogo from '../assets/images/lingomd-horiz-whitelogo-09.png';
import { Link } from 'react-router-dom';

function Nav() {
  const navBackgroundStyles = {
    backgroundColor: '#1a90c9',
    height: '80px'
  }
  const navStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '20px',
    paddingBottom: '20px'
  }
  const logoStyles = {
    height: '40px'
  }
  return (
    <div style={navBackgroundStyles}>
      <div style={navStyles}>
        <div>
          <Link to='/'>
            <img style={logoStyles} src={WhiteLogo} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;