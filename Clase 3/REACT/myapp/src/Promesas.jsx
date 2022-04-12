import { useState, useEffect } from "react";

const Promesas = () => {

const users = [{id: 1, name:'Carlos', age:53},
               {id: 2, name:'Fer', age:52},
               {id: 3, name:'Sol', age:20}];

const getUsers = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {res(users);}, 3000);
    });
};

// getUsers().then((users) => {
//     console.log(users);
//     })
//     .catch((error) => {
//         console.log(error);
//     }
// )

const [usrs, setUsrs] = useState([]);

useEffect(() => {
    const getData = async () => {
        const users = await getUsers();
    }
    getData();
}, []);

const obtenerUsuarios = async () => {
    console.log("Antes de la fn asincrónica");

    const users = await getUsers();

    setUsrs(users);

    console.log(users);

    console.log("Después de la fn asincrónica");
};

obtenerUsuarios();

console.log("Afuera de la fn");

return (
    <>
        <h1>5-Promesas</h1>
        <h3>{(usrs.length > 0) ? "Hay Usuarios" : "No hay Usuarios aún"}</h3>
        <p>{(usrs.length > 0) ? usrs[0].name : "NN"}</p>
    </>);
}

export default Promesas;