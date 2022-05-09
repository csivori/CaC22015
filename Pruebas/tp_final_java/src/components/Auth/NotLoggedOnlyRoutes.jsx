import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoggedUser } from './AuthContext';

export const navigate = useNavigate;

const RutasPublicasProtegidas = ({children, redirect}) => {

  const {estado} = useContext(LoggedUser);
  
  if (estado.isLogged) {
    return <Navigate to={redirect} replace={true} />;
  } else {
    return children;
  }
};

export default RutasPublicasProtegidas;