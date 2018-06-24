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
    Storage.get().addTask(uuid, name, description, reminderEnabled, tags);
    yield put('SAVE_TASK_TO_DB_COMPLETE');
  });
}

export default function* () {
  yield all([fork(watchSaveTaskToDB)]);
}

