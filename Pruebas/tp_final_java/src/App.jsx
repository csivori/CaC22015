import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Componente para manejo con Login
import AuthContext from "./components/Auth/AuthContext";
import Chau from "./components/Auth/Chau";
import LoggedOnlyRoutes from "./components/Auth/LoggedOnlyRoutes";
import NotLoggedOnlyRoutes from "./components/Auth/NotLoggedOnlyRoutes";
import LoginDlg from "./components/Auth/LoginDlg";
// Barra de Navegación
import BarraDeNavegacion from "./components/BarraDeNavegacion/BarraDeNavegacion";
// Páginas simuladas
import Pagina1 from "./vistas/Pagina1";
import Pagina2 from "./vistas/Pagina2";
import Pagina3 from "./vistas/Pagina3";
import Pagina4 from "./vistas/Pagina4";
import Boton from "./components/Boton/Boton";

// Constantes App
// LandingPage
const landingPage = "/Pagina1";

const App = () => {
  return (
    <>
      <AuthContext>
        <BrowserRouter>
          <div className="container mt-5">
            <BarraDeNavegacion cant='4' />
            <Boton caption="Es Este" />
            <main>
              <div className="container mt-2">
              <Routes>
                <Route path="/Login" element={
                  <NotLoggedOnlyRoutes redirect={landingPage}>
                    <LoginDlg pathIngreso="/" pathCancela="/Chau" />
                  </NotLoggedOnlyRoutes>
                    } />
                <Route path="/Chau" element={<Chau />} />
                <Route path="*" element={
                  <LoggedOnlyRoutes redirect="/Login">
                    <Routes>
                      <Route path="/" element={<Navigate to={landingPage} />} />
                      <Route path="/Pagina1" element={<Pagina1 pagBack="Pagina2" pagFwd="Pagina4" />} />
                      <Route path="/Pagina2" element={<Pagina2 pagBack="Pagina1" pagFwd="Pagina3" />} />
                      <Route path="/Pagina3" element={<Pagina3 pagBack="Pagina2" pagFwd="Pagina4" />} />
                      <Route path="*" element={<Pagina4 pagBack="Pagina1" pagFwd="Pagina3" />} />
                    </Routes>
                  </LoggedOnlyRoutes>
                } />
              </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </AuthContext>
    </>
  );
};

export default App;