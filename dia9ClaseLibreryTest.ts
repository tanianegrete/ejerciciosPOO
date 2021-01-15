import {Book} from "./dia9ClaseBooks"; 
import {Library} from "./dia9ClaseLibrery";

let libro1:Book= new Book("100 años de soledad",158,"Gabriel","Gabriel Marquez","Porrua");
//console.log (libro1); 

let libro2:Book= new Book("La estrella de Lisa",58,"Gabrielita","TANIA MORALES","Editores");
//console.log (libro2); 

let libro3:Book= new Book("La miseria del torpe",0.01,"Charlito","Soto Godinez","Delfines");
//console.log (libro3); 



let libreria1:Library=new Library([libro1,libro2,libro3],"calle Paltatitla","taniaMorales"); //clase al ultimo de agrgan estos datos ;
// console.log(libreria1);

let comprobacionMetodo= libreria1.todosLibros();
// console.log(comprobacionMetodo);

let cuantosLibros=libreria1.getNumberOfBooks();
//console.log(cuantosLibros);

let esAutorIgual= libreria1.findByAutor("TANIA MORALES");
console.log("es el autor**********************");
console.log(esAutorIgual);