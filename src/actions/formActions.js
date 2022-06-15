export const CHANGE_SPECIES_FIELD = 'CHANGE_SPECIES_FIELD';
export const CHANGE_AGE_FIELD = 'CHANGE_AGE_FIELD';
export const CHANGE_GENDER_FIELD = 'CHANGE_GENDER_FIELD';
export const CHANGE_CHILD_FIELD = 'CHANGE_CHILDREN_FIELD';
export const CHANGE_OTHERS_FIELD = 'CHANGE_OTHERS_FIELD';
export const CHANGE_GARDEN_FIELD = 'CHANGE_GARDEN_FIELD';
export const CHANGE_LOC_FIELD = 'CHANGE_LOC_FIELD';
export const CHANGE_STATUS_FIELD = 'CHANGE_STATUS_FIELD';
export const FETCH_DEPARTMENT = 'FETCH_DEPARTMENT';
export const SAVE_DEPARTMENT = 'SAVE_DEPARTEMENT';
export const FETCH_SPECIES = 'FETCH_SPECIES';
export const SAVE_SPECIES = 'SAVE_SPECIES';
export const FETCH_GEOLOC = 'FETCH_GEOLOC';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SPECIES_ERROR = 'SPECIES_ERROR';
export const AGE_ERROR = 'AGE_ERROR';
export const LOC_ERROR = 'DEPARTMENT_ERROR';
export const CHANGE_NAME_FIELD = 'CHANGE_NAME_FIELD';
export const CHANGE_DESCRIPTION_FIELD = 'CHANGE_DESCRIPTION_FIELD';
export const CHANGE_SIREN_FIELD = 'CHANGE_SIREN_FIELD';
export const CHANGE_STREET_FIELD = 'CHANGE_STREET_FIELD';
export const CHANGE_ZIPCODE_FIELD = 'CHANGE_ZIPCODE_FIELD';
export const CHANGE_CITY_FIELD = 'CHANGE_CITY_FIELD';
export const CHANGE_PHONENUMBER_FIELD = 'CHANGE_PHONENUMBER_FIELD';
export const CHANGE_EMAIL_FIELD = 'CHANGE_EMAIL_FIELD';
export const FORM_SUCCESS = 'FORM_SUCCESS';
export const FORM_ISSUE = 'FORM_ISSUE';
export const NAME_ERROR = 'NAME_ERROR';
export const DESCRIPTION_ERROR = 'DESCRIPTION_ERROR';
export const SIREN_ERROR = 'SIREN_ERROR';
export const STREET_ERROR = 'STREET_ERROR';
export const ZIPCODE_ERROR = 'ZIPCODE_ERROR';
export const CITY_ERROR = 'CITY_ERROR';
export const PHONENUMBER_ERROR = 'PHONENUMBER_ERROR';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const NOTSUBMIT_FORM = 'NOTSUBMIT_FORM';


export const changeStatusField = (key, newValue) => ({
  type: CHANGE_STATUS_FIELD,
  species: key,
  value: newValue,
});

export const changeSpeciesField = (key, newValue) => ({
  type: CHANGE_SPECIES_FIELD,
  species: key,
  value: newValue,
});

export const changeGenderField = (key, newValue) => ({
  type: CHANGE_GENDER_FIELD,
  species: key,
  value: newValue,
});

export const changeChildField = (key, newValue) => ({
  type: CHANGE_CHILD_FIELD,
  species: key,
  value: newValue,
});

export const changeOthersField = (key, newValue) => ({
  type: CHANGE_OTHERS_FIELD,
  species: key,
  value: newValue,
});

export const changeGardenField = (key, newValue) => ({
  type: CHANGE_GARDEN_FIELD,
  species: key,
  value: newValue,
});

export const changeLocField = (key, newValue) => ({
  type: CHANGE_LOC_FIELD,
  species: key,
  value: newValue,
});

export const changeAgeField = (key, newValue) => ({
  type: CHANGE_AGE_FIELD,
  age: key,
  value: newValue,
});

export const formSubmit = () => ({
  type: SUBMIT_FORM,
});

export const notSubmit = () => ({
  type: NOTSUBMIT_FORM,
});

export const fetchGeoloc = (street, zipCode) => ({
  type: FETCH_GEOLOC,
  streetQuery: street,
  zipCodeQuery: zipCode,
});

export const fetchDepartments = () => ({
  type: FETCH_DEPARTMENT,
});

export const saveFetchedDepartments = (dataReceived) => ({
  type: SAVE_DEPARTMENT,
  datas: dataReceived,
});

export const fetchSpecies = () => ({
  type: FETCH_SPECIES,
});

export const saveFetchedSpecies = (dataReceived) => ({
  type: SAVE_SPECIES,
  datas: dataReceived,
});

export const changeSpeciesError = (key, newValue) => ({
  type: SPECIES_ERROR,
  species: key,
  value: newValue,
});

export const changeLocError = (key, newValue) => ({
  type: LOC_ERROR,
  species: key,
  value: newValue,
});

export const changeAgeError = (key, newValue) => ({
  type: AGE_ERROR,
  age: key,
  value: newValue,
});

export const changeNameField = (key, newValue) => ({
  type: CHANGE_NAME_FIELD,
  species: key,
  value: newValue,
});

export const changeDescriptionField = (key, newValue) => ({
  type: CHANGE_DESCRIPTION_FIELD,
  species: key,
  value: newValue,
});

export const changeSirenField = (key, newValue) => ({
  type: CHANGE_SIREN_FIELD,
  species: key,
  value: newValue,
});

export const changeStreetField = (key, newValue) => ({
  type: CHANGE_STREET_FIELD,
  species: key,
  value: newValue,
});

export const changeZipCodeField = (key, newValue) => ({
  type: CHANGE_ZIPCODE_FIELD,
  species: key,
  value: newValue,
});

export const changeCityField = (key, newValue) => ({
  type: CHANGE_CITY_FIELD,
  species: key,
  value: newValue,
});

export const changePhoneNumberField = (key, newValue) => ({
  type: CHANGE_PHONENUMBER_FIELD,
  species: key,
  value: newValue,
});

export const changeEmailField = (key, newValue) => ({
  type: CHANGE_EMAIL_FIELD,
  species: key,
  value: newValue,
});

export const formSuccess = () => ({
  type: FORM_SUCCESS,
});

export const formIssue = () => ({
  type: FORM_ISSUE,
});

export const changeNameError = (key, newValue) => ({
  type: NAME_ERROR,
  age: key,
  value: newValue,
});

export const changeDescriptionError = (key, newValue) => ({
  type: DESCRIPTION_ERROR,
  age: key,
  value: newValue,
});

export const changeSirenError = (key, newValue) => ({
  type: SIREN_ERROR,
  age: key,
  value: newValue,
});

export const changeStreetError = (key, newValue) => ({
  type: STREET_ERROR,
  age: key,
  value: newValue,
});

export const changeZipCodeError = (key, newValue) => ({
  type: ZIPCODE_ERROR,
  age: key,
  value: newValue,
});

export const changeCityError = (key, newValue) => ({
  type: CITY_ERROR,
  age: key,
  value: newValue,
});

export const changePhoneNumberError = (key, newValue) => ({
  type: PHONENUMBER_ERROR,
  age: key,
  value: newValue,
});

export const changeEmailError = (key, newValue) => ({
  type: EMAIL_ERROR,
  age: key,
  value: newValue,
});
