import {
  takeEvery,
  put,
  all,
  fork,
} from 'redux-saga/effects';
import uuid from 'uniqid';
import Storage from '../../utils/storage';
import { getAllTasks } from '../../actions';

function* watchGetAllTasks() {
  yield takeEvery('GET_ALL_TASKS', function* getAllTasks() {
    yield put.resolve({
      type: 'GET_ALL_TASKS_COMPLETE',
      tasks: Storage.get().getAllTasks(),
    })
  });
}

function* watchAddTaskToDB() {
  yield takeEvery('ADD_TASK_TO_DB', function* saveTask({
    name,
    description,
    reminderEnabled,
    tags,
    status,
  }) {
    const id = uuid();
    const newTask = Storage.get().addTask(id, name, description, reminderEnabled, tags, status);
    yield put.resolve({
      type: 'ADD_TASK_TO_DB_COMPLETE',
      task: newTask,
    });
  });
}

function* watchEditTask() {
  yield takeEvery('EDIT_TASK', function* editTask({
    name,
    id,
    description,
    reminderEnabled,
    tags,
    status,
  }) {
    const task = Storage.get().editTask(name, id, description, reminderEnabled, tags, status);
    yield put({ type: 'EDIT_TASK_COMPLETE', task });
  });
}

function* watchGetTaskDetails() {
  yield takeEvery('GET_TASK_DETAILS', function* getTask({ id }) {
    yield put({ type: 'GET_TASK_DETAILS_COMPLETE', task: Storage.get().getTaskById(id) });
  });
}

function* watchDeleteTask() {
  yield takeEvery('DELETE_TASK', function* deleteTask({ id }) {
    Storage.get().deleteTask(id);
    yield put({ type: 'DELETE_TASK_COMPLETE', id });
  });
}

function* watchFinishTask() {
  yield takeEvery('FINISH_TASK', function* finishTask({ id }) {
    Storage.get().finishTask(id);
    yield put({ type: 'FINISH_TASK_COMPLETE', id });
  });
}
``
function* watchRedoTask() {
  yield takeEvery('RESTORE_TASK', function* finishTask({ id }) {
    Storage.get().redoTask(id);
    yield put({ type: 'RESTORE_TASK_COMPLETE', id });
  });
}

function* watchUpdateFilters() {
  yield takeEvery('UPDATE_FILTERS', function* updateFilters({ filter }) {
    Storage.get().setFilters(filter);
    yield put({ type: 'FINISH_UPDATE_FILTERS', filter });
  });
}

function* watchDismissReminder() {
  yield takeEvery('DISMISS_REMINDER', function* dismissReminder({ id }) {
    const task = Storage.get().dismissReminder(id);
    yield put({
      type: 'DISMISS_REMINDER_COMPLETE',
      task,
    })
  });
}

export default function* () {
  yield all([
    fork(watchAddTaskToDB),
    fork(watchGetTaskDetails),
    fork(watchEditTask),
    fork(watchDeleteTask),
    fork(watchFinishTask),
    fork(watchUpdateFilters),
    fork(watchRedoTask),
    fork(watchDismissReminder),
  ]);
}
