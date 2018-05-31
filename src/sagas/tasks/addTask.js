import { takeEvery, put, all, fork } from 'redux-saga/effects';
import uuid from 'uuid-random';
import Storage from '../../utils/storage';

function* watchAddTask() {
  yield takeEvery('ADD_TASK', function* addTask({ name, description }) {
    Storage.get().addTask(uuid(), name, description);
    yield put('ADD_TASK_COMPLETED');
  });
}

function* watchTaskComplete() {
  yield takeEvery('ADD_TASK_COMPLETED', function* taskComplete() {
    yield true;
  });
}

export default function* () {
  yield all([fork(watchAddTask), fork(watchTaskComplete)]);
}

