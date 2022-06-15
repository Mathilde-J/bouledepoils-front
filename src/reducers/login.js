import {
  CHANGE_FIELD,
} from 'src/actions/register';

import { LOGIN_SUCCES, LOGIN_FAILURE, LOGOUT } from 'src/actions/login';

const initialState = {
  emailLogin: '',
  passwordLogin: '',
  tokenUserConnected: null,
  role: null,
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      if (action.fieldName === 'email-login') {
        return {
          ...state,
          emailLogin: action.fieldValue,
        };
      }
      if (action.fieldName === 'password-login') {
        return {
          ...state,
          passwordLogin: action.fieldValue,
        };
      }
      return {
        ...state,
      };

    case LOGIN_SUCCES:
      return {
        ...state,
        tokenUserConnected: action.tokenReceived,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        tokenUserConnected: false,
      };
    case LOGOUT:
      return {
        ...state,
        tokenUserConnected: null,
        emailLogin: '',
        passwordLogin: '',
      };

    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
