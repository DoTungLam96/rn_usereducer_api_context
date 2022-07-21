import React, {createContext, useState} from 'react';
import {User} from '../models/User';
export interface UserProps {
  user?: User;
  setUser?: (user: User) => void;
}

export const LoginContext = createContext<UserProps>({});
export const LoginProvider = ({children}: any) => {
  const [user, setUser] = useState<User>({});

  return (
    <LoginContext.Provider value={{user, setUser}}>
      {children}
    </LoginContext.Provider>
  );
};
