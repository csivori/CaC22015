import React from 'react';
import './Contenedores.css';
import Address from './Address';

const Usuario = (usr) => {
  return (
    <>
    <div className='contPadreV anchoFit'>
      <p>Usuario:</p>
      <p className="contHijoC">{usr.name}</p>
      <p className="contHijoC">{usr.username} ({usr.id})</p>
      <p className="contHijoC">{usr.email}</p>
      <Address street={usr.address.street}
               suite={usr.address.suite}
               city={usr.address.city}
               zipcode={usr.address.zipcode}
               geo={usr.address.geo}
      />
    </div>
    </>
  )
}

export default Usuario