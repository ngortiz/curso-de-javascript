// En esta funcion indica si el numero esta presente
const elementoEnArreglo = (elementos, valor) => {
  for (elemento of elementos) {
    if (valor === elemento) return true;
  }
  return false;
};
const arregloNumeros = [1, 3, 4, 5];
const elementoPresente = elementoEnArreglo(arregloNumeros, 7);
console.log(elementoPresente);
