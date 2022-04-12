import React from 'react';
import AddrLatLong from './AddrLatLong';
import './Contenedores.css';

const Address = (add) => {
  return (
    <div className='contPadreV'>
      <p>Address:</p>
      <p className="contHijoC">{add.street} {add.suite}</p>
      <p className="contHijoC">{add.city} ({add.zipcode})</p>
      <AddrLatLong id='Test1' lat={add.geo.lat} lng={add.geo.lng} />
      <AddrLatLong id='Test2' geo={add.geo} />
      <AddrLatLong id='Test3' geo={{geo: add.geo}} />
      {/* <AddrLatLong geo={...geo, id: 'Test4'} /> */}
      {/* <AddrLatLong id='Test5' geo={geo: {add.geo}} /> */}
    </div>
  )
}

export default Address;