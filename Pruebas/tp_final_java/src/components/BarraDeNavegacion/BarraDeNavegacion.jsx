import {Link} from 'react-router-dom';
import UsuarioLogueado from '../UsuarioLogueado/UsuarioLogueado';

const BarraDeNavegacion = ({cant}) => {
    
  cant = parseInt(cant);
  if (isNaN(cant)) {
    return null
  } else {
    let arr = [];
    for (let i = 1; i <= cant; i++) {arr.push(i)};
    return (
      <header>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-4 align-self-center text-center"></div>
            <div class="col-4 align-self-center text-center">
              <h1><span class="badge bg-secondary">Página Principal</span></h1>
            </div>
            <div class="col-4 py-4 align-self-start text-end">
              <UsuarioLogueado />
            </div>
          </div>
          <div class="row align-items-center">
            <div className="btn-group">
            {arr.map((elem) => {return (<Link key={elem} to={`/Pagina${elem}`} className="btn btn-dark mx-1">Página {elem}</Link>)})}
            </div>
          </div>
        </div>





        {/* <h1>Página Principal</h1>
        <UsuarioLogueado /> */}
        {/* <div className="btn-group">
          {arr.map((elem) => {return (<Link key={elem} to={`/Pagina${elem}`} className="btn btn-dark mx-1">Página {elem}</Link>)})}
        </div> */}
      </header>
    )
  }
}

export default BarraDeNavegacion;