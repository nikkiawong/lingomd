export const initialState = {
  currentSearchDoctorList: {
    isFetching: false,
    newDoctors: [{
      name: null,
      street: null,
      street2: null,
      cityState: null,
      specialty: null,
      phone: null,
      website: null,
      practices: [],
      key: 1234
    }]
  }
}
