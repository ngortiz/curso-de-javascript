// Esta funcion suma los elementos cuyo indice son pares
const sumaElementosPares = (numeros) => {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (i % 2 == 0) {
      suma += numeros[i];
    }
  }
  console.log(suma);
};

const numeros = [0, 1, 2, 3, 4];
sumaElementosPares(numeros);
const otrosNumeros = [5, 2, 3, 7];
sumaElementosPares(otrosNumeros);
//////////////////////////////////////////////

//Esta funcion suma los numeros pares
const sumaNumerosPares = (numeros) => {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero % 2 == 0) {
      suma += numero;
    }
  }
  console.log(suma);
};

const listaDeNumeros = [1, 7, 6, 2, 9];
sumaNumerosPares(listaDeNumeros);

/////////////////////////////////////////////

//Esta funcion suma los numeros par e impar

const sumaNumerosParesImpares = (numeros) => {
  let sumaPar = 0;
  let sumaImpar = 0;
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero % 2 == 0) {
      sumaPar += numero;
    } else {
      sumaImpar += numero;
    }
  }
  console.log(sumaPar, sumaImpar);
};
const listaDeNumeros2 = [1, 7, 6, 2, 9];
sumaNumerosParesImpares(listaDeNumeros2);
