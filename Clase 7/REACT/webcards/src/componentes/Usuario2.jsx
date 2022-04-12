import React from 'react';
import './Contenedores.css';
import Address from './Address';

const Usuario2 = (p) => {
  return (
    <>
    <div className='contPadreV'>
      <p>Usuario2:</p>
      <p className="contHijoC">{p.usr.name}</p>
      <p className="contHijoC">{p.usr.username} ({p.usr.id})</p>
      <p className="contHijoC">{p.usr.email}</p>
      <Address street={p.usr.address.street}
               suite={p.usr.address.suite}
               city={p.usr.address.city}
               zipcode={p.usr.address.zipcode}
               geo={p.usr.address.geo}
      />
    </div>
    </>
  )
}

export default Usuario2