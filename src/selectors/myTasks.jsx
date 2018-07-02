import { createSelector } from 'reselect';
import _ from 'lodash';

const getSelectedTask = state => state.selectedTask;
const getAllTasks = state => state.allTasks;
const getOpen = state => state.filter.open;
const getCompleted = state => state.filter.completed;

const getAllTasksWithSelection = createSelector(
  [getSelectedTask, getAllTasks],
  (selectedTask, allTasks) => allTasks.map((item) => {
    let result = null;
    if (item.id === selectedTask.id) {
      result = Object.assign(item, { selected: true });
    } else {
      result = Object.assign(item, { selected: false });
    }
    return result;
  }),
);

const getAllTasksFiltered = createSelector(
  [getOpen, getCompleted, getAllTasksWithSelection],
  (open, completed, tasks) => {
    const criteria = [];
    if (open) {
      criteria.push('open');
    }
    if (completed) {
      criteria.push('complete');
    }
    return tasks.filter(x => _.some(criteria, y => y === x.status));
  },
);

export default getAllTasksFiltered;
