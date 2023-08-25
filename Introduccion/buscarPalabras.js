const buscarPalabras = (palabras, valor) => {
  for (let palabra of palabras) {
    if (valor === palabra) return true;
  }
  return false;
};
const palabras = ["naranja", "madera", "arbol", "mango", "regla"];
const palabraPresente = buscarPalabras(palabras, "arbol");
console.log(palabraPresente);
