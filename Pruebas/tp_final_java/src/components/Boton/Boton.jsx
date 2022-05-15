import React from 'react';
import estilos from "./Boton.module.css";

const Boton = ({children, caption, clasesExtras, alClickear}) => {
  const clases = `${estilos.botonCS} ${clasesExtras?? ""}`
  
  return alClickear 
    ? (<button className={clases} onClick={alClickear}>{caption}{children}</button>)
    : (<button className={clases}>{caption}{children}</button>);
};

export default Boton;