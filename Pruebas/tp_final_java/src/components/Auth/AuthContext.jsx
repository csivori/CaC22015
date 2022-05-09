import { createContext, useEffect, useReducer } from 'react';
import { authReducer, initAuthReducer } from './authReducer';

export const LoggedUser = createContext();

const AuthContext = ({children}) => {

  const [estado, accionar] = useReducer(authReducer, {}, initAuthReducer);

  useEffect(() => {
    if (estado.isLogged) {
       localStorage.setItem("auth", JSON.stringify(estado));
      } else {
        localStorage.removeItem("auth");
      };
  },[estado.isLogged]);

  return (
    <>
      <LoggedUser.Provider value={{estado, accionar}}>
        {children}
      </LoggedUser.Provider >
    </>
  )
};

export default AuthContext;