import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";

const PaginaPrincipal = () => {

  return (
    <BrowserRouter>
      <div className="container mt-5">
        <header>
          <div>Página Principal</div>
          <div className="btn-group">
            <Link to="/" className="btn btn-dark mx-1">
              Página 1
            </Link>
            <Link to="/Pagina2" className="btn btn-dark mx-1">
              Página 2
            </Link>
            <Link to="/Pagina3" className="btn btn-dark mx-1">
              Página 3
            </Link>
          </div>
        </header>
        <main>
          <div className="container bg-primary mt-5">
          <Routes>
            <Route path="*" element={
              <ProtectedRoutes>
                <Routes>
                  <Route exact path="/" element={<Pagina1 pagBack="Pagina2" pagFwd="Pagina3" />} />
                  <Route path="/Pagina2" element={<Pagina2 pagBack="" pagFwd="Pagina3" />} />
                  <Route path="/Pagina3" element={<Pagina3 pagBack="" pagFwd="Pagina2" />} />
                </Routes>
              </ProtectedRoutes>
              }
            />
          </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default PaginaPrincipal;
