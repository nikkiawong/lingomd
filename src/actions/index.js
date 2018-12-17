import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const searchDoctor = (localDoctorId) => ({
  type: types.SEARCH_DOCTOR,
  doctorId: localDoctorId
});

const API_KEY = process.env.REACT_APP_API_KEY;

export function fetchDoctorList(userInput) {
  return function (dispatch) {
    const localDoctorId = v4();
    dispatch(searchDoctor(localDoctorId));
    return fetch('https://api.betterdoctor.com/2016-03-01/doctors?user_key=a11e36e0cf776d3fb202cf54791be074&query=' + userInput).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      let newDoctors = [];
      if (json.data) {
        Object.keys(json.data).map(doctorId => {
          const uniqueDoctorId = v4();
          let caretaker = json.data[doctorId];
          console.log(caretaker);
          let doctorObject = {
            name: caretaker.profile.first_name + ' ' + caretaker.profile.last_name + ' ' + caretaker.profile.title,
            displayDetail: false,
            key: uniqueDoctorId
          };
          newDoctors.push(doctorObject);
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
