const dineroAMonedas = (cantidad, tipoDeMoneda, otroTipoDeMoneda) => {
  if (tipoDeMoneda === "Gs" && otroTipoDeMoneda === "Usd") {
    return cantidad / 7310;
  } else if (tipoDeMoneda === "Usd" && otroTipoDeMoneda === "Gs") {
    return cantidad * 7250;
  } else if (tipoDeMoneda === "Gs" && otroTipoDeMoneda === "Peso") {
    return cantidad / 15;
  } else if (tipoDeMoneda === "Peso" && otroTipoDeMoneda === "Gs") {
    return cantidad * 13;
  }
};
console.log(dineroAMonedas(100000, "Gs", "Usd"));
console.log(dineroAMonedas(100, "Usd", "Gs"));
console.log(dineroAMonedas(600000, "Gs", "Peso"));
console.log(dineroAMonedas(10000, "Peso", "Gs"));
