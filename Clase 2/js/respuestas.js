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

/* 
    mapear los datos de los usuarios
    y los datos de los comentarios
  
    crear un json nuevo con los datos de los usuarios y los comentarios que pertenecen a ese usuario
*/

const usersWithComments = users.map((user) => {
  return {
    ...user,
    comments: comments.filter((comment) => comment.userId === user.id),
  };
});

console.log(usersWithComments);

/* 
    crear un nuevo json con las peliculas y los comentarios que pertenecen a esa pelicula
*/

const filmsWithComments = filmList.map((film) => {
  return {
    ...film,
    comments: comments.filter((comment) => comment.filmId === film.id),
  };
});

console.log(filmsWithComments);
