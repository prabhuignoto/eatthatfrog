export function saveTask(name, description, reminderEnabled, tags, status) {
  return {
    type: 'SAVE_TASK_TO_DB',
    name,
    description,
    reminderEnabled,
    tags,
    status,
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

export function deleteTask(id) {
  return {
    type: 'DELETE_TASK',
    id,
  };
}

export function finishTask(id) {
  return {
    type: 'FINISH_TASK',
    id,
  };
}
