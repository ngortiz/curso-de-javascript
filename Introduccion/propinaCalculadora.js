const calculadoraPropina = (cuenta, calidad) => {
  let porcentaje = 0;
  if (calidad == "Muy Buena") {
    porcentaje = 10;
  } else if (calidad == "Buena") {
    porcentaje = 5;
  } else if (calidad == "Mala") {
    porcentaje = 2;
  }
  const propina = (porcentaje * cuenta) / 100;
  console.log("La propina es:" + propina);
};
// Para probar

calculadoraPropina(110000, "Mala");
