import React from 'react';
import AddrLatLong from './AddrLatLong';
import './Contenedores.css';

const Address = (p) => {
  const add = JSON.parse(p.add);
  return (
    <div className='contPadreV'>
      <p>Address:</p>
      <p className="contHijoC">{add.street} {add.suite}</p>
      <p className="contHijoC">{add.city} ({add.zipcode})</p>
      <AddrLatLong geo={JSON.stringify(add.geo)} />
    </div>
  )
}

export default Address;