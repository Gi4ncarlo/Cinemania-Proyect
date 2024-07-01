const { getMovies, createMovie } = require("../services/moviesService");

const Movies = require("../models/Movies");

module.exports = {
  getallMovies: async (req, res) => {
    try {
      const movies = await getMovies();

      if (!movies) {
        res.status(404).send("No se encontraron peliculas");
      }

      res.status(200).json(movies);

    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al obtener las películas");
    }
  },


  postMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const movieData = { title, year, director, duration, genre, rate, poster };
      const movie = await createMovie(movieData);
      res.status(201).json(movie);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al crear la película");
    } 
  },
};
