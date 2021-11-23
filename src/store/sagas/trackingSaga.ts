import { takeEvery } from 'redux-saga/effects';

function* logger() {
  yield console.log('U R CRAZY GUY');
}
export function* trackingSaga() {
  yield takeEvery('*', logger);
}
