import { useState } from 'react';

const FormularioControlado = () => {

  const [formulario, setFormulario] = useState({
                                                  nombre: "",
                                                  email: "",
                                                  password: "",
                                                  perfil: "",
                                                });

  const hndlChange = (evt) => {setFormulario({...formulario, [evt.target.name]: evt.target.value})};
  const hndlMostrar = (llamadoDesde) => {console.log(`${llamadoDesde} -> Nombre:${formulario.nombre} / Email:${formulario.email} / Pwd:${formulario.password} / Perfil:${formulario.perfil}`)};

  const hndlSubmit = (evt) => {
    evt.preventDefault();
    const formData = createFormData();
    console.log(`Enviar -> Nombre:${formData.get("nombre")} / Email:${formData.get("email")} / Pwd:${formData.get("password")} / Perfil:${formData.get("perfil")}`);
  }  

  const createFormData = () => {
    const formData = new FormData();
    formData.append("nombre", formulario.nombre);
    formData.append("email", formulario.email);
    formData.append("password", formulario.password);
    formData.append("perfil", formulario.perfil);

    return formData;

    // fetch("url", {
    //   method: "POST",
    //   body: formData
    // });
  };

  return (
    <>
      <div>Formulario Controlado</div>
      <form>
        <input type="text" placeholder="Nombre" value={formulario.nombre} onChange={hndlChange} name="nombre" id="" />
        <input type="text" placeholder="Email" value={formulario.email} onChange={hndlChange} name="email" id="" />
        <input type="text" placeholder="Password" value={formulario.password} onChange={hndlChange} name="password" id="" />
        <input type="file" onClick={hndlChange} name="perfil" />
        <hr />
        <input type="button" value="Enviar" onClick={hndlSubmit} />
      </form>
      <button onClick={() => hndlMostrar("Obtener Valor")}>Mostrar Valor useState</button>
      <button onClick={() => setFormulario({...formulario, nombre: "Pedro", email:"peter@pan.edu.ar"})}>Forzar Nombre Pedro</button>
    </>
  )
}

export default FormularioControlado;