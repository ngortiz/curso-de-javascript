'use strict';

//export default () => {
//return {
//  nombre: "Carlos",
//  correo: "correo@correo.com",
//};
//};

//Forma 2 - Final del Documento
const obtenerUsuario = () => {
  return {
    nombre: "Carlos",
    correo: "correo@correo.com",
  };
};

/*
📌 Named Imports
*/
//import { nombre as nombreImportado, obtenerPosts } from "./namedExports";
//console.log("Mi nombre es " + nombreImportado);
//console.log(obtenerPosts());

console.log(obtenerUsuario());
