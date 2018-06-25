import { compose, withStateHandlers } from 'recompose';
import ValidationView from './validation';

function containsAllowedCharacters(val) {
  return /^[a-zA-Z0-9 ]*$/.test(val);
}

const initialState = ({ value }) => ({
  validation: {
    success: true,
    error: {
      reason: '',
    },
  },
  textInputValue: value,
});

export default function withValidation(input) {
  return compose(withStateHandlers(initialState, {
    onChange: (state, { onValidation }) => ({ target: { value: val } }) => {
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
        textInputValue: val,
      };
      onValidation(result);
      return result;
    },
  }))(ValidationView(input));
}
