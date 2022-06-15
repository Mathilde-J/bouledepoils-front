const passwordHas8CharMin = (password) => password.length >= 8;

const passwordHasUpperCaseChar = (password) => /[A-Z]/.test(password);

const passwordHasInt = (password) => /[0-9]/.test(password);

const passwordHasSpecialChar = (password) => /[&"-è_@+*~ˇ&{'}[\]`^$ø£¨%§!:?,<>]/.test(password);

export const isPasswordOk = (password) => {
  const allOk = passwordHas8CharMin(password)
    && passwordHasUpperCaseChar(password)
    && passwordHasInt(password)
    && passwordHasSpecialChar(password);
  return allOk;
};

// eslint-disable-next-line no-useless-escape
export const isEmailOk = (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));
