import {useState, useEffect} from 'react';
import {useGetJsonDataFromURL} from './hooks/useGetJsonDataFromURL.js'
import Formularios from './componentes/Formularios';
import FormularioNoControlado from './FormularioNoControlado';
import Usuario from './componentes/Usuario';
import Usuario2 from './componentes/Usuario2';
// import Address from './componentes/Address';
// import AddrLatLong from './componentes/AddrLatLong';

function App() {

  const [dataUsrs, loadingUsrs, errorUsrs] = useGetJsonDataFromURL('https://jsonplaceholder.typicode.com/users');
//  const [dataPosts, loadingPosts, errorPosts] = useGetData('https://jsonplaceholder.typicode.com/posts');

//  const la = '-37.3159';
//  const ln = '81.1496';
//  const geo = {lat: la, lng: ln};
  const nroUsr = 1;
//  const [usr, setUsr] = useState({usr: {name: 'Carlos'}});
//   useEffect(() => {(dataUsrs.data[0] !== null) ? setUsr({usr: dataUsrs.data[0]}) : null}, [loadingUsrs]);
//  console.log(usr);
  return (
    <>
      <h1>Usuarios</h1>
      {loadingUsrs && 
        <h1 style={{textAlign: 'center'}}>Cargando Usuarios...</h1>}

      {!loadingUsrs && errorUsrs === null &&
        <button onClick={() => {console.log(dataUsrs.data)}}>Mostrar los Datos...</button>}
      
      {!loadingUsrs && errorUsrs === null &&
        <button onClick={() => {console.log(JSON.stringify(dataUsrs.data[nroUsr]))}}>Mostrar los JSON...</button>}

      {!loadingUsrs && errorUsrs !== null &&
        <button onClick={() => {console.log(dataUsrs.status, errorUsrs)}}>Mostrar el Error...</button>}
      
      {!loadingUsrs && errorUsrs === null &&
        (
          <Usuario  id={dataUsrs.data[nroUsr].id}
                    name={dataUsrs.data[nroUsr].name}
                    username={dataUsrs.data[nroUsr].username}
                    email={dataUsrs.data[nroUsr].email}
                    address={dataUsrs.data[nroUsr].address}
          />
        )
        //  &&
        // (
        //   <Usuario2 p={JSON.stringify(dataUsrs.data[nroUsr])} />
        // )
      }
      <Formularios />
      {/* <FormularioNoControlado /> */}
    </>
  );
}

export default App;