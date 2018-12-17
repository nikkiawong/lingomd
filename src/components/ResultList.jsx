import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ResultList = ({ newDoctors }) => {
  const resultListStyles = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '50%'
  }

  return (
    <div>
      <div style={resultListStyles}>
      {newDoctors.map((doctor) =>
        <div key={doctor.key}>
          <h2>{doctor.name}</h2>
          <h3>{doctor.specialty}</h3>
          <p>{doctor.languages}</p>
          <p>{doctor.street}</p>
          <p>{doctor.street2}</p>
          <p>{doctor.cityState}</p>
          <p>{doctor.phone}</p>
        </div>
      )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    newDoctors: state.newDoctors
  };
};

ResultList.propTypes = {
  newDoctors: PropTypes.array
}

export default connect(mapStateToProps)(ResultList);
