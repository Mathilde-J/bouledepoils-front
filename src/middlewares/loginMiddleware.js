import axios from 'axios';
import { SUBMIT_LOGIN, loginSucces, loginFailure } from '../actions/login';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post('http://localhost:8081/api/login_check', {
        username: store.getState().Login.emailLogin,
        password: store.getState().Login.passwordLogin,
      })
        .then((response) => {
          store.dispatch(loginSucces(response.data.token));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(loginFailure());
        });
      break;
    default:
  }

  next(action);
};
export default loginMiddleware;
