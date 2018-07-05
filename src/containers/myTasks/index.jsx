import { connect } from 'react-redux';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import uuid from 'uniqid';
import { getAllTasksFiltered, getTaskAvailability } from '../../selectors/myTasks';
import MyTasks from '../../components/myTasks/views/myTasks';
import { getAllTasks, updateLayoutType as UpdateLayout, getTaskDetails as GetTaskDetails } from '../../actions';

const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks()),
  updateLayoutType: type => dispatch(UpdateLayout(type)),
  getTaskDetails: id => dispatch(GetTaskDetails(id)),
});

const mapStateToProps = ({ Task }) => {
  const {
    name, description, id: selectedTaskId, reminderEnabled, tags: taskTags,
  } = Task.selectedTask;
  return {
    items: getAllTasksFiltered(Task),
    selectedTaskId,
    name,
    description,
    reminderEnabled,
    taskTags,
    tasksAvailable: getTaskAvailability(Task),
  };
};

const defaultLayouts = [{
  title: 'Show All',
  id: 'showall',
  selected: false,
}, {
  title: 'Hide Filters',
  id: 'withoutfilters',
  selected: true,
}];

const initialState = ({
  layouts = defaultLayouts,
  selectedTaskId = uuid(),
  layoutType = 'withoutfilters',
  filtersVisible = false,
  createMode = false,
  notificationCenterVisible = false,
}) => ({
  layouts,
  selectedTaskId,
  layoutType,
  filtersVisible,
  createMode,
  notificationCenterVisible,
});

const stateHandlers = {
  onLayoutChange: ({ layouts }) => ({ target: { value: layoutType } }) => ({
    layouts: layouts.map((x) => {
      if (x.id === layoutType) {
        return Object.assign({}, x, {
          selected: true,
        });
      }
      return Object.assign({}, x, {
        selected: false,
      });
    }),
    layoutType,
  }),
  showFilters: () => () => ({
    filtersVisible: true,
  }),
  onListItemSelected: (state, { getTaskDetails }) => id => getTaskDetails(id),
  onFilterClosed: () => () => ({
    filtersVisible: false,
  }),
  onAddTask: () => () => ({
    createMode: true,
  }),
  onBack: () => () => ({
    createMode: false,
  }),
  onSaved: () => () => ({
    createMode: false,
  }),
  showNotificationCenter: () => () => ({
    notificationCenterVisible: true,
  }),
  closeNotificationCenter: () => () => ({
    notificationCenterVisible: false,
  }),
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(initialState, stateHandlers),
  lifecycle({
    componentDidMount() {
      this.props.getAllTasks();
    },
  }),
)(MyTasks);
