/*📌 Break
la sentencia break nos sirve para salir de bloques de tipo Switck
Pero tambien nos sirve para forzar la salidad de un ciclo
*/
//const nombres = [
// "Arturo",
// "Andres",
// "Alejandro",
// "Roberto",
// "Adrian",
// "Antonio",
// "Angel",
//];

//for (let i = 0; i < nombres.length; i++) {
// if (nombres[i][0] !== "A") {
//   console.log("ALTO! Hay un nombre que no empieza por la letra A");
//   console.log(nombres[i] + " no empieza por la letra A");
//   break;
//}
// console.log(nombres[1]);
//}
/*📌 Continue
La sentencia continue nos sirve para saltar a la siguiente interaccion
*/
const invitados = [
  "Carlos",
  "Christian",
  "Christoher",
  "Jorge",
  "Estefania",
  "Erika",
  "Manuel",
];
console.log("Lista de personas aceptada:");

for (let i = 0; i < invitados.length; i++) {
  if (invitados[i] === "Jorge") {
    continue;
  }
  console.log(invitados[i]);
}
