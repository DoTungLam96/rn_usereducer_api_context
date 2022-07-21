import * as Actions from './actionTypes';
import {ActionType} from './loginStore';
export const SendDataLogin = (user: any): ActionType => {
  return {
    type: Actions.LOGIN_DATA,
    data: user,
  };
};
