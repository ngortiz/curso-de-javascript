/*//Scope se le puede llamar alcance o ambito de variable
//basicamente nos indica desde que parte de nuestro codigo podemos acceder a las variable
// - Podemos usar const, let, var.

*/
var nombre = "Carlos";
console.log(nombre);

const saludo = () => {
  console.log("Hola " + nombre);

  nombre = "Arturo";
  console.log("El nuevo nombre es: " + nombre);
};
saludo();
