import {
  SAVE_DEPARTMENT,
  SAVE_SPECIES,
  SUBMIT_FORM,
  SPECIES_ERROR,
  AGE_ERROR,
  LOC_ERROR,
  FORM_SUCCESS,
  FORM_ISSUE,
  NAME_ERROR,
  DESCRIPTION_ERROR,
  SIREN_ERROR,
  STREET_ERROR,
  ZIPCODE_ERROR,
  CITY_ERROR,
  PHONENUMBER_ERROR,
  EMAIL_ERROR,
  NOTSUBMIT_FORM,
} from 'src/actions/formActions';
import {
  EMPTY_ANIMAL_RESULTS,
} from 'src/actions/animalSearched';

const initialState = {
  departments: [],
  species: [],
  formSubmit: false,
  speciesError: true,
  genderError: false,
  ageError: false,
  childError: false,
  othersError: false,
  gardenError: false,
  departmentError: false,
  checkboxError: false,
  nameError: true,
  descriptionError: false,
  sirenError: false,
  streetError: false,
  zipCodeError: false,
  cityError: false,
  phoneNumberError: false,
  emailError: false,
  formResult: null,
};

const formReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SPECIES_ERROR: {
      return {
        ...state,
        speciesError: action.value,
      };
    }

    case AGE_ERROR: {
      return {
        ...state,
        ageError: action.value,
      };
    }

    case LOC_ERROR: {
      return {
        ...state,
        departmentError: action.value,
      };
    }

    case SUBMIT_FORM: {
      return {
        ...state,
        formSubmit: true,
      };
    }

    case NOTSUBMIT_FORM: {
      return {
        ...state,
        formSubmit: false,
      };
    }

    case SAVE_DEPARTMENT: {
      return {
        ...state,
        departments: action.datas,
      };
    }

    case SAVE_SPECIES: {
      return {
        ...state,
        species: action.datas,
      };
    }

    case FORM_SUCCESS: {
      return {
        ...state,
        formResult: true,
      };
    }

    case FORM_ISSUE: {
      return {
        ...state,
        formResult: false,
      };
    }

    case NAME_ERROR: {
      return {
        ...state,
        nameError: action.value,
      };
    }

    case DESCRIPTION_ERROR: {
      return {
        ...state,
        descriptionError: action.value,
      };
    }

    case SIREN_ERROR: {
      return {
        ...state,
        sirenError: action.value,
      };
    }

    case STREET_ERROR: {
      return {
        ...state,
        streetError: action.value,
      };
    }

    case ZIPCODE_ERROR: {
      return {
        ...state,
        zipCodeError: action.value,
      };
    }

    case CITY_ERROR: {
      return {
        ...state,
        cityError: action.value,
      };
    }

    case PHONENUMBER_ERROR: {
      return {
        ...state,
        phoneNumberError: action.value,
      };
    }

    case EMAIL_ERROR: {
      return {
        ...state,
        emailError: action.value,
      };
    }
    case EMPTY_ANIMAL_RESULTS: {
      return {
        ...state,
        speciesError: true,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
