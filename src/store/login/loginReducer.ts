import * as Actions from './actionTypes';
import {ActionType, LoginState} from './loginStore';
export const initialState: LoginState = {
  user: null,
};

export const loginReducer = (
  state = initialState,
  action: ActionType,
): LoginState => {
  switch (action?.type) {
    case Actions.LOGIN_RESET:
      return {...state, user: null};
    case Actions.LOGIN_DATA: {
      return {...state, user: action?.data};
    }
    default:
      return state;
  }
};
