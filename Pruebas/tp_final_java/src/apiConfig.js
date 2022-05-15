import axios from "axios";
import { useEffect } from "react";

export const API = {
    baseURL: 'https://api.themoviedb.org/3',
    apiKey: '?api_key=e83447cd8dd93f812563a82cf4343c41',
    entidad: {
      topRatedMovies: '/movie/top_rated',
      topRatedTv: '/tv/top_rated',
      popularMovies: '/movie/popular',
      popularTv: '/movie/popular'
    },
    lenguaje: {
      eng: '&language=en-US',
      esp: '&language=en-ES'
    },
    pagination: '&page=',
    imageURL: 'https://image.tmdb.org/t/p',
    quality: {
      posterSmall: "/w200",
      posterMedium: "/w300",
      posterLarge: "/w500",
      backdropSmall: "/w300",
      backdropMedium: "/w780",
      backdropLarge: "/w1280"      
    },
};

export const lenguajes = {
  en: 'eng',
  es: 'esp',
};

// Comienza: La manera mas sencilla de hacerlo
export const tryGetTopRatedMovies = async (apiKey, pag) => {
  try{
    const response = await axios(`https://api.themoviedb.org/3/movie/top_rated/?api_key=${apiKey}&language=en-US&page=${pag}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
// Fin: La manera mas sencilla de hacerlo

// Comienza: Una manera de hacerlo mas profesional
export const TMDB_API = {
  tryGet: (entidad, leng = lenguajes.es, pag = 1, idPelicula = null) => {
    return `${API.baseURL}${entidad}${(idPelicula) ? "/"+idPelicula : ""}${API.apiKey}${API.lenguaje[leng]}${API.pagination}${pag}`;
  }
}

export const TMDB_API_services = {
  tryGetJustOneMovie: async (idPelicula = 1) => {
    const url = TMDB_API.tryGet(API.movie, lenguajes.en, 0, idPelicula); 
    try{
      const response = await axios.get(url);
      return response.data;
    } catch(error) {return error;}
  },
  tryGetTopRatedMovies: async (pag = 1) => {
    const url = TMDB_API.tryGet(API.topRatedMovies, lenguajes.en, pag); 
    try{
      const response = await axios.get(url);
      return response.data;
    } catch(error) {return error;}
  },
  tryGetPopularMovies: async (pag = 1) => {
    const url = TMDB_API.tryGet(API.popularMovies, lenguajes.en, pag); 
    try{
      const response = await axios.get(url);
      return response.data;
    } catch(error) {return error;}
  },
  tryGetTopRatedTv: async (pag = 1) => {
    const url = TMDB_API.tryGet(API.topRatedTv, lenguajes.en, pag); 
    try{
      const response = await axios.get(url);
      return response.data;
    } catch(error) {return error;}
  },
  tryGetPopularTv: async (pag = 1) => {
    const url = TMDB_API.tryGet(API.popularTv, lenguajes.en, pag); 
    try{
      const response = await axios.get(url);
      return response.data;
    } catch(error) {return error;}
  }
}
// Fin: Una manera de hacerlo mas profesional