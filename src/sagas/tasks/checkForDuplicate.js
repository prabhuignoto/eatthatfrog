import { takeEvery, put } from 'redux-saga';
import Storage from '../../utils/storage';

export default function* () {
  yield takeEvery('CHECK_FOR_DUPLICATE', function* watchCheckForDuplicate(action) {
    const taskExists = Storage.get().taskExists(action.name);
    yield put({
      type: 'CHECK_FOR_DUPLICATE_COMPLETE',
      taskExists,
    });
  });
}
