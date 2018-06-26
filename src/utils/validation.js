function containsAllowedCharacters(val) {
  return /^[a-zA-Z0-9 ]*$/.test(val);
}

export default function doValidation(key, val) {
  let success = true;
  let error = {};
  let result = {};

  if (!val) {
    success = false;
    error = {
      reason: 'Field cannot be empty.',
    };
  } else if (!containsAllowedCharacters(val)) {
    success = false;
    error = {
      reason: 'Field cannot contain special characters.',
    };
  } else {
    success = true;
    error = {
      reason: '',
    };
  }
  result = {
    validation: {
      success,
      error,
    },
    [key]: val,
  };
  return result;
}
