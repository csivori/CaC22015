// Spread operator se utiliza para copiar las propiedades de un objeto a otro objeto

// Ejemplo 1
const persona1 = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle falsa 123",
    ciudad: "Ciudad falsa",
  },
};

// si queremos crear una segunda persona que viva en la misma direccion que la primera persona
// podemos hacerlo de la siguiente manera

const persona2 = {
  ...persona1,
  nombre: "Pedro",
  edad: 35,
  // implicitamente estariamos copiando la direccion de la primera persona
};

/* 

    console.log(persona2);

    {
    nombre: 'Pedro',
    edad: 35,
    direccion: { calle: 'Calle falsa 123', ciudad: 'Ciudad falsa' }
    }
*/

// podemos hacerlo de la siguiente manera, para hacerlo mas declarativo

const persona3 = {
  ...persona1,
  nombre: "Pedro",
  edad: 35,
  direccion: {
    ...persona1.direccion,
  },
};

// esto devolveria el mismo resultado que persona2

// =================================================================================
// ejercicios de desestructuracion

// 1. Desestructurar la direccion de la persona1 y guardarla en una variable
const {direccion: dir1} = persona1;
console.log("Ej 1) ", dir1);

// 2. Crear una variable nueva que contenga la direccion de la persona1 y la edad de la persona2
const per2 = {direccion: persona1.direccion, edad:persona1.edad};
console.log("Ej 2) ", per2);

// 3. Crear una variable nueva que contengan las propiedades de la persona1 y la edad de la persona2
const per3 = {...persona1, edad:persona2.edad};
console.log("Ej 3) ", per3);

// 4. desestructurar la ciudad donde vive la persona1 y guardarla en una variable
const {ciudad: ciu4} = persona1.direccion;
console.log("Ej 4) ", ciu4);

// =================================================================================

// Es comun que los objetos vengan anidados en otro objeto, o en arrays de objetos

const objetoComplejo = [
  {
    id: 1,
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    direccion: {
      calle: "Calle falsa",
      numero: 123,
      ciudad: "Ciudad falsa",
    },
    telefono: [
      {
        fijo: "1234567",
        movil: "123456789",
      },
    ],
  },
  {
    id: 2,
    nombre: "Pedro",
    edad: 35,
    profesion: "Desarrollador",
    direccion: {
      calle: "Calle falsa",
      numero: 1245,
      ciudad: "Ciudad falsa",
    },
    telefono: [
      {
        fijo: "7654321",
        movil: "987654321",
      },
    ],
  },
];

// para acceder a los datos de un objeto dentro de un array de objetos
// podemos hacerlo de la siguiente manera

const persona4 = objetoComplejo[0];

// por medio del inidice 0 podemos acceder a la persona1
// funciona de la misma manera que en los arrays

// una vez que tenemos al objeto en una variable podemos acceder a sus propiedades
persona4.nombre; // Juan

// tambien se podria hacer de la siguiente manera
persona4["nombre"]; // Juan
// accediemos a las propiedades del objeto mediante un string con el nombre de la clave que nos interesa

// =================================================================================

// Ejercicios de desestructuracion y arrays de objetos

// 5. Desestructurar el nombre de la primer persona dentro de objetoComplejo
const {nombre: nom5} = objetoComplejo[0];
console.log("Ej 5) ", nom5);

// 6. Desestructurar el nombre de la segunda persona dentro de objetoComplejo
const {nombre: nom6} = objetoComplejo[1];
console.log("Ej 6) ", nom6);

// 7. Desestructurar el telefono fijo de la primer persona dentro de objetoComplejo
const {fijo: telfijo7} = objetoComplejo[0].telefono[0];
console.log("Ej 7) ", telfijo7);

// 8. Desestructurar el telefono movil de la segunda persona dentro de objetoComplejo
const {movil: telmovil8} = objetoComplejo[1].telefono[0];
console.log("Ej 8) ", telmovil8);

// ===================================================================================
//
//
//
//
//
//
//
//
//
//
//
//
//
// ===================================================================================
// respuestas

// 1. Desestructurar la direccion de la persona1 y guardarla en una variable
const { direccion } = persona1;

// 2. Crear un objeto nuevo que contenga la direccion de la persona1 y la edad de la persona2
const direccion1Edad2 = {
  direccion: persona1.direccion,
  edad: persona2.edad,
};

// 3. Crear un objeto nuevo que contenga las propiedades de la persona1 y la edad de la persona2
const persona1ConEdad2 = {
  ...persona1,
  edad: persona2.edad,
};

// 4. desestructurar la ciudad donde vive la persona1 y guardarla en una variable
//CAS const {direccion: { ciudad },} = persona1;
// esto nos devolveria la ciudad falsa
// console.log(ciudad);

// esto es lo mismo que
// const ciudad = persona1.direccion.ciudad

// Como pueden observar, es posible desestructurar un objeto dentro de otro objeto
// Sin embargo, se podria llegar al mismo resultado de la siguiente manera

// ===================================================================================

// Ejercicios de desestructuracion y arrays de objetos

// 1. Desestructurar el nombre de la primer persona dentro de objetoComplejo
const { nombre } = objetoComplejo[0];

// 2. Desestructurar el nombre de la segunda persona dentro de objetoComplejo
//CAS const { nombre } = objetoComplejo[1];

// 3. Desestructurar el telefono fijo de la primer persona dentro de objetoComplejo
const {
  telefono: [{ fijo }],
} = objetoComplejo[0];

// Como peuden ver es posible desestructurar un objeto dentro de un objeto, dentro de un array de objetos... Estos casos no son tan comunes, pero es posible hacerlo.
// Sin embargo, podria resultar mas sencillo y descritivo de la siguiente manera

const telefonoFijoPersona1 = objetoComplejo[0].telefono[0].fijo;

// 4. Desestructurar el telefono movil de la segunda persona dentro de objetoComplejo
const {
  telefono: [{ movil }],
} = objetoComplejo[1];

// Este caso es exactamente igual que el anterior
// el mismo resultado se obtiene de la siguiente manera
const telefonoMovilPersona2 = objetoComplejo[1].telefono[0].movil;
