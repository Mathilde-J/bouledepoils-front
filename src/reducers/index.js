import { combineReducers } from 'redux';

import loginReducer from './login';
import formReducer from './formReducer';
import searchedAnimalsReducer from './searchedAnimals';
import registrationReducer from './registration';
import carrouselReducer from './Carroussel';
import associationReducer from './association';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  SearchedAnimals: searchedAnimalsReducer,
  Registration: registrationReducer,
  FormReducer: formReducer,
  Login: loginReducer,
  Carroussel: carrouselReducer,
  Association: associationReducer,
});

export default rootReducer;
