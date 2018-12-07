import React from 'react';
import ResultDetail from './ResultDetail';
import PropTypes from 'prop-types';

function Result(props) {
  const contactDivStyles = {
    display: 'flex'
  }
  const phoneStyles = {
    marginRight: '10px'
  }
  const resultStyles = {
    lineHeight: '5px',
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '20px',
    paddingBottom: '20px'
  }
  return (
    <div style={resultStyles}>
      <h3>{props.name}</h3>
      <h4>{props.specialty}</h4>
      <p>{props.address}</p>
      <div style={contactDivStyles}>
        <p style={phoneStyles}>{props.phone}</p>
        <p><a href={props.email}>{props.email}</a></p>
      </div>
      <p><a href={props.website}>Website</a></p>
    </div>
  );
}

export default Result;