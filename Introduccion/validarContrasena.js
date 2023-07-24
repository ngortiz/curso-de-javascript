// 1- Validar que contrasena sea mayor que 8
// 2- Validar que contenga al menos un numero

const validarPassword = (password) => {
  if (password.length < 8) return false;
  if (password.length > 12) return false;

  for (caracter in password) {
    if (parseInt(caracter)) return true;
  }

  return false;
};

const passwordValido = "cursoj202322";
const valido = validarPassword(passwordValido);

console.log(valido);
