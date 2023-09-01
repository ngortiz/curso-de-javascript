function calcularPrestamo(monto, tasaInteres, plazoMeses) {
  // Convertir la tasa de interés de porcentaje a decimal
  const tasaDecimal = tasaInteres / 100;

  // Calcular la cuota mensual utilizando la fórmula de la cuota de préstamo
  const cuotaMensual =
    (monto * tasaDecimal) / (1 - Math.pow(1 + tasaDecimal, -plazoMeses));

  // Calcular el monto total a pagar (cuota mensual * número de cuotas)
  const montoTotal = cuotaMensual * plazoMeses;

  return {
    cuotaMensual: cuotaMensual.toFixed(2), // Redondear a 2 decimales
    montoTotal: montoTotal.toFixed(2),
  };
}

// Ejemplo de uso
const prestamo = calcularPrestamo(10000000, 5, 12);
console.log("Cuota Mensual: PYG " + prestamo.cuotaMensual);
console.log("Monto Total a Pagar: PYG " + prestamo.montoTotal);
