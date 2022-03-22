import React, { useState } from 'react'

let contador;
contador = isNaN(contador) ? 0 : contador + 1;
console.log(contador);

const Login = (p) => {
  const msgToLogIn = "Por favor Ingrese al Sistema " + p.nomApp;
  const msgLoggedIn = "Sesión Iniciada como: ";

  const [user, setUser] = useState({
      username: "Carlos",
      password: "",
  });
  const [boton, setBoton] = useState('Login');
  const [logueado, setLogueado] = useState(msgToLogIn);

  return (
    <>
        <h1>3.-Simular un Login</h1>
        <h3>{logueado}</h3>
            {/* <label for="usr">Usuario</label> */}
            <label>Usuario </label>
            <input type="text" name="usr" id="usr" />
            <br />
            {/* <label for="pwd">Contraseña</label> */}
            <label>Contraseña </label>
            <input type="password" name="pwd" id="pwd" />
            <br /><br />
            <button onClick={() => {
                if (boton === 'Login') {
                    // setUser({username: {document.getElementById('usr')}, password: ""});
                    setUser({username: "Usuario", password: "Contraseña"});
                    setBoton('Logout');
                    setLogueado(msgLoggedIn + user.username)
                } 
                else {
                    setBoton('Login');
                    setLogueado(msgToLogIn)
                }
                }}
            >{boton}</button>
        <hr />
    </>
  )
}

export default Login
