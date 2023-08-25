const simuladorDePrestamo = (prestamo, interes) => {
  let interes = (prestamo * tasa) / 100;
  let cuota = (interes * plazo) / 365;
  let total = prestamo + interes + cuota;
  if (cuota == 12) {
    interes = 5;
  } else if (cuota == 24) {
    interes = 10;
  } else if (cuota == 36) {
    interes = 15;
  }
  console.log("El interes a pagar es:" + interes);
  console.log("Monto total es:" + total);
};

simuladorDePrestamo(4000000, 12, 10);
