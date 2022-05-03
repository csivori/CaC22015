import {Link} from 'react-router-dom';
import LoggedUsrFrm from '../Auth/LoggedUsrFrm';

const BarraDeNavegacion = ({cant}) => {
    
  cant = parseInt(cant);
  if (isNaN(cant)) {
    return null
  } else {
    let arr = [];
    for (let i = 1; i <= cant; i++) {arr.push(i)};
    return (
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 align-self-center text-center"> </div>
            <div className="col-4 align-self-center text-center">
              <h1><span className="badge bg-secondary">Página Principal</span></h1>
            </div>
            <div className="col-4 py-4 align-self-start text-end">
              <LoggedUsrFrm />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="btn-group">
            {arr.map((elem) => {return (<Link key={elem} to={`/Pagina${elem}`} className="btn btn-dark mx-1">Página {elem}</Link>)})}
            </div>
          </div>
        </div>
        <hr />
      </header>
    )
  }
}

export default BarraDeNavegacion;