import {
  NEXT_PROFILE,
  PREVIOUS_PROFILE,
  DISPLAY_CONTACT,
  SAVE_ANIMALS,
  EMPTY_ANIMAL_RESULTS,
} from 'src/actions/animalSearched';
import {
  CHANGE_AGE_FIELD,
  CHANGE_GENDER_FIELD,
  CHANGE_SPECIES_FIELD,
  CHANGE_CHILD_FIELD,
  CHANGE_OTHERS_FIELD,
  CHANGE_GARDEN_FIELD,
  CHANGE_LOC_FIELD,
  CHANGE_STATUS_FIELD,
} from 'src/actions/formActions';

const initialState = {
  species: 999,
  gender: 2,
  age: 4,
  childCompatibility: 0,
  otherAnimalCompatibility: 0,
  gardenNeeded: 0,
  status: 0,
  department: 0,
  animalResults: [],
  displayProfile: 0,
  favorites: [],
  showContact: false,
  formSubmit: false,

};
// ternaire : x === 3 ? traitement si true : traitement si false.

const searchedAnimalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_STATUS_FIELD:
      return {
        ...state,
        status: action.value,
      };

    case CHANGE_SPECIES_FIELD:
      return {
        ...state,
        species: action.value,
      };

    case CHANGE_GENDER_FIELD:
      return {
        ...state,
        gender: action.value,
      };

    case CHANGE_AGE_FIELD:
      return {
        ...state,
        age: action.value,
      };

    case CHANGE_CHILD_FIELD:
      return {
        ...state,
        childCompatibility: action.value,
      };

    case CHANGE_OTHERS_FIELD:
      return {
        ...state,
        otherAnimalCompatibility: action.value,
      };

    case CHANGE_GARDEN_FIELD:
      return {
        ...state,
        gardenNeeded: action.value,
      };

    case CHANGE_LOC_FIELD:
      return {
        ...state,
        department: action.value,
      };

    case NEXT_PROFILE: {
      const newState = { ...state };

      const maxIndex = newState.displayProfile + 1 >= newState.animalResults.length
        ? newState.displayProfile = 0 : newState.displayProfile + 1;

      newState.displayProfile = maxIndex;
      newState.showContact = false;
      return newState;
    }

    case PREVIOUS_PROFILE: {
      const newState = { ...state };

      const minIndex = newState.displayProfile - 1 < 0
        ? newState.displayProfile = newState.animalResults.length - 1
        : newState.displayProfile - 1;

      newState.displayProfile = minIndex;
      newState.showContact = false;
      return newState;
    }

    case DISPLAY_CONTACT: {
      return {
        ...state,
        showContact: action.displayed,
      };
    }

    case SAVE_ANIMALS: {
      return {
        ...state,
        animalResults: action.datas,
      };
    }

    case EMPTY_ANIMAL_RESULTS: {
      return {
        ...state,
        animalResults: [],
        species: 999,
        gender: 2,
        age: 4,
        childCompatibility: 0,
        otherAnimalCompatibility: 0,
        gardenNeeded: 0,
        status: 0,
        department: 0,
      };
    }

    default:
      return state;
  }
};

export default searchedAnimalsReducer;
