import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoggedUser } from './AuthContext';

export const navigate = useNavigate;

const RutasProtegidas = ({children, redirect}) => {

  const {estado} = useContext(LoggedUser);
  
  if (estado.isLogged) {
      return children;
  } else {
      return <Navigate to={redirect ?? "/Login"} replace={true} />;
  }
};

export default RutasProtegidas;