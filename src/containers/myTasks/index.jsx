import { connect } from 'react-redux';
import { compose, lifecycle, withStateHandlers, defaultProps } from 'recompose';
import uuid from 'uuid-random';
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
    items: Task.allTasks.map((item) => {
      let result = null;
      if (item.id === Task.selectedTask.id) {
        result = Object.assign(item, { selected: true });
      } else {
        result = Object.assign(item, { selected: false });
      }
      return result;
    }),
    selectedTaskId,
    name,
    description,
    reminderEnabled,
    taskTags,
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
}) => ({
  layouts,
  selectedTaskId,
  layoutType,
  filtersVisible,
  createMode,
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
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getAllTasks();
    },
  }),
  withStateHandlers(initialState, stateHandlers),
)(MyTasks);
