import { UserActionTypes } from '../actionTypes/userActionTypes';

export const setCurrentUser = (user: any) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
