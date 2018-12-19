import constants from './../constants';
const { types, initialState } = constants;

const searchDoctorReducer = (state = initialState.currentSearchDoctorList, action) => {
  switch (action.type) {
  case types.SEARCH_DOCTOR:
    const newDoctorSearchSlice = Object.assign({}, state, {
      isFetching: true
    });
    return newDoctorSearchSlice;
  case types.RECEIVE_DOCTOR:
    const receivedDoctorSearchSlice = Object.assign({}, state, {
      isFetching: false,
      isValid: true,
      newDoctors: action.newDoctors
    });
    return receivedDoctorSearchSlice;
  default:
    return state;
  }
};

export default searchDoctorReducer;
