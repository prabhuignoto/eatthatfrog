import { compose, withStateHandlers } from 'recompose';
import TextArea from './textarea';

const intialState = ({ value = '' }) => ({
  textInputValue: value,
});

const stateHandlers = {
  onChange: (state, { validate }) => ({ target: { value } }) => {
    validate(value);
    return {
      textInputValue: value,
    };
  },
};

export default compose(withStateHandlers(intialState, stateHandlers))(TextArea);
