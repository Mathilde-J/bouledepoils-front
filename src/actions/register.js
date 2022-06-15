export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_EMPTY_FIELDS = 'CHECK_EMPTY_FIELDS';
export const EMPTY_ERRORS = 'EMPTY_ERRORS';
export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const REGISTRATION_SUCCES = 'REGISTRATION_SUCCES';
export const CHECK_PASSWORD = 'CHECK_PASSWORD';
export const CHECK_MAIL = 'CHECK_MAIL';

export const changedFields = (name, value) => ({
  type: CHANGE_FIELD,
  fieldName: name,
  fieldValue: value,
});

export const checkEmptyFields = (nameSubscriptionField) => ({
  type: CHECK_EMPTY_FIELDS,
  fieldName: nameSubscriptionField,
});

export const emptyErrors = () => ({
  type: EMPTY_ERRORS,
});

export const submitRegistration = () => ({
  type: SUBMIT_REGISTRATION,
});

export const checkValidPassword = (bool) => ({
  type: CHECK_PASSWORD,
  passwordStatus: bool,
});

export const registrationSucces = (status) => ({
  type: REGISTRATION_SUCCES,
  registrationDone: status,
});

export const checkValidMail = (mailStatus) => ({
  type: CHECK_MAIL,
  emailStatus: mailStatus,
});
