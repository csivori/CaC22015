import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Componente para manejo con Login
import AuthContext from "./components/Auth/AuthContext";
import Chau from "./components/Auth/Chau";
import LoggedOnlyRoutes from "./components/Auth/LoggedOnlyRoutes";
import LoginDlg from "./components/Auth/LoginDlg";
// Barra de Navegación
import BarraDeNavegacion from "./components/BarraDeNavegacion/BarraDeNavegacion";
// Páginas simuladas
import Pagina1 from "./vistas/Pagina1";
import Pagina2 from "./vistas/Pagina2";
import Pagina3 from "./vistas/Pagina3";
import Pagina4 from "./vistas/Pagina4";

const App = () => {
  return (
    <>
      <AuthContext>
        <BrowserRouter>
          <div className="container mt-5">
            <BarraDeNavegacion cant='4' />
            <main>
              <div className="container mt-2">
              <Routes>
                <Route path="/Login" element={<LoginDlg pathIngreso="/" pathCancela="/Chau" />} />
                <Route path="/Chau" element={<Chau />} />
                <Route path="*" element={
                  <LoggedOnlyRoutes>
                    <Routes>
                      <Route path="/" element={<Navigate to="/Pagina1" />} />
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