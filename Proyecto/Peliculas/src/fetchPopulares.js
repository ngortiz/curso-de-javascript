import obtenerGenero from "./obtenerGenero";
import fetchGeneros from "./fetchGeneros";

/**
 * Funcion que se encarga de hacer fetch para obtener las peliculas o series populares.
 * @param {String} filtro Si queremos cargar 'peliculas' o 'series'.
 */
const fetchPopulares = async (filtro = "movie", pagina = 1) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDNkYTI4M2RhNzA2NTFlZDk3ZDVhNTZiNGRiOWQ2YiIsInN1YiI6IjY0ZGJjMjhkNzcxOWQ3MDBlNWM4NzllZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1zSbLIly7vtPOJbS4_U-Jzi48akWYw41Ebz5Sgv6-o",
    },
  };

  const tipo = filtro === "movie" ? "movie" : "tv";
  const generos = await fetchGeneros(tipo);

  const url = `https://api.themoviedb.org/3/${tipo}/popular?language=es-MX&page=${pagina}&region=US`;

  try {
    const respuesta = await fetch(url, options);
    const datos = await respuesta.json();
    const resultados = datos.results;

    // Obtenemos el genero de cada resultado y lo agregamos al objeto de resultados.
    resultados.forEach((resultado) => {
      resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
    });

    return resultados;
  } catch (e) {
    console.log(e);
  }
};

export default fetchPopulares;
