import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from './types';

export const userLoginRequest = (loginData: Object) => ({ type: USER_LOGIN_REQUEST, loginData });
export const userLoginSuccess = (userData: Object) => ({ type: USER_LOGIN_SUCCESS, userData });
export const userLoginFail = (error: string) => ({ type: USER_LOGIN_FAIL, error });

export const userUpdateRequest = (updateData: Object) => ({ type: USER_UPDATE_REQUEST, updateData });
export const userUpdateSuccess = (userData: Object) => ({ type: USER_UPDATE_SUCCESS, userData });
export const userUpdateFail = (error: string) => ({ type: USER_UPDATE_FAIL, error });