import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAIL,
} from './types';

const initState = {
  board: null,
  fetching: false,
  error: null
};

export const boardsReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_BOARD_REQUEST:
      return ({
        ...state,
        fetching: true,
      });
    
    case CREATE_BOARD_SUCCESS:
      return ({
        ...state,
        board: action.board,
        fetching: false,
      });

    case CREATE_BOARD_FAIL:
      return ({
        ...state,
        fetching: false,
        error: action.error,
      });

    default:
      return initState;
  }
};

