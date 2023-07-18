/* 📌 Local Scope o Variable locales
- Son las variables declaradas dentro de una function
- solo podemos acceder a ellas desde dentro de la funcion
*/
var numero = 1;
var obtenerNumeroLetras = (nombre) => {
  var numero = nombre.length;
  console.log(`${nombre} tiene ${numero} letras`);

  var funcionAnidada = () => {
    console.log(numero);
  };
  funcionAnidada();
};
obtenerNumeroLetras("Alex");
//console.log(numero);
