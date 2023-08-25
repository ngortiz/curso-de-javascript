const calculadoraImc = (peso, altura) => {
  const imc = peso / (altura * altura);
  if (imc < 18.5) {
    console.log("Bajo Peso");
  } else if (imc <= 24.9) {
    console.log("Peso Normal");
  } else if (imc <= 29.9) {
    console.log("Sobre peso");
  } else {
    console.log("Obesidad");
  }
};
calculadoraImc(140, 1.85);
