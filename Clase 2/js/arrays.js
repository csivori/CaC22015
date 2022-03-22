/* 
  spread, arrays y objetos
*/

/* 
  spread operator se utiliza para copiar un array o un objeto
  en un nuevo array o objeto 
*/

const objeto1 = {
  name: "objeto1",
  contenido: "esto es importante",
};

const objeto2 = {
  ...objeto1,
  name: "objeto2",
};

/* 
        objeto2 = {                             
          name: "objeto2",                      -> propiedad sobrescrita
          contenido: "esto es importante",      -> propiedad que viene del objeto1
          };
*/

/* 
  objeto 2 tiene los mismos atributos que objeto1
  sin embargo, es posible modificar los atributos segun la clave,
  asi como agregar nuevos atributos
*/

const objeto3 = {
  ...objeto1,
  name: "objeto3",
  contenidoAdicional: "esto es adicional",
};

/* 

    objeto3 = {
      name: "objeto3",                         -> propiedad sobrescrita
      contenido: "esto es importante",         -> propiedad que viene del objeto1
      contenidoAdicional: "esto es adicional", -> propiedad nueva
    };
  
*/

/* arrays y metodos de iteracion*/

const nombresDePeliculas = [
  "Batman",
  "Spiderman",
  "Superman",
  "Ironman",
  "Capitan America",
  "Thor",
];

/*  
    se puede acceder a las propiedades del array desde su indice 
*/
nombresDePeliculas[0];

/* 
    para agregar un elemento al final del array se usa el metodo push
*/
nombresDePeliculas.push("Hulk");

/* 
    para eliminar un elemento del final del array se usa el metodo pop
*/
nombresDePeliculas.pop();

/* 
    para eliminar un elemento del inicio del array se usa el metodo shift
*/
nombresDePeliculas.shift();

/*
    para agregar un elemento al inicio del array se usa el metodo unshift
*/
nombresDePeliculas.unshift("Hulk");

/*
    para eliminar un elemento del array se usa el metodo splice
*/
nombresDePeliculas.splice(1, 1);

/* 
    para agregar un elemento en una posicion especifica del array se usa el metodo splice

    el primer parametro es la posicion en la que se va a agregar el elemento
    el segundo parametro es la cantidad de elementos que se va a eliminar
    el tercer parametro es el elemento que se va a agregar
*/

nombresDePeliculas.splice(1, 0, "Hulk");

/* javascrip tiene muchas funciones asociadas a la manipulacon e iteracion de arrays */

/*
    el metodo forEach nos permite iterar sobre un array
*/

nombresDePeliculas.forEach((nombre, i) => {
  console.log(`${i} - ${nombre}`);
});

/*
    el metodo map nos permite iterar sobre un array y devolver un nuevo array con los resultados
*/

const nombresEnMayusculas = nombresDePeliculas.map((elemento) => {
  return elemento.toUpperCase();
});

let a = [1, 2, 3];

const b = a.map((numero) => {
  return numero * 2;
});

/* console.log(nombresEnMayusculas); */

/*
    el metodo filter nos permite iterar sobre un array y devolver un nuevo array con los resultados
*/
const nombresFiltrados = nombresDePeliculas.filter((nombrePelicula) => {
  return nombrePelicula.length > 7;
});

/*
    el metodo find nos permite iterar sobre un array y devolver el primer elemento que cumpla con la condicion
*/
const peliculaSuperman = nombresDePeliculas.find((elemento) => {
  return elemento === "Superman";
});

/*
    el metodo reduce nos permite iterar sobre un array y devolver un valor
    
    el primer parametro es el acumulador
    el segundo parametro es el elemento actual
    el tercer parametro es el indice del elemento actual
    
    el parametro acumulador se inicializa con el primer elemento del array
    el parametro acumulador se actualiza con el resultado de la operacion
*/

const totalDeNombres = nombresDePeliculas.reduce(
  (acumulador, elemento, indiceActual) => {
    console.log(acumulador);
    console.log(elemento);
    console.log(indiceActual);
    return acumulador + elemento.length;
  },
  0
);

/* -------------------------------------------------------------------------------------------- */

const filmList = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    rating: 9.3,
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    rating: 9.2,
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    rating: 9.0,
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    rating: 9.0,
  },
  {
    id: 5,
    title: "12 Angry",
    year: 1957,
    director: "Sidney Lumet",
    rating: 8.9,
  },
  {
    id: 6,
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    rating: 8.9,
  },
  {
    id: 7,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    rating: 8.9,
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    rating: 8.9,
  },
  {
    id: 9,
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Sergio Leone",

    rating: 8.9,
  },
  {
    id: 10,
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    rating: 8.8,
  },
];

const comments = [
  {
    id: 1,
    text: "Great movie!",
    rating: 5,
    filmId: 1,
    userId: 1,
    likes: 0,
  },
  {
    id: 2,
    text: "I liked it",
    rating: 4,
    filmId: 1,
    userId: 2,
    likes: 0,
  },
  {
    id: 3,
    text: "I hated it",
    rating: 1,
    filmId: 2,
    userId: 1,
    likes: 0,
  },
  {
    id: 4,
    text: "It was ok",
    rating: 3,
    filmId: 9,
    userId: 3,
    likes: 0,
  },
];

const users = [
  {
    id: 1,
    name: "John",
    email: "jhon.1902@gmail.com",
  },
  {
    id: 2,
    name: "Juan",
    email: "juan0002@outlook.com",
  },
  {
    id: 3,
    name: "Pedro",
    email: "pedrito@gmail.com",
  },
];
