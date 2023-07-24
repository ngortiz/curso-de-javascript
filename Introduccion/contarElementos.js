/* 📌 Esta Funcion suma los elementos mayores de un arreglo
 */
const contarElementosMayores = (n, numeros) => {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    let numeroActual = numeros[i];

    if (numeroActual > n) {
      contador += 1;
    }
  }
  console.log(contador);
};
numeros = [1, 4, 7, 6, 2, 9, 10];
contarElementosMayores(3, numeros);
