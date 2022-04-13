import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import animalSearchedMiddleware from '../middlewares/animalSearchedMiddleware';
import assoMiddleware from '../middlewares/assoMiddleware';
import formMiddleware from '../middlewares/formMiddleware';
import registrationMiddleware from '../middlewares/registrationMiddleware';
import loginMiddleware from '../middlewares/loginMiddleware';


import carrousselMiddleware from '../middlewares/carrousselMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    animalSearchedMiddleware,
    formMiddleware,
    registrationMiddleware,
    loginMiddleware,
    assoMiddleware,
    carrousselMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
