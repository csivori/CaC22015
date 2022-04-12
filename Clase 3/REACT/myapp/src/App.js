import axios from 'axios';
import React from 'react';
//import Layout  from './common/components/Layout/Layout';

function App() {
  // fetch y axios

  //fetch()
  fetch("https://jsonplaceholder.typicode.com/posts") // Por defecto es GET
    .then((response) => response.json())               //transforma la respuesta a JSON
    .then((json) => console.log(json));                // muestra el JSON x consola

  //axios
/*
  axios("https://jsonplaceholder.typicode.com/posts") // Por defecto es GET
    .then((response) => console.log(response.data));   // muestra el JSON x consola
*/

  //fetch() Methods
/*
  fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: { 
      // headers es un obj que contiene los encabezados de la petición, los mismos estan configurados en el server
      "Content-Type": "application/json"},
    body: JSON.stringify({ 
      // body es el cuerpo de la petición, en este caso un json, es necesario pasarlo a string
      title: "foo",
      body:"bar",
      userId: 1
    })
  }) // Por defecto es GET
    .then((response) => response.json())               //transforma la respuesta a JSON
    .then((json) => console.log(json));                // muestra el JSON x consola

*/

return (
<>
  <h1>Hola</h1>
</>)




}

export default App;
