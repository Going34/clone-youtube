import { all } from '@redux-saga/core/effects';
import { youtube } from './saga';

export function* rootSaga() {
  yield all([youtube()]);
}
