import { compose, withStateHandlers } from 'recompose';
import TextInput from './textInput';

const initialState = ({ value = '' }) => ({
  textInputValue: value,
});

const stateHandlers = {
  onChange: () => ({ target: { value } }) => ({
    textInputValue: value,
  }),
};

export default compose(withStateHandlers(initialState, stateHandlers))(TextInput);
