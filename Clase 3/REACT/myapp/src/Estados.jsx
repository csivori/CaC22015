import React, {useState} from "react";

const Estados = () => {
//---------------------------

    const [nombre, setNombre] = useState('Hello World');

    return (
        <>
            <h1>1.-Mostrar un texto y al cliquear un botón cambiarlo</h1>
            <p>{nombre}</p>
            <button
            onClick={() => {setNombre('Chauchis !!')}}
            >Chau</button>
            <hr />
        </>
    );

}

export default Estados;