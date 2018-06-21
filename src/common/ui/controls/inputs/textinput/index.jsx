import { compose, withStateHandlers } from 'recompose';
import Text from './textInput';

const initialState = ({ value = '' }) => ({
  value,
});

const stateHandlers = {
  onChange: (state, { onValidation }) => ({ target: { value } }) => {
    onValidation(value);
    return {
      value,
    };
  },
};

export default compose(withStateHandlers(initialState, stateHandlers))(Text);
