import { all, fork } from 'redux-saga/effects';
import addTask from './addTask';
import deleteTask from './deleteTask';
import getAllTasks from './getAllTasks';

export default function* rootSaga() {
  yield all([
    fork(addTask),
    fork(deleteTask),
    fork(getAllTasks),
  ]);
}
