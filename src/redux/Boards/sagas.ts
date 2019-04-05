import { call, put, takeEvery } from 'redux-saga/effects';
import {
  CREATE_BOARD_REQUEST,
} from './types';
import {
  createBoardSuccess,
  createBoardFail,
} from './actions';
import {
  createBoard,
} from '../../firebase/boardsFunctions';

export function* createBoardSaga({ boardData }) {
  try {
    const response = yield call(createBoard, boardData);
    yield put(createBoardSuccess(response));
  } catch (error) {
    yield put(createBoardFail(error.message));
  }
}

export function* boardsSagas() {
  yield takeEvery(CREATE_BOARD_REQUEST, createBoardSaga);
}
