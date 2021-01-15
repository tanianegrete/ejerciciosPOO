"use strict";
exports.__esModule = true;
var dia9ClaseBooks_1 = require("./dia9ClaseBooks");
//*****comprobaciones de la clase libros */
var libro1 = new dia9ClaseBooks_1.Book("100 años de soledad", 158, "Gabriel", "Gabriel Marquez", "Porrua");
console.log(libro1);
var metodoComprobar = libro1.toString(); //prueba enl metodo de dar valores
console.log(metodoComprobar);
libro1.setEditorial("Cambio de editorial");
var editonialNueva = libro1.getEditorial();
console.log(editonialNueva);
libro1.setAutor("Cambio de autor");
var autorCambio = libro1.getAutor();
console.log(autorCambio);
libro1.setIssn("Cambio de Issn");
var issnCambio = libro1.getIssn();
console.log(issnCambio);
libro1.setnPages(123456);
var cambioPages = libro1.getnPages();
console.log("cambio de paginas" + cambioPages);
