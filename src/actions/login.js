export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const loginSucces = (token) => ({
  type: LOGIN_SUCCES,
  tokenReceived: token,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});
