import { takeEvery } from 'redux-saga/effects';

function* deleteFrogSaga() {
  yield 'test';
}

export default function* watchDeleteFrog() {
  yield takeEvery('DELETE_FROG', deleteFrogSaga);
}
