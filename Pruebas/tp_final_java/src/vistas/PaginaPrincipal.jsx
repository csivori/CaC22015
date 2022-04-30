import React, {createContext, useReducer} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RutasProtegidas from "../routes/RutasProtegidas";
import { types } from "../types/types";
import Login from "../components/Login/Login";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";
import Pagina4 from "./Pagina4";
import BarraDeNavegacion from "../components/BarraDeNavegacion/BarraDeNavegacion";

export const LoggedUser = createContext();

export const initAuthReducer = () => {
  return {
    user: null, 
    isLogged: false
  };
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.authTypes.LOGIN:
      return {
        ...state, 
        user: action.payload.user,
        since: new Date().toLocaleString(),
        isLogged: true};

    case types.authTypes.LOGOUT:
      return {
        ...state, 
        user: null,
        last: state.since ?? "",
        since: null,
        isLogged: false};

    default: 
      alert("Voy a ejecutar la funcion authReducer() con action.type DEFAULT !! ", action);
      return state;     
  }
}

const PaginaPrincipal = () => {

  const [estado, accionar] = useReducer(authReducer, {}, initAuthReducer);

  return (
    <>
      <LoggedUser.Provider value={{estado, accionar}}>
        <BrowserRouter>
          <div className="container mt-5">
            <BarraDeNavegacion cant='4' />
            <main>
              <div className="container mt-2">
              <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={
                  <RutasProtegidas>
                    <Routes>
                      <Route path="/" element={<Navigate to="/Pagina1" />} />
                      <Route path="/Pagina1" element={<Pagina1 pagBack="Pagina2" pagFwd="Pagina4" />} />
                      <Route path="/Pagina2" element={<Pagina2 pagBack="Pagina1" pagFwd="Pagina3" />} />
                      <Route path="/Pagina3" element={<Pagina3 pagBack="Pagina2" pagFwd="Pagina4" />} />
                      <Route path="*" element={<Pagina4 pagBack="Pagina1" pagFwd="Pagina3" />} />
                    </Routes>
                  </RutasProtegidas>
                } />
              </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </LoggedUser.Provider>
    </>
  );
};

export default PaginaPrincipal;
