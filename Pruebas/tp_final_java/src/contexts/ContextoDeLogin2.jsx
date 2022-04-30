import React, { useContext, useState } from "react";

/*********************************************************
 ***                                                   ***
 ***   NICO: NADA DE ESTE FUENTE SE ESTA UTILIZANDO    ***
 ***         xq NO ME DOY CUENTA COMO REFACTORIZARLO   ***
 ***                                                   ***
 *********************************************************/

const ContextoDelLogin = React.createContext();
const ContextoDeActualizacionDelLogin = React.createContext();

export const useLoggedUser = () => useContext(ContextoDelLogin);
export const useSetLoggedUser = (u) => useContext(ContextoDeActualizacionDelLogin);

export const LoginProvider = ({children}) => {

  const [user, setUser] = useState({id:null, username:''});

  return (
      <ContextoDelLogin.Provider value={user}>
          <ContextoDeActualizacionDelLogin.Provider value={setUser}>
              {children}
          </ContextoDeActualizacionDelLogin.Provider>
      </ContextoDelLogin.Provider>
  );
}