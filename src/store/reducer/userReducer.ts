import { UserActionTypes } from '../actionTypes/userActionTypes';
import { UserAction } from '../types/userTypes';

interface userState {
  currentUser: {
    name?: string;
    email?: string;
    image?: string;
  };
}

const initialState = {
  currentUser: {},
};

export const userReducer = (
  state: userState = initialState,
  action: UserAction
): userState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
