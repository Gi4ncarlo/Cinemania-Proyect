 
 const title = document.getElementById("title");
 const year = document.getElementById("year");
 const director = document.getElementById("director");
 const duration = document.getElementById("duration");
 const genre = document.getElementById("genre");
 const rate = document.getElementById("rate");
 const poster = document.getElementById("poster");

 //const axios = require("axios")

 const form = document.getElementById("create-movie-form");
 form.addEventListener("submit", async (event) => {
   event.preventDefault();
   const movie = {
     title: title.value,
     year: year.value,
     director: director.value,
     duration: duration.value,
     genre: genre.value,
     rate: rate.value,
     poster: poster.value
   };

   try {
  
    const response = await axios.post(`${process.env.PORT}/movies/createMovie`, movie);

    console.log(response.data); 

    // Limpiar el formulario
    form.reset(); // Por ejemplo, resetear el formulario

  } catch (error) {
    console.error('Error al crear la película:', error);
  }

 });