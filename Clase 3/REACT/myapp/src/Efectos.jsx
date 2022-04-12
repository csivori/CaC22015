import React, {useEffect, useState} from 'react'

const Efectos = () => {
    const [act, setAct] = useState(true);

  useEffect(() => {
    console.log("Montado");
    document.addEventListener("mousemove", fnMouseMove)
    return () => {
        console.log("Desmontado");
        document.removeEventListener("mousemove", fnMouseMove)
    };

    }, [act]);
  
  const fnMouseMove = (e) => {console.log(e.clientX, e.clientY);}

  return (
    <>
        <h1>4.-Uso de useEffect</h1>
        <h3>{(act ? "act: TRUE" : "act: FALSE")}</h3>
        <button onClick={()=>{setAct(!act)}}>Toggle to {(act ? "act: FALSE" : "act: TRUE")}</button>
    </>
  )
}

export default Efectos;