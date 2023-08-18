const fetchGeneros = async (filtro = "movie") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDNkYTI4M2RhNzA2NTFlZDk3ZDVhNTZiNGRiOWQ2YiIsInN1YiI6IjY0ZGJjMjhkNzcxOWQ3MDBlNWM4NzllZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1zSbLIly7vtPOJbS4_U-Jzi48akWYw41Ebz5Sgv6-o",
    },
  };

  const tipo = filtro === "movie" ? "movie" : "tv";
  const url = `https://api.themoviedb.org/3/genre/${tipo}/list?language=es-MX`;
  try {
    const resultados = await fetch(url, options);
    const datos = await resultados.json();
    return datos.genres;
  } catch (e) {
    console.log(e);
  }
};

export default fetchGeneros;
