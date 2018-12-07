import React from 'react';
import Result from './Result';

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

function ResultList() {
  const resultListStyles = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '50%'
  }
  return (
    <div style={resultListStyles}>
      {masterResultList.map((result, index) =>
        <Result name={result.name}
        specialty={result.specialty}
        address={result.address}
        phone={result.phone}
        email={result.email}
        website={result.website}
        key={index}/>
      )}
    </div>
  );
}

export default ResultList;
