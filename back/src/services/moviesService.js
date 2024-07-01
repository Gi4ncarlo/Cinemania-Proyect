//const axios = require("axios");

/*class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!title || title.length < 0) {
      throw new Error("Titulo incorrecto");
    }

    if (!poster || poster.length < 0) {
      throw new Error("Poster incorrecto");
    }

    if (!director || director.length < 0) {
      throw new Error("Director incorrecto");
    }

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

module.exports = {
  // https://students-api.up.railway.app/movies

  getallPosters: async () => {
      try {
        const data = await axios.get("https://students-api.up.railway.app/movi");
        console.log("las peliculas son : ", data.data);
        return data.data;
      } catch (error) {
        console.log(" El error en el fetch es el siguiente : ", error);
      }
  },

  moviesInstance: async() => {
    try {
        const movies = await module.exports.getallPosters();
      return movies.map(
        (movie) =>
          new Movie(
            movie.title,
            movie.year,
            movie.director,
            movie.duration,
            movie.genre,
            movie.rate,
            movie.poster
          )
      );
    }catch (error) {
        console.log("Error al obtener las películas:", error);
        throw error; 
      }
    }
};
*/


const Movies = require("../models/Movies");

module.exports = {
  getMovies : async () => {
    const movies = await Movies.find();

    return movies;
  },

  createMovie : async (movieData) => {
    const movie = new Movies(movieData);
    const savedMovie = await movie.save();
    return savedMovie;
  }
}