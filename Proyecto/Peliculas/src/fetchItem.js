const fetchItem = async (id) => {
  const tipo = document.querySelector(".main__filtros .btn--active").id;

  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDNkYTI4M2RhNzA2NTFlZDk3ZDVhNTZiNGRiOWQ2YiIsInN1YiI6IjY0ZGJjMjhkNzcxOWQ3MDBlNWM4NzllZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1zSbLIly7vtPOJbS4_U-Jzi48akWYw41Ebz5Sgv6-o",
      },
    };

    const url = `https://api.themoviedb.org/3/${tipo}/${id}?language=es-MX`;
    const respuesta = await fetch(url, options);
    const datos = await respuesta.json();

    return datos;
  } catch (e) {
    console.log(e);
  }
};

export default fetchItem;
