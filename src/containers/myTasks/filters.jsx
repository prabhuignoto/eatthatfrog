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
  onTodayChecked: ({ todayEnabled }) => () => ({
    todayEnabled: !todayEnabled,
  }),
  onOlderChecked: ({ olderEnabled }) => () => ({
    olderEnabled: !olderEnabled,
  }),
  onOpenChecked: ({ openEnabled }) => () => ({
    openEnabled: !openEnabled,
  }),
  onCompletedChecked: ({ completedEnabled }) => () => ({
    completedEnabled: !completedEnabled,
  }),
  closeFilters: (state, { onFilterClosed }) => () => {
    onFilterClosed();
    return { show: false };
  },
};

export default compose(withStateHandlers(initialState, stateHandlers))(Filters);
