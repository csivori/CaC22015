import {useGetJsonDataFromURL} from './hooks/useGetJsonDataFromURL.js'
//import Formularios from './componentes/Formularios';
//import FormularioNoControlado from './componentes/FormularioNoControlado';
import GrupoUsuarios from './componentes/GrupoUsuarios';

function App() {

  const [dataUsrs, loadingUsrs, errorUsrs] = useGetJsonDataFromURL('https://jsonplaceholder.typicode.com/users');
//  const [dataPosts, loadingPosts, errorPosts] = useGetData('https://jsonplaceholder.typicode.com/posts');

  const nroUsr = 1;
//  const [usr, setUsr] = useState({usr: {name: 'Carlos'}});
//   useEffect(() => {(dataUsrs.data[0] !== null) ? setUsr({usr: dataUsrs.data[0]}) : null}, [loadingUsrs]);
//  console.log(usr);

return (
    <>
      <h1>Usuarios</h1>
      {loadingUsrs && 
        <h1 style={{textAlign: 'center'}}>Cargando Usuarios...</h1>}

      {!loadingUsrs && errorUsrs !== null &&
        <button onClick={() => {console.log(dataUsrs.status, errorUsrs)}}>Mostrar el Error...</button>}
      
      {!loadingUsrs && errorUsrs === null &&
        <>
          <button onClick={() => {console.log(dataUsrs.data)}}>Mostrar los Datos...</button>
          <button onClick={() => {console.log(JSON.stringify(dataUsrs.data[nroUsr]))}}>Mostrar los JSON...</button>
        </>}

      {!loadingUsrs && errorUsrs === null &&
        ( <GrupoUsuarios usrs={JSON.stringify(dataUsrs.data)} /> )}

      {/* <Formularios /> */}
      {/* <FormularioNoControlado /> */}
    </>
  );
}

export default App;