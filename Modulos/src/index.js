/*
📌 Named Imports
*/
//import { nombre as nombreImportado, obtenerPosts } from "./namedExports";
//console.log("Mi nombre es " + nombreImportado);
//console.log(obtenerPosts());

/*
📌 Namespace Imports
*/

//import * as datos from "./namedExports";
//console.log(datos.nombre);
//console.log(datos.obtenerPosts());

/*
📌 Default Imports
*/ import obtenerUsuario from "./defaulExport";
console.log(obtener());

/*
📌 Empty imports
Carga todo el codigo pero sin hacer bingun objeto
*/
import "./emptyEport";
import { correo } from "./emptyExport";
console.log(correo);
