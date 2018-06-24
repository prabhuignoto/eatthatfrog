import { all, fork } from 'redux-saga/effects';
import addTask from './addTask';
import getAllTasks from './getAllTasks';

export default function* rootSaga() {
  yield all([
    fork(addTask),
    fork(getAllTasks),
  ]);
}
