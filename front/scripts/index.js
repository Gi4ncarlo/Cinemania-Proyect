
let peliculas = [];

function showMovies(peli) {
  const articlePelicula = document.createElement("article");
  articlePelicula.classList.add("tarjeta");

  const imagen = document.createElement("img");
  imagen.classList.add("tarjeta-imagen");

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("tarjeta-info");

  const titleHeading = document.createElement("h2");
  const anio = document.createElement("p");
  const dire = document.createElement("p");
  const duracion = document.createElement("p");
  const genero = document.createElement("p");
  const puntuacion = document.createElement("p");

  const contenedor = document.querySelector(".peliculas");

  const { title, year, director, duration, genre, rate, poster } = peli;

  titleHeading.innerHTML = title;
  anio.innerHTML = `<strong>Año :</strong> ${year}`;
  dire.innerHTML = `<strong>Director :</strong> ${director}`;
  duracion.innerHTML = `<strong>Duración :</strong> ${duration}`;
  genero.innerHTML = `<strong>Género :</strong> ${genre}`;
  puntuacion.innerHTML = `<strong>Puntuación :</strong> ${rate}`;
  imagen.src = poster;
  imagen.alt = `Poster de ${title}`;

  infoContainer.appendChild(titleHeading);
  infoContainer.appendChild(anio);
  infoContainer.appendChild(dire);
  infoContainer.appendChild(duracion);
  infoContainer.appendChild(genero);
  infoContainer.appendChild(puntuacion);

  articlePelicula.appendChild(imagen);
  articlePelicula.appendChild(infoContainer);

  titleHeading.classList.add("tarjeta-titulo");
  genero.classList.add("tarjeta-genero");

  contenedor.appendChild(articlePelicula);
}

function init(){
  peliculas.map((peli) => showMovies(peli));
  console.log("las peliculas son : ", peliculas);
};


const addMovie = () => {
  $.get("https://students-api.up.railway.app/movies",(data, status) =>{
    peliculas = data;
    console.log("Las pelis son : ", peliculas);
  })
}

addMovie();

setTimeout(() => {
  init()
}, 1500);
