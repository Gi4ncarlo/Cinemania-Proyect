
const showMovies = require("./showMovies.js");

  $.get("https://students-api.up.railway.app/movies", (data, status) => {
    showMovies(data);
  });



