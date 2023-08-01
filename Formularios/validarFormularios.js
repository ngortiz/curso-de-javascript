const formulario = document.getElementById("formulario-donacion");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = {
    correo: formulario.correo.value,
    pais: formulario.pais.value,
    donacion: formulario.donacion.value,
    fecha: formulario.fecha.value,
    terminos: formulario["terminos-y-condiciones"].checked,
  };
  if (datos.correo.length <= 2) {
    console.log("correo invalido");
    return;
  }
  // Comprobamos el pais
  if (datos.correo === "") {
    console.log(" invalido");
    return;
  }
  if (datos.correo === "") {
    console.log("Selecciona una cantidad a donar");
    return;
  }
  if (datos.fecha === "") {
    console.log("Selecciona una fecha");
    return;
  }
  if (!datos.terminos) {
    console.log("Acepta los terminos y condiciones");
  }
  console.log(datos);
  console.log("Enviando datos...");
});
