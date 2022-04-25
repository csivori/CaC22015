import {useState} from 'react';
import Usuario from './Usuario';

const GrupoUsuarios = (p) => {
  const arrUsrs = JSON.parse(p.usrs);
  const [mascara, setMascara] = useState("");

  const handleChange = (evt) => {
    setMascara(evt.target.value);
    console.log(`Máscara: ${mascara} / evt.target.value: ${evt.target.value}`)
  };

  return (
    <>
      <p>GrupoUsuarios</p>
      <button onClick={() => {console.log(arrUsrs)}}>Mostrar arrUsrs...</button>
      <hr />
      <input type="text" placeholder="Filtro x Nombre" onChange={handleChange} value={mascara} />
      <div className='contPadreH'>
        {arrUsrs.map((usr) => (usr.name.startsWith(mascara) || mascara == "") ? <Usuario key={usr.id} usr={JSON.stringify(usr)} /> : null)}
      </div>
    </>
  )
}

export default GrupoUsuarios;