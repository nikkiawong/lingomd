import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function ResultDetail() {
  const resultDetailStyles = {
    width: '47%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '80px'
  }
  const mainBodyStyles = {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  const backStyles = {
    color: '#6d6d6d',
    textDecoration: 'none'
  }
  const doctorInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center'
  }
  const imageStyles = {
    height: '150px',
    marginRight: '20px'
  }
  const h2Styles = {
    fontWeight: 'normal'
  }
  const h3Styles = {
    fontWeight: 'normal'
  }
  const descriptionStyles = {
    fontSize: '14px',
    paddingTop: '10px',
    paddingBottom: '30px',
    borderBottom: '1px solid #e0e0e0'
  }
  const contactStyles = {
    textAlign: 'center',
    paddingTop: '10px',
    fontSize: '14px'
  }
  const linkStyles = {
    color: '#d22027',
    textDecoration: 'none'
  }
  return (
    <div>
      <Nav />
      <div style={resultDetailStyles}>
        <div>
          <p><Link style={backStyles} to='/results'>Back</Link></p>
        </div>
        <div style={mainBodyStyles}>
          <div style={doctorInfoStyles}>
            <div>
              <img style={imageStyles} src='https://png2.kisspng.com/20180427/jfw/kisspng-computer-icons-computer-software-woman-user-skin-material-5ae339610610a6.2292518415248408010249.png'></img>
            </div>
            <div>
              <h2 style={h2Styles}>Doctor Name, M.D.</h2>
              <h3 style={h3Styles}>Specialty</h3>
            </div>
          </div>
          <div>
            <p style={descriptionStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor turpis in ex dapibus lacinia. Aliquam semper dolor et cursus suscipit. Integer quis massa eros. Mauris hendrerit mi quis erat tristique lobortis. Curabitur porta nulla purus, sit amet accumsan orci dapibus non. Morbi rutrum augue vitae eros tincidunt congue.</p>
          </div>
          <div style={contactStyles}>
            <p>Address</p>
            <p>Phone Number</p>
            <p style={linkStyles}>Email Address</p>
            <p><a style={linkStyles} href='/'>Website</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDetail;