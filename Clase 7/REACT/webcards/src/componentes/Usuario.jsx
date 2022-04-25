import {useState} from 'react';
import './Contenedores.css';
import Address from './Address';

const Usuario = (p) => {
  const usr = JSON.parse(p.usr);

  const [clickUsr, setClickUsr] = useState(false);

  const handlerClickOnUsuario = (usrId) => {
    setClickUsr(true);
    console.log(`Clickeó en Usuario ${usrId} y clickUsr vale ${clickUsr}`);
  };

  return (
    <>
      <button onClick={() => {handlerClickOnUsuario(usr.id)}} className='contPadreV anchoFit boton'>
        <p>Usuario:</p>
        <p className="contHijoC">{usr.name}</p>
        <p className="contHijoC">{usr.username} ({usr.id})</p>
        <p className="contHijoC">{usr.email}</p>
        <Address add={JSON.stringify(usr.address)} />
      </button>
    </>
  );
}

export default Usuario;