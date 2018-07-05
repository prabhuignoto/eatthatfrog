import { createSelector } from 'reselect';
import _ from 'lodash';

const getSelectedTask = state => state.selectedTask;
const getAllTasks = state => state.allTasks;
const getOpen = state => state.filter.open;
const getCompleted = state => state.filter.completed;
const getFilter = state => state.filter;

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

const getTaskAvailability = createSelector(
  [getAllTasks],
  tasks => tasks.length > 0,
);

const getOpenTasks = createSelector(
  [getAllTasks],
  tasks => tasks.filter(x => x.status === 'open').length,
);

const getCompletedTasks = createSelector(
  [getAllTasks],
  tasks => tasks.filter(x => x.status === 'complete').length,
);

const getReminders = createSelector(
  [getAllTasks],
  tasks => tasks.filter(x => x.reminderEnabled === true).length,
);

export { getAllTasksFiltered,
  getTaskAvailability,
  getOpenTasks,
  getCompletedTasks,
  getReminders,
  getFilter,
};
