import React, { useState, useEffect } from 'react';
import ContadorMasMenos from './ContadorMasMenos';
import ContadorMasMenos2 from './ContadorMasMenos2';
import ContadorMasMenosCls from './ContadorMasMenosCls';
import Reloj from './Reloj';
import './ItemLento.css';

const ItemLento = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const enlentecer = (c) => {
        console.time();
        let i, j;
        const lim = 3_000;  
        for(j=1;j<lim;j++){
            for(i=1;i<lim;i++){
                c=c*c;
                c=Math.sqrt(c);
            };
        };
        console.timeEnd();
    };

  useEffect(() => {
    console.log(`Inicio Montado ${a} ${b}`);
    enlentecer(5);
    (document.getElementById('cbox').checked ? setTimeout(() => console.log(`Fin Montado Async ${a} ${b}`), 2000) : console.log(`Fin Montado ${a} ${b}`));
    // document.addEventListener("mousemove", fnMouseMove)
    return () => {
        console.log(`Inicio Desmontado ${a} ${b}`);
        enlentecer(5);
        console.log(`Fin Desmontado ${a} ${b}`);
            // document.removeEventListener("mousemove", fnMouseMove)
    };
    }, [a,b]);

  return (
    <>
        <div className='contenedor'>
            <div  className='contenido'><h3>Item<br />Lento</h3></div>
            <div  className='contenido'>
              {/* <p>Item  <span>A:{a} <button onClick={() => {sumarA();}}>+1</button></span></p> */}
              <ContadorMasMenos nombre='Item A' valorInicial='0' flow='H' />
              <ContadorMasMenos2 nombre='Item B' a={b} setA={setB}  flow='H'/>
              <ContadorMasMenosCls nombre='Item C' a={b} setA={setB}  flow='H'/>
              <div>
                  <input id='cbox' type='checkbox' /><label htmlFor='cbox'>Async </label>
                  <button onClick={() => {enlentecer(5);}}>enlentecer()</button>
              </div>
              <Reloj />
            </div>
        </div>                
    </>
  )
};

export default ItemLento;