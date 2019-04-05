import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAIL,
} from './types';

export const createBoardRequest = (boardData: Object) => ({
  type: CREATE_BOARD_REQUEST,
  boardData,
});

export const createBoardSuccess = (boardResponse: Object) => ({
  type: CREATE_BOARD_SUCCESS,
  boardResponse,
});

export const createBoardFail = (error: string) => ({
  type: CREATE_BOARD_FAIL,
  error,
});