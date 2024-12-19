
//import "./createMovies.js";

// $.get("https://students-api.up.railway.app/movies", (data, status) => {
  //   showMovies(data);
  // });
  
  
  // USANDO PROMESAS CON ASYNC Y AWAIT


  import showMovies  from "./showMovies.js";


  const apiUrl = import.meta.env.PORT || "http://localhost:3000";
  
  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/movies`);
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json(); // Parsea la respuesta a JSON
      showMovies(data);
    } catch (error) {
      console.error("El error es el siguiente:", error);
    }
  };
  
  fetchData();
  
  
  
  
  
  // USANDO PROMESAS CON THEN Y CATCH  
  /*
  const promise = axios("https://students-api.up.railway.app/movies");

promise
.then((res) =>{
  showMovies(res.data);
})
.catch((err) => 
  console.log(" El error es el siguiente : ", err));

*/