import { withStateHandlers, compose } from 'recompose';
import Selectable from './views/selectable';

const initialState = ({ on = false }) => ({
  on,
});

const stateHandlers = {
  onChange: ({ on }) => () => {
    return {
      on: !on,
    };
  },
};

export default compose(withStateHandlers(initialState, stateHandlers))(Selectable);
