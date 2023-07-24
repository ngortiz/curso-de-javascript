/* 📌 Metodos estaticos 
Un método estático pertenece a la clase y no a una instancia u objeto de una clase. 
Para llamar luego a un método estático lo hacemos directamente antecediendo 
el nombre de la clase. Se las utiliza para definir funcionalidades que pertenecen a una clase pero que no dependan
de instancias de dicha clase
*/
class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre; // this hace referencia al objeto en cuestion, se  usa para representar o llamar al objeto de dicha funcion//
    this.correo = correo;
  }

  static borrar(id_usuario) {
    console.log(
      `El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`
    );
  }

  static registrados = 1000;
}

// const usuario = new Usuario('Carlos', 'correo@correo.com');
// usuario.borrarUsuario(1);
Usuario.borrar(1);
console.log(Usuario.registrados);
