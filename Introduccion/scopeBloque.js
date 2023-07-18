/* 📌 Block Scope / Alcance de tipo bloque
- Pertenecen las variables declarardas con const o let dentro de un bloque {}
- Solo podemos acceder a ellas dentro del bloque
*/

/*const edad = 19;
if (edad >= 18) {
  const accesoPermitido = true;
  if (true) {
    console.log(accesoPermitido);
  }

  const miFuncion = () => {
    console.log(accesoPermitido);
  };.lo
  miFuncion();
}

const accesoPermitido = "SI";
console.log(accesoPermitido);
*/

if (true) {
  let nombre = "Carlos";
}
console.log(nombre);
