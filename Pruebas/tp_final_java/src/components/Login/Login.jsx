import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { LoggedUser } from '../../vistas/PaginaPrincipal';

const Login = () => {       
    const {estado, accionar} = useContext(LoggedUser);
    const [formLogin, setFormLogin] = useState({email:"", pwd:""});

    const autenticarUsuario = () => {return (formLogin.email !== "" && formLogin.pwd === "pp") ? 1 : 0}

    const navigate = useNavigate();
    const handleSubmit = (ev) => {

      const userId = autenticarUsuario(); 
      if (userId > 0) {
        accionar({type: types.authTypes.LOGIN, payload:{user: formLogin.email}});
        setTimeout(() => navigate("/", {replace: true}), 0);
      } else {
        alert(`Usuario ${formLogin.email} Desconocido o Contraseña Incorrecta !!`)
      }
    };
    
    const handleCancel = (ev) => {console.log("Cliqueó CANCELAR")};

    const handleChange = (ev) => {
      setFormLogin({...formLogin, [ev.target.name]: ev.target.value});
    };
 
    return (
      <>
        {/* <div className="modal"> */}
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ingrese al Sistema</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form className="modal-body">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Correo Electrónico" name="email" onChange={handleChange} value={formLogin.email} />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Contraseña" name="pwd" onChange={handleChange} value={formLogin.pwd} />
                </div>
              </form>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCancel} data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>Ingresar</button>
                </div>
            </div>
          </div>
        {/* </div> */}
      </>
  )
};

export default Login;