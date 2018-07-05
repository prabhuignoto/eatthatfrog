import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { updateFilters as UpdateFilters } from '../../actions';
import Filters from '../../components/myTasks/views/filter';
import { getFilter } from '../../selectors/myTasks';

const initialState = ({
  todayEnabled = false,
  olderEnabled = false,
  openEnabled = false,
  completedEnabled = false,
  show = true,
  filter = {
    today: true,
    older: false,
    open: true,
    completed: false,
  },
}) => ({
  todayEnabled,
  olderEnabled,
  openEnabled,
  completedEnabled,
  show,
  filter,
});

const stateHandlers = {
  onTodayChecked: ({ todayEnabled, filter }, { updateFilters }) => () => {
    updateFilters(Object.assign(filter, { today: !todayEnabled }));
    return {
      todayEnabled: !todayEnabled,
    };
  },
  onOlderChecked: ({ olderEnabled, filter }, { updateFilters }) => () => {
    updateFilters(Object.assign(filter, { older: !olderEnabled }));
    return {
      olderEnabled: !olderEnabled,
    };
  },
  onOpenChecked: ({ openEnabled, filter }, { updateFilters }) => () => {
    updateFilters(Object.assign(filter, { open: !openEnabled }));
    return {
      openEnabled: !openEnabled,
    };
  },
  onCompletedChecked: ({ completedEnabled, filter }, { updateFilters }) => () => {
    updateFilters(Object.assign(filter, { completed: !completedEnabled }));
    return {
      completedEnabled: !completedEnabled,
    };
  },
  closeFilters: (state, { onFilterClosed }) => () => {
    onFilterClosed();
    return { show: false };
  },
};

const mapDispatchToProps = dispatch => ({
  updateFilters: filter => dispatch(UpdateFilters(filter)),
});

const mapStateToProps = ({ Task }) => {
  const {
    today: todayEnabled,
    older: olderEnabled,
    open: openEnabled,
    completed: completedEnabled,
  } = getFilter(Task);
  return {
    todayEnabled,
    olderEnabled,
    openEnabled,
    completedEnabled,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
)(Filters);
