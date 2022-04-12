import React, { useState } from 'react';
import './Contenedores.css';

const ContadorMasMenos = (p) => {

  const [a, setA] = useState(parseInt(p.valorInicial));

  if (p.flow === 'V') {
    return (
        <>
          <div className='contPadreV anchoFit'>
            <div className='contHijoC'><p><strong>{p.nombre}</strong></p></div>
            <div className='contPadreH'>
              <div className='contHijoC ancho100'>
                <p>
                  <button onClick={() => {setA(a-1);}}>-</button> {a} <button onClick={() => {setA(a+1);}}>+</button>
                </p>
              </div>
            </div>
          </div>
        </>
      )
  } else {
    return (
      <>
        <div className='contPadreH anchoFit'>
          <div className='contHijoC ancho100'><p><strong>{p.nombre} </strong>
                <button onClick={() => {setA(a-1);}}>-</button> {a} <button onClick={() => {setA(a+1);}}>+</button>
              </p>
          </div>
        </div>
      </>
    )
  }
}

export default ContadorMasMenos;