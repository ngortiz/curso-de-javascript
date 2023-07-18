const colores = ["Rojo", "Verde", "Azul", "Blanco"];
/*
📌  .Length
(Propiedad) -Nos permite conocer la cantidada de elementos de un arreglo.
*/
console.log(colores.length);

/*
📌 .toString()
-Nos permite traformar una arreglo en una cadena de texto.
Por ejemplo para poder mostrarlo en el navegador
*/
//document.body.innerHTML = colores.toString();

/*
📌 .join()
Nos permite trasnformar un arreglo a una cadena de texto y separar cada elemento
*/
console.log(colores.join("-"));

/*
📌 .sort()
Nos permite ordenar un arreglo de cadena de texto, de forma alfabetica
*/
const letras = ["c", "b", "d", "a"];
console.log(letras.sort());

const numeros = ["3", "2", "4", "1"];
console.log(numeros.sort());

/*
📌 .reverse()
Nos permite ordenar un arreglo de forma descendente
*/
console.log(letras.reverse());
console.log(numeros.reverse());

/*📌 .concat
Nos permite juntar dos arreglos en uno solo
*/
const arreglo1 = [1, 2, 3];
const arreglo2 = ["A", "B", "C"];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

/*📌 push()
Nos permite agregarelmento al final de un arreglo
*/
colores.push("Naranja");
console.log(colores);

/*📌 pop()
Nos permite eliminar unelmento al final de un arreglo
*/
colores.pop();
console.log(colores);

/*📌 shift()
Nos permite eliminar un elmento al final de un arreglo
*/
const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const diaEliminado = dias.shift();
console.log(dias[0]);

/*📌 unshift()
Nos permite agregar un elmento al inicio de un arreglo
*/
dias.unshift("Carlos");
console.log(dias);

/*📌 splice()
Nos permite insertar elementos a un arreglo donde le donde le especifiquemos
- 1er parametro Posicion donde queremos comenzar a insertar los elementos
-2do parametro - Si queremos eliminar elementos del arreglo desde la posicion indicada
-Resto de parametros - los elementos a insertar
*/

const amigos = ["Maggy", "Vero", "Matu", "zarita"];
amigos.splice(0, 0, "Valeria", "Tania");
console.log(amigos);

/*📌 slice()
Nos permite copiar una parte de un arreglo a otro.
-1er paramentro -Posicion desde donde queremos copiar
-2do parametro - hasta antes de que elemento copiar
*/
const frutas = ["fresa", "Mandarina", "Banana", "Mango", "Naranja", "Melon"];
const frutasFavoritas = frutas.slice(2, 6);
console.log(frutasFavoritas);
