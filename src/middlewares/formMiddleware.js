import axios from 'axios';
import {
  FETCH_DEPARTMENT,
  FETCH_SPECIES,
  saveFetchedDepartments,
  saveFetchedSpecies,
} from '../actions/formActions';

const formMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SPECIES:
      axios.get('http://localhost:8081/api/species', {})
        .then((response) => {
          // handle success
          store.dispatch(saveFetchedSpecies(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });

      break;

    case FETCH_DEPARTMENT:
      axios.get('http://localhost:8081/api/department', {})
        .then((response) => {
          // handle success
          store.dispatch(saveFetchedDepartments(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default formMiddleware;
