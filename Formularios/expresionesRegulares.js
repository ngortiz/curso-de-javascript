/*
	📌 Expresiones Regulares dentro de formularios
	Podemos usar expresiones regulares para validar los campos de una forma más precisa.

	Guía de expresiones regulares:
	https://www.youtube.com/watch?v=wfogZfIS03U

	Ejemplo:
	https://regexr.com/71ua4
*/
const formulario = document.getElementById("formulario-donacion");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/;

  const datos = {
    correo: formulario.correo.value,
  };
  console.log(expresionRegular.test(datos.correo));
  //Comprobamos correos
  if (!expresionRegular.test(datos.correo)) {
    console.log("correo invalido");
    return;
  }

  console.log(datos);
  console.log("Enviando datos...");
});
