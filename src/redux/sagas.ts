import { spawn } from 'redux-saga/effects';
import { boardsSagas } from './boards/sagas';

export function* rootSaga() {
  yield spawn(boardsSagas);
}