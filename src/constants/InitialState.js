export const initialState = {
  currentSearchDoctorList: {
    isFetching: false,
    isValid: false,
    newDoctors: [{
      name: null,
      street: null,
      street2: null,
      cityState: null,
      specialty: null,
      phone: null,
      languages: null,
      center: {},
      key: 1234
    }]
  }
}
