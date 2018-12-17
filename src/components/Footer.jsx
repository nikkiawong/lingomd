import React from 'react';

function Footer() {
  const footerBackgroundStyles = {
    backgroundColor: '#1a90c9'
  }
  const footerTextStyles = {
    color: 'white',
    textAlign: 'center'
  }
  return (
    <div style={footerBackgroundStyles}>
      <p style={footerTextStyles}>LingoMD 2018 ©</p>
    </div>
  );
}

export default Footer;
