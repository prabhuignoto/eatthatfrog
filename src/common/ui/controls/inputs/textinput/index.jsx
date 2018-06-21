import { compose, withStateHandlers } from 'recompose';
import Text from './textInput';

const initialState = ({ value = '' }) => ({
  value,
});

const stateHandlers = {
  onChange: (state, { validate }) => ({ target: { value } }) => {
    validate(value);
    return {
      value,
    };
  },
};

export default compose(withStateHandlers(initialState, stateHandlers))(Text);
