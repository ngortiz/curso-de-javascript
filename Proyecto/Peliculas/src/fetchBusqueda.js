import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchBusqueda = async (pagina = 1) => {
  const tipo = document.querySelector(".main__filtros .btn--active").id;
  const idGenero = document.querySelector("#filtro-generos .btn--active")
    ?.dataset.id;
  const añoInicial = document.getElementById("años-min").value || 1950;
  const añoFinal = document.getElementById("años-max").value || 2022;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDNkYTI4M2RhNzA2NTFlZDk3ZDVhNTZiNGRiOWQ2YiIsInN1YiI6IjY0ZGJjMjhkNzcxOWQ3MDBlNWM4NzllZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1zSbLIly7vtPOJbS4_U-Jzi48akWYw41Ebz5Sgv6-o",
    },
  };

  let url;
  if (tipo === "movie") {
    url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=${añoInicial}&release_date.lte=${añoFinal}&sort_by=popularity.desc&with_genres=${idGenero}`;
  } else if (tipo === "tv") {
    url = `https://api.themoviedb.org/3/discover/tv?first_air_date.gte=${añoInicial}&&first_air_date.lte=${añoFinal}&include_adult=false&include_null_first_air_dates=false&language=es-MX&page=1&sort_by=popularity.desc&timezone=America%2FNew_York&with_genres=${idGenero}`;
  }
  let generos;
  generos = await fetchGeneros(tipo);

  try {
    const respuesta = await fetch(url, options);
    const data = await respuesta.json();

    let resultados = data.results;

    // Obtenemos el genero de cada resultado y lo agregamos al objeto de resultados.
    resultados.forEach((resultado) => {
      resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
    });

    return resultados;
  } catch (e) {
    console.log(e);
  }
};

export default fetchBusqueda;
