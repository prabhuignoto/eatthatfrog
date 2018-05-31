export function addTask(name, description) {
  return {
    type: 'ADD_TASK',
    name,
    description,
  };
}

export function addTaskCompleted() {
  return {
    type: 'ADD_TASK_COMPLETED',
  };
}

export function getAllTasks() {
  return {
    type: 'GET_ALL_TASKS',
  };
}

export function getAllTasksComplete() {
  return {
    type: 'GET_ALL_TASKS_COMPLETE',
  };
}

