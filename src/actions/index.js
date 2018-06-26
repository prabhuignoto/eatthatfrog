export function saveTask(name, description, reminderEnabled, tags) {
  return {
    type: 'SAVE_TASK_TO_DB',
    name,
    description,
    reminderEnabled,
    tags,
  };
}

export function editTask(name, description, reminderEnabled, tags) {
  return {
    type: 'EDIT_TASK',
    name,
    description,
    reminderEnabled,
    tags,
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

export function getTaskDetails(id) {
  return {
    type: 'GET_TASK_DETAILS',
    id,
  };
}

export function updateLayoutType(type) {
  return {
    type: 'UPDATE_LAYOUT_TYPE',
    layoutType: type,
  };
}

