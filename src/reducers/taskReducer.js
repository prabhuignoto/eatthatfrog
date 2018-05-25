import Storage from '../utils/storage';

export default function (state = {}, action) {
  const Store = Storage.get();
  switch (action.type) {
    case 'ADD_TASK': {
      const id = new Date().getMilliseconds();
      const { name, description } = action;
      Store.addTask(id, name, description);
      return Object.assign({}, state, {
        totalTasks: Store.getStats().totalTasks,
      });
    }
    default: return state;
  }
}
