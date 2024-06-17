
const axios = require("axios")
const showMovies = require("./showMovies.js");

  // $.get("https://students-api.up.railway.app/movies", (data, status) => {
  //   showMovies(data);
  // });


 // USANDO PROMESAS CON ASYNC Y AWAIT
  const fetchData = async () => {
    try {
      const data = await axios("http://localhost:3000/movies");
      showMovies(data.data);
    } catch (error) {
      console.log(" El error es el siguiente : ", error);
    }
  }

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