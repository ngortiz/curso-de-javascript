const usuario = {
  nombre: "Carlos",
  edad: 27,
  amigos: ["Alejandro", "Cesar", "Manuel"],
  saludo: () => {
    console.log("Hola");
  },
};
/* 📌 Metodos propios
Los objetos pueden tener metodos personalizados
*/
//usuario.saludo();

/* 📌 Object.values()
Nos devuelve un arreglo con los valores (values) del odjeto
*/
//const resultados = Object.values(usuario);

/* 📌 Object.entries()
Nos devuelve un arreglo con las parejas de clave y valor del objeto
*/
const resultados = Object.entries(usuario);
console.log(resultados);
console.log(`El objeto tiene ${resultados.length} propiedades`);
