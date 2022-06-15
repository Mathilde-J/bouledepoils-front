// reducer for subscription

import {
  CHANGE_FIELD,
  CHECK_EMPTY_FIELDS,
  EMPTY_ERRORS,
  REGISTRATION_SUCCES,
  CHECK_PASSWORD,
  CHECK_MAIL,
} from 'src/actions/register';

const initialState = {
  email: '',
  password: '',
  username: '',
  registrationSucces: null,
  errors: [],
  passwordCheck: null,
  emailCheck: null,
};

const subscription = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      if (action.fieldName === 'username') {
        return {
          ...state,
          username: action.fieldValue,
        };
      }
      if (action.fieldName === 'password') {
        return {
          ...state,
          password: action.fieldValue,
        };
      }
      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.fieldValue,
        };
      }
      return {
        ...state,
      };
    }
    case EMPTY_ERRORS: {
      return {
        ...state,
        errors: [],
      };
    }

    case CHECK_EMPTY_FIELDS: {
      if (action.fieldName === 'mail') {
        return {
          ...state,
          errors: [...state.errors,
            {
              id: 'mail',
              message: 'le champ email n\'est pas renseigné',
            }],
        };
      }
      if (action.fieldName === 'username') {
        return {
          ...state,
          errors: [...state.errors,
            {
              id: 'username',
              message: 'le champ nom dn\'utilisateur n\'est pas renseigné',
            }],

        };
      }
      return {
        ...state,
        errors: [...state.errors,
          {
            id: 'password',
            message: 'le champ mot de passe n\'est pas renseigné',
          }],

      };
    }

    case REGISTRATION_SUCCES: {
      return {
        ...state,
        registrationSucces: action.registrationDone,
      };
    }

    case CHECK_PASSWORD: {
      return {
        ...state,
        passwordCheck: action.passwordStatus,
      };
    }
    case CHECK_MAIL: {
      return {
        ...state,
        emailCheck: action.emailStatus,
      };
    }
    default:
      return state;
  }
};

export default subscription;
