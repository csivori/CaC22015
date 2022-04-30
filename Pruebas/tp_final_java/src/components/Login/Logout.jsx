import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { LoggedUser } from '../../vistas/PaginaPrincipal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './salir.png';


const Logout = () => {

  const {estado, accionar} = useContext(LoggedUser);

  const navigate = useNavigate();

  const handleClick = (ev) => {
    if (estado.isLogged) {
      accionar({type: types.authTypes.LOGOUT, payload:null});
      setTimeout(() => navigate("/", {replace: true}), 0);
    } else {
      alert(`Usuario ${estado.user} aún no esta logueado !!`)
    }
  };

  return (
    <button type="button" className="btn btn-sm" onClick={handleClick}>
      {/* <FontAwesomeIcon icon="fa-arrow-right-from-bracket fa-solid fa-regular" /> */}
      <img src={logo} alt="salir" />
    </button>
  )
}

export default Logout;