import { compose, withStateHandlers } from 'recompose';
import Layout from '../index';

const dLayouts = [{
  title: 'List Only',
  id: 'listonly',
  selected: false,
}, {
  title: 'Show All',
  id: 'showall',
  selected: true,
}, {
  title: 'Hide Filters',
  id: 'withoutfilters',
  selected: false,
}];

const initialState = ({ layouts = dLayouts }) => ({
  layouts,
});

const stateHandlers = {
  onLayoutChange: ({ layouts }) => ({ target: { value: id } }) => ({
    layouts: layouts.map((x) => {
      if (x.id === id) {
        return Object.assign({}, x, {
          selected: true,
        });
      }
      return Object.assign({}, x, {
        selected: false,
      });
    }),
  }),
};

export default compose(withStateHandlers(initialState, stateHandlers))(Layout);
