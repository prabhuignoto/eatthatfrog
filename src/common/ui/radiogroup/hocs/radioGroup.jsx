import { compose, withStateHandlers } from 'recompose';
import uuid from 'uuid-random';
import RadioGroup from '../index';

const initialState = ({ foxes = [] }) => ({
  foxes: foxes.map(x => ({
    name: x.name,
    id: x.id || `fox-${x.name}-${uuid().replace(/-/g, '')}`,
    selected: x.selected || false,
  })),
});


const stateHandlers = {
  toggleSelection: ({ foxes }) => id => ({
    foxes: foxes.map((x) => {
      if (x.id === id) {
        return Object.assign({}, x, {
          selected: !x.selected,
        });
      }
      return x;
    }),
  }),
};

export default compose(withStateHandlers(initialState, stateHandlers))(RadioGroup);
