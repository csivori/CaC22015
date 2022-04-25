import './Contenedores.css';

const AddrLatLong = (p) => {
  const geo = JSON.parse(p.geo);
  return (<p className="contHijoC">Lat: {geo.lat} / Long: {geo.lng}</p>)
}

export default AddrLatLong;