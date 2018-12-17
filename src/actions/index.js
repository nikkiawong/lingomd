import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const searchDoctor = (localDoctorId) => ({
  type: types.SEARCH_DOCTOR,
  doctorId: localDoctorId
});

const API_KEY = process.env.REACT_APP_API_KEY;

export function fetchDoctorList(userInput, distanceInput) {
  return function (dispatch) {
    console.log(distanceInput);
    console.log(userInput);
    const localDoctorId = v4();
    dispatch(searchDoctor(localDoctorId));
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=` + API_KEY + `&query=` + userInput + `&location=25.761681,-80.191788,` + distanceInput + `&limit=100`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      let newDoctors = [];
      if (json.data) {
        Object.keys(json.data).map(doctorId => {
          const uniqueDoctorId = v4();
          let caretaker = json.data[doctorId];
          let languageList;
          if (caretaker.practices[0].languages.length > 2) {
            languageList = caretaker.practices[0].languages[0].name + ', ' + caretaker.practices[0].languages[1].name + ', ' + caretaker.practices[0].languages[2].name
          } else if (caretaker.practices[0].languages.length > 1) {
            languageList = caretaker.practices[0].languages[0].name + ', ' + caretaker.practices[0].languages[1].name
          } else {
            languageList = caretaker.practices[0].languages[0].name
          }
          let doctorObject;
          if (caretaker.practices[0].languages.length > 1) {
            doctorObject = {
              name: caretaker.profile.first_name + ' ' + caretaker.profile.last_name + ' ' + caretaker.profile.title,
              street: caretaker.practices[0].visit_address.street,
              street2: caretaker.practices[0].visit_address.street2,
              cityState: caretaker.practices[0].visit_address.city + ', ' + caretaker.practices[0].visit_address.state + ' ' + caretaker.practices[0].visit_address.zip,
              specialty: null,
              phone: caretaker.practices[0].phones[0].number,
              languages: languageList,
              displayDetail: false,
              key: uniqueDoctorId
            };
          } else {
            doctorObject = {
              key: uniqueDoctorId
            }
          }
          console.log(doctorObject);
          if (doctorObject.languages) {
            newDoctors.push(doctorObject);
          }
        });
        dispatch(receiveDoctor(newDoctors));
        // dispatch(showDoctors());
      } else {
        console.log('No results found.');
      }

      console.log(newDoctors);
    });
  };
}

export const receiveDoctor = (newDoctors) => ({
  type: types.RECEIVE_DOCTOR,
  newDoctors
});

// export const showDoctors = () => ({
//   type: types.SHOW_DOCTORS
// });
