import _ from 'lodash';

export default function (state = {
  allTasks: [],
  selectedTask: {
    name: '',
    description: '',
    id: '',
  },
  filter: {
    today: true,
    older: false,
    open: true,
    completed: false,
  },
}, action) {
  switch (action.type) {
    case 'ADD_TASK':
    {
      return Object.assign({}, state);
    }
    case 'ADD_TASK_COMPLETED':
    {
      return Object.assign({}, state);
    }
    case 'GET_ALL_TASKS':
    {
      return Object.assign({}, state);
    }
    case 'GET_ALL_TASKS_COMPLETE':
    {
      return Object.assign({}, state, {
        allTasks: action.tasks,
      });
    }
    case 'GET_TASK_DETAILS_COMPLETE':
    {
      return Object.assign({}, state, {
        selectedTask: action.task,
      });
    }
    case 'RESTORE_TASK_COMPLETE':
      return Object.assign({}, state, {
        allTasks: state.allTasks.map((x) => {
          if (x.id === action.id) {
            return Object.assign({}, x, { status: 'open' });
          }
          return x;
        }),
      });
    case 'DELETE_TASK_COMPLETE': {
      return Object.assign({}, state, {
        allTasks: state.allTasks.filter(x => x.id !== action.id),
      });
    }
    case 'FINISH_TASK_COMPLETE': {
      return Object.assign({}, state, {
        allTasks: state.allTasks.map((x) => {
          if (x.id === action.id) {
            return Object.assign(x, { status: 'complete' });
          }
          return x;
        }),
      });
    }
    case 'UPDATE_FILTERS': {
      return Object.assign({}, state, {
        filter: action.filter,
      });
    }
    case 'FINISH_UPDATE_FILTERS': {
      return Object.assign({}, state, {
        filter: action.filter,
      });
    }
    case 'ADD_TASK_TO_DB_COMPLETE': {
      const itemExistsAlready = _.some(state.allTasks, item => item.id === action.task.id);
      let tasks = [];
      if (itemExistsAlready) {
        tasks = state.allTasks.slice(0);
      } else {
        tasks = [].concat.call([], state.allTasks, [action.task]);
      }
      return Object.assign({}, state, {
        allTasks: tasks,
        selectedTask: Object.assign({}, action.task),
      });
    }
    case 'ADD_TASK_TO_DB': {
      return Object.assign({}, state);
    }
    default:
      return state;
  }
}
