import firebase, { database } from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

/* eslint-disable */
import { app } from './index';
/* eslint-disable */

import { IBoard } from '../types';

export function createBoard({
  id,
  title,
  bgURL,
} : IBoard): Promise<Object> {
  return new Promise((resolve, reject) => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(id, title, bgURL)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
