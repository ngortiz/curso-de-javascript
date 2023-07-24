const elementosEnArreglo = (elementos, valor) => {
  for (elemento of elementos) {
    if (valor === elemento) return true;
  }
  return false;
};
const numero = [8, 5, 6, 9, 4];
const elementoPresente = elementosEnArreglo(numero, 10);
console.log(elementoPresente);
