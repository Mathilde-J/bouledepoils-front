import axios from 'axios';
import { FETCH_ANIMALS, FETCH_ALL_ANIMALS, saveFetchedAnimals } from '../actions/animalSearched';

const animalSearchedMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANIMALS:
      axios.post('http://localhost:8081/api/animal/form', {
        species: store.getState().SearchedAnimals.species,
        gender: store.getState().SearchedAnimals.gender,
        age: store.getState().SearchedAnimals.age,
        childCompatibility: store.getState().SearchedAnimals.childCompatibility,
        other_animal_compatibility: store.getState().SearchedAnimals.otherAnimalCompatibility,
        garden_needed: store.getState().SearchedAnimals.gardenNeeded,
        status: store.getState().SearchedAnimals.status,
        department: store.getState().SearchedAnimals.department,
      })
        .then((response) => {
          // handle success
          response.data.length === 0
            ? store.dispatch(saveFetchedAnimals('void'))
            : store.dispatch(saveFetchedAnimals(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
          store.dispatch(saveFetchedAnimals('error'));
        });

      break;

    case FETCH_ALL_ANIMALS:
      axios.get('http://localhost:8081/api/animal', {})
        .then((response) => {
          // handle success
          store.dispatch(saveFetchedAnimals(response.data));
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

export default animalSearchedMiddleware;
