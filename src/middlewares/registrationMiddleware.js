import axios from 'axios';
import { SUBMIT_REGISTRATION, registrationSucces } from '../actions/register';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION:
      // connection to API sending username, password and mail

      axios.post(
        'http://localhost:8081/api/user/form',
        {
          email: store.getState().Registration.email,
          pseudo: store.getState().Registration.username,
          password: store.getState().Registration.password,
        },
      )
        .then(() => {
          store.dispatch(registrationSucces(true));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(registrationSucces(false));
        });
      break;

    default:
  }
  next(action);
};

export default registrationMiddleware;
