/* ASYNC AWAIT
Es la declaración de función asíncrona crea un enlace 
de una nueva función asíncrona a un nombre dado. 
La palabra clave await está permitida dentro del cuerpo de la función,
 lo que permite que el comportamiento asincrónico basado en promesas 
 se escriba en un estilo más limpio y evita 
la necesidad de configurar explícitamente cadenas de promesas.
*/

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post 1", "Posts 2", "Post 3"];
      const error = false;

      if (error) {
        reject("Hubo un error al intentar obtener los posts");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};
/*console.log("Inicia operacion");
fetchPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Finaliza", operacion);
*/

const mostrarPosts = async () => {
  try {
    const posts = await fetchPosts();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};
mostrarPosts();
