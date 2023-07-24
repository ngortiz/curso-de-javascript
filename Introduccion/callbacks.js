/*
📌 Callbacks
es una función que se pasa a otra función como un argumento,  es una funciones que podemos pasar parametro a otra funcion
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
*/
const obtenerPostsDeUsuario = (usuario, callback) => {
  console.log(`Obteniendo los post de ${usuario}...`);

  setTimeout(() => {
    let posts = ["Post1", "Post2", "Post3"];
    callback(posts);
  }, 2000);
};
obtenerPostsDeUsuario("carlos", (posts) => {});
