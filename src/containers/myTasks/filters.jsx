import { compose, withStateHandlers } from 'recompose';
import Filters from '../../components/myTasks/views/filter';

const initialState = ({
  filterToday = false,
  filterOlder = false,
  filterOpen = false,
  filterCompleted = false,
  show = true,
}) => ({
  filterToday,
  filterOlder,
  filterOpen,
  filterCompleted,
  show,
});

const stateHandlers = {
  onFilterToday: ({ filterToday }) => () => ({
    filterToday: !filterToday,
  }),
  onFilterOlder: ({ filterOlder }) => () => ({
    filterOlder: !filterOlder,
  }),
  onFilterOpen: ({ filterOpen }) => () => ({
    filterOpen: !filterOpen,
  }),
  onFilterCompleted: ({ filterCompleted }) => () => ({
    filterCompleted: !filterCompleted,
  }),
  closeFilters: (state, { onFilterClosed }) => () => {
    onFilterClosed();
    return { show: false };
  },
};

export default compose(withStateHandlers(initialState, stateHandlers))(Filters);
