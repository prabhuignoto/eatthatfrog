import { compose, withStateHandlers, defaultProps } from 'recompose';
import uuid from 'uuid-random';
import Smartag from './views/tags';

const initialState = ({ foxes = [], input = '', disableInput = false }) => ({
  foxes: foxes.length > 0 ? foxes.map(x => Object.assign(x, {
    id: `listfox${uuid().replace(/-/g, '')}`,
  })) : null,
  input,
  disableInput,
});

const stateHandlers = {
  onKeyInput: () => ev => ({ input: ev.target.value }),
  onAddOrRemoveFox: ({ foxes }) => (ev) => {
    const { value } = ev.target;
    if (ev.keyCode === 13 && value) {
      const nFoxes = foxes.concat([{
        name: value,
        id: `listfox${uuid().replace(/-/g, '')}`,
      }]);
      return {
        input: '',
        foxes: nFoxes,
        disableInput: false,
      };
    } else if (ev.keyCode === 8 && !value) {
      const oldFoxes = foxes;
      const newFoxes = oldFoxes.slice(0, oldFoxes.length - 1);
      return {
        foxes: newFoxes,
      };
    }
    return undefined;
  },
  onRemoveFoxById: ({ foxes }) => id => ({
    input: '',
    foxes: foxes.filter(x => x.id !== id),
    disableInput: false,
  }),
};

const props = {
  limit: 10,
  isReadOnly: false,
};

export default compose(
  withStateHandlers(initialState, stateHandlers),
  defaultProps(props),
)(Smartag);
