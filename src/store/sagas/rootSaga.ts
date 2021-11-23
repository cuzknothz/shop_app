import { all } from 'redux-saga/effects';
import { trackingSaga } from './trackingSaga';
function* hello() {
  console.log('fshfjds');
}

export function* rootSaga() {
  yield all([trackingSaga()]);
}
