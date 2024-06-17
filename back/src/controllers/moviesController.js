const { getallPosters, moviesInstance } = require("../services/moviesService");

module.exports = {
  getallMovies: async (req, res) => {
    try {
      const movies = await moviesInstance();

      if (!movies) {
        res.status(404).send("No se encontraron peliculas");
      }

      res.status(200).json(movies);

    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al obtener las películas");
    }
  },
};
