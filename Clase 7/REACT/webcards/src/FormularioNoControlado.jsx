import React, { useRef } from 'react'

const FormularioNoControlado = () => {
  
  const nombreRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();  
  const perfilRef = useRef();  
  const hndlSubmit = (llamadoDesde) => {console.log(`${llamadoDesde} -> Nombre:${nombreRef.current.value} / Email:${emailRef.current.value} / Pwd:${passwordRef.current.value} / Perfil:${perfilRef.current.value}`)};

  return (
    <>
      <div>FormularioNoControlado</div>
      <form>
        <input type="text" placeholder="Nombre" ref={nombreRef} name="nombre" />
        <input type="text" placeholder="Email" ref={emailRef} name="email" />
        <input type="text" placeholder="Password" ref={passwordRef} name="password" />
        <input type="file" placeholder="" ref={perfilRef} name="perfil" multiple />
        <hr />
        <input type="submit" value="Enviar" onClick={() => hndlSubmit("Submit del Form")} />
      </form>    
      <button onClick={() => hndlSubmit("Obtener Valor")}>Obtener Valor</button>
    </>
  )
}

export default FormularioNoControlado