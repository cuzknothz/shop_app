import { UserActionTypes } from '../actionTypes/userActionTypes';

interface SetCurrentUser {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: {
    name: string;
    email?: string;
    image: string;
  };
}

export type UserAction = SetCurrentUser;
