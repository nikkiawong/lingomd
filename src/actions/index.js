import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const searchDoctor = (localDoctorId) => ({
  type: types.SEARCH_DOCTOR,
  doctorId: localDoctorId
});

export const getGeocode = (geocode) => ({
  type: types.GET_GEOCODE,
  geocode: geocode
})

const API_KEY = process.env.REACT_APP_API_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GEOCODE_API_KEY;

export function fetchGeocode(userInput, distanceInput, locationInput) {
  return function (dispatch) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=` + locationInput + `&key=` + GOOGLE_API_KEY).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      let geocode;
      console.log(json);
      if (json) {
        let lat = json.results[0].geometry.location.lat;
        let lng = json.results[0].geometry.location.lng;
        geocode = lat + ',' + lng;
      }
      dispatch(fetchDoctorList(userInput, distanceInput, geocode));
    })

  }
}

export function fetchDoctorList(userInput, distanceInput, geocode) {
  return function (dispatch) {
    const localDoctorId = v4();
    dispatch(searchDoctor(localDoctorId));
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=` + API_KEY + `&query=` + userInput + `&location=` + geocode + `,` + distanceInput + `&limit=100`).then(
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

          let unmodifiedPhone = caretaker.practices[0].phones[0].number;
          let modifiedPhone = unmodifiedPhone.split('');
          modifiedPhone.splice(3,0,'-');
          modifiedPhone.splice(7,0,'-');
          modifiedPhone = modifiedPhone.join('');
          
          if (caretaker.practices[0].languages.length > 1) {
            doctorObject = {
              name: caretaker.profile.first_name + ' ' + caretaker.profile.last_name + ' ' + caretaker.profile.title,
              street: caretaker.practices[0].visit_address.street,
              street2: caretaker.practices[0].visit_address.street2,
              cityState: caretaker.practices[0].visit_address.city + ', ' + caretaker.practices[0].visit_address.state + ' ' + caretaker.practices[0].visit_address.zip,
              specialty: null,
              phone: modifiedPhone,
              languages: languageList,
              center: {
                lat: caretaker.practices[0].lat,
                lng: caretaker.practices[0].lon
              },
              displayDetail: false,
              key: uniqueDoctorId
            };
          } else {
            doctorObject = {
              key: uniqueDoctorId
            }
          }

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
