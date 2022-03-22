import React, {useState} from 'react'

const Contador = () => {
    const [cont, setCont] = useState(0);

    return (
        <>
            <h1>2.-Crear un Contador</h1>
            <h3>Contador {cont}</h3>
            <button
                onClick={()=>{setCont(cont-10)}}
            >--</button>
            <button
                onClick={()=>{setCont(cont-1)}}
            >-</button>
            <button
                onClick={()=>{setCont(0)}}
            >0</button>
            <button
                onClick={()=>{setCont(cont+1)}}
            >+</button>
            <button
                onClick={()=>{setCont(cont+10)}}
            >++</button>
            <br />
            <button
                onClick={()=>{setCont(cont-10)}}
            >{cont-10}</button>
            <button
                onClick={()=>{setCont(cont-1)}}
            >{cont-1}</button>
            <button
                onClick={()=>{setCont(0)}}
            >0</button>
            <button
                onClick={()=>{setCont(cont+1)}}
            >{cont+1}</button>
            <button
                onClick={()=>{setCont(cont+10)}}
            >{cont+10}</button>
            <hr />
        </>
    )
}

export default Contador;