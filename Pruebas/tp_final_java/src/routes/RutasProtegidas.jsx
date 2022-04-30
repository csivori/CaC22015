import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoggedUser } from '../vistas/PaginaPrincipal';

const RutasProtegidas = ({children}) => {

  const {estado} = useContext(LoggedUser);
  
  if (estado.isLogged) {
      return children;
  } else {
      return <Navigate to="/Login" replace={true} />;
  }
};

export default RutasProtegidas;