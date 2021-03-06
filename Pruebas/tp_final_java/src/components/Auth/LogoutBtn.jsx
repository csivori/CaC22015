import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authTypes } from './authTypes';
import { LoggedUser } from './AuthContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './salir.png';
import Boton from '../Boton/Boton';

const LogoutBtn = () => {

  const {estado, accionar} = useContext(LoggedUser);

  const navigate = useNavigate();

  const handleClick = (ev) => {
    if (estado.isLogged) {
      accionar({type: authTypes.LOGOUT, payload:null});
      setTimeout(() => navigate("/", {replace: true}), 0);
    } else {
      alert(`Usuario ${estado.user} aún no esta logueado !!`)
    }
  };

  return (
    // <button className="btn btn-sm" onClick={handleClick}>
    //   <img src={logo} alt="salir" />
    // </button>
    <Boton clasesExtras="btn btn-sm" alClickear={handleClick}>
      <img src={logo} alt="salir" />
    </Boton>
)
}

export default LogoutBtn;