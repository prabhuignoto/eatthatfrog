import { takeEvery, put } from 'redux-saga/effects';
import Storage from '../../utils/storage';

export default function* watchGetAllTasks() {
  yield takeEvery('GET_ALL_TASKS', function* getAllTasks() {
    const tasks = Storage.get().getAllTasks();
    yield put({ type: 'GET_ALL_TASKS_COMPLETE', tasks });
  });
}
