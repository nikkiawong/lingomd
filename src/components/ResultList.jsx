import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const masterResultList = [
  {
    "name": "Doctor Name, M.D.",
    "specialty": "Specialty",
    "address": "1234 Main St, Portland, OR 97200",
    "phone": "503-156-4777",
    "email": "doctor@clinic.com",
    "website": "/"
  },
  {
    "name": "Dentist Name, D.D.S.",
    "specialty": "Specialty",
    "address": "2010 Lincoln St, Portland, OR 97245",
    "phone": "503-244-1234",
    "email": "dentist@clinic.com",
    "website": "/"
  },
  {
    "name": "Surgeon Name, M.D.",
    "specialty": "Specialty",
    "address": "1139 California St, Portland, OR 97201",
    "phone": "503-564-7865",
    "email": "surgeon@clinic.com",
    "website": "/"
  },
  {
    "name": "Doctor Name, M.D.",
    "specialty": "Specialty",
    "address": "1227 SE West St, Portland, OR 97224",
    "phone": "503-234-9753",
    "email": "physician@clinic.com",
    "website": "/"
  }
]

const ResultList = ({ newDoctors }) => {
  const resultListStyles = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '50%'
  }
  return (
    <div style={resultListStyles}>
      {newDoctors.map((doctor) =>
        <div key={doctor.key}>
          <h2>{doctor.name}</h2>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    newDoctors: state.currentSearchDoctorList.newDoctors
  };
};

ResultList.propTypes = {
  newDoctors: PropTypes.array
}

export default connect(mapStateToProps)(ResultList);
