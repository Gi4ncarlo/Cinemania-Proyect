const { getMovies, createMovie } = require("../services/moviesService");

const Movies = require("../models/Movies");

module.exports = {
  getallMovies: async (req, res) => {
    console.log("Fetching movies...");
    try {
      const movies = await getMovies();
      console.log("Movies fetched:", movies);
      if (!movies) {
        console.log("No movies found.");
        return res.status(404).send("No se encontraron películas");
      }
      console.log("Returning movies...");
      return res.status(200).json(movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
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
