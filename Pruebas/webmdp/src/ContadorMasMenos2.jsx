import React from 'react';
import './Contenedores.css';

const ContadorMasMenos2 = (p) => {
  if (p.flow === 'V') {
    return (
        <>
          <div className='contPadreV anchoFit'>
            <div className='contHijoC'><p><strong>{p.nombre}</strong></p></div>
            <div className='contPadreH'>
              <div className='contHijoC ancho100'>
                <p>
                  <button onClick={() => {p.setA(p.a-1);}}>-</button> {p.a} <button onClick={() => {p.setA(p.a+1);}}>+</button>
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
                <button onClick={() => {p.setA(p.a-1);}}>-</button> {p.a} <button onClick={() => {p.setA(p.a+1);}}>+</button>
              </p>
          </div>
        </div>
      </>
    )
  }
}

export default ContadorMasMenos2;