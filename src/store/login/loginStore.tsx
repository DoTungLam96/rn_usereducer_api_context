/* eslint-disable no-shadow */
import {
  Reducer,
  Dispatch,
  createContext,
  useReducer,
  useMemo,
  useContext,
} from 'react';
import React from 'react';
import {initialState, loginReducer} from './loginReducer';
export type LoginState = {
  user?: any;
};

export type ActionType = {
  type: string;
  data: Record<string, any>;
};

export type LoginReducer = Reducer<LoginState, ActionType>;
export type LoginDispatch = Dispatch<ActionType>;
export type LoginProps = [LoginState, LoginDispatch];
export const LoginContext = createContext<LoginProps>([
  initialState,
  () => null,
]);
export const LoginProvider = ({children}: any) => {
  const [state, dispatch] = useReducer<LoginReducer>(
    loginReducer,
    initialState,
  );
  const value = useMemo<LoginProps>(() => [state, dispatch], [state, dispatch]);
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useLoginStore = () => {
  return useContext(LoginContext);
};
