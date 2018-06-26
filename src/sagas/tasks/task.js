import {
  takeEvery,
  put,
  all,
  fork,
} from 'redux-saga/effects';
import uuid from 'uuid-random';
import Storage from '../../utils/storage';

function* watchSaveTaskToDB() {
  yield takeEvery('SAVE_TASK_TO_DB', function* saveTask({
    name,
    description,
    reminderEnabled,
    tags,
  }) {
    Storage.get().addTask(uuid(), name, description, reminderEnabled, tags);
    yield put('SAVE_TASK_TO_DB_COMPLETE');
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

export default function* () {
  yield all([fork(watchSaveTaskToDB), fork(watchGetTaskDetails), fork(watchEditTask)]);
}
