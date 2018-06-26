export default function (state = {
  allTasks: [],
  selectedTask: {
    name: '',
    description: '',
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
    default:
      return state;
  }
}
