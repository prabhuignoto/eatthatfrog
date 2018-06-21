import { compose, withStateHandlers } from 'recompose';
import TextArea from './textarea';

const intialState = ({ value = '' }) => ({
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

export default compose(withStateHandlers(intialState, stateHandlers))(TextArea);
