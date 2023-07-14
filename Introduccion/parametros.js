const saludo = (nombre) => {
  console.log(`Hola ${nombre}!`);
};

saludo("Carlos");
saludo("Alex");
saludo("Cesar");

//📌 Multiples parametros
const operacion = (tipo, numero1, numero2) => {
  if (tipo === "suma") {
    console.log(numero1 + numero2);
  } else if (tipo === "resta") {
    console.log(numero1 - numero2);
  }
};
operacion("suma", 100, 100);
operacion("resta", 100, 50);
