// introduccion a javaScript

// variables
// var let const

// condicionales
// if else

// bucles
// for while do while

// Los objetos json son una forma de representar datos en una sola variable
// estructura de clave valor

// agregar nueva propiedad
// objeto.nuevaPropiedad = "valor"

// destructuracion de objetos
// const { nombre, apellido } = persona;

// spread operator
// const nuevoArray = [...array];

//null undefined
// null no tiene ningun valor
// undefined no esta definido

const users = [
  { name: "Nico", age: 29, profession: "developer" },
  { name: "Juan", age: 16, profession: "student" },
];

// console.log(users.filter((user) => user.age > 18));

const search = "Ni";
const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
);

// console.log(filteredUsers);
