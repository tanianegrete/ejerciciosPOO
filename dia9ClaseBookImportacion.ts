import {Book} from "./dia9ClaseBooks";


//*****comprobaciones de la clase libros */

let libro1:Book= new Book("100 años de soledad",158,"Gabriel","Gabriel Marquez","Porrua");
console.log (libro1);

let metodoComprobar= libro1.toString();  //prueba enl metodo de dar valores
console.log(metodoComprobar);

libro1.setEditorial("Cambio de editorial");
let editonialNueva= libro1.getEditorial();
console.log(editonialNueva);

libro1.setAutor("Cambio de autor");
let autorCambio= libro1.getAutor();
console.log(autorCambio);

libro1.setIssn("Cambio de Issn");
let issnCambio= libro1.getIssn();
console.log(issnCambio);

libro1.setnPages(123456);
let cambioPages= libro1.getnPages();
console.log("cambio de paginas"+cambioPages);
