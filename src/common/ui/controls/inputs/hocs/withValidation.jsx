import { compose, withStateHandlers } from 'recompose';
import ValidationView from './validation';

function containsAllowedCharacters(value) {
  return /^[a-zA-Z0-9 ]*$/.test(value);
}

const initialState = () => ({
  validation: {
    success: true,
    error: {
      reason: '',
    },
  },
});

export default function withValidation(input) {
  return compose(withStateHandlers(initialState, {
    validate: (state, { onValidation }) => (value) => {
      let success = true;
      let error = {};
      let result = {};

      if (!value) {
        success = false;
        error = {
          reason: 'Field cannot be empty.',
        };
      } else if (!containsAllowedCharacters(value)) {
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
        value,
        validation: {
          success,
          error,
        },
      };
      onValidation(result);
      return result;
    },
  }))(ValidationView(input));
}
