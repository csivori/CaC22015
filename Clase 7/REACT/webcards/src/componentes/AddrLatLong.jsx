import React from 'react';
import './Contenedores.css';

const AddrLatLong = (geo) => {
  return (<p className="contHijoC">{geo.id} Lat: {geo.lat} / Long: {geo.lng}</p>)
}

export default AddrLatLong;