import {
  takeEvery,
  put,
  all,
  fork,
} from 'redux-saga/effects';
import uuid from 'uniqid';
import Storage from '../../utils/storage';

function* watchAddTaskToDB() {
  yield takeEvery('ADD_TASK_TO_DB', function* saveTask({
    name,
    description,
    reminderEnabled,
    tags,
    status,
  }) {
    const id = uuid();
    Storage.get().addTask(id, name, description, reminderEnabled, tags, status);
    yield put.resolve({
      type: 'ADD_TASK_TO_DB_COMPLETE',
      task: {
        id,
        name,
        description,
        tags,
        status,
        reminderEnabled,
      },
    });
  });
}

function* watchEditTask() {
  yield takeEvery('EDIT_TASK', function* editTask({
    name,
    description,
    reminderEnabled,
    tags,
  }) {
    Storage.get().editTask(uuid(), name, description, reminderEnabled, tags);
    yield put({ type: 'EDIT_TASK_COMPLETE' });
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

export default function* () {
  yield all([
    fork(watchAddTaskToDB),
    fork(watchGetTaskDetails),
    fork(watchEditTask),
    fork(watchDeleteTask),
    fork(watchFinishTask),
    fork(watchUpdateFilters),
    fork(watchRedoTask),
  ]);
}
