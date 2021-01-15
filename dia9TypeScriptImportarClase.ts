import{Person} from "./dia9TypeScript"; // Importar la clase person
import{Calendar} from "./dia9ClaseCalendar";

let persona1:Person=new Person("Tania Morales", 29,"calle pepito Mendez 19"); //datos de la persona 
  console.log(persona1);

  let nombreP= persona1.name; //accede al nombre de la persona mediante el metodo.
  console.log("Nombre de de la persona es: "+ nombreP);

  let ayoN= persona1.yearOfBirth(2020);
  console.log(ayoN);

  persona1.setAdrees("DIRECCION modificada."); //cambia el nombre de la dirección
  let devuelveF= persona1.getAddress(); //devuelve la nueva direccion 

  console.log ( devuelveF);

  let persona2:Person=new Person("Ana Morales", 31,"calle palmatitla"); //datos de la persona 
  console.log(persona2);

  let persona3:Person=new Person("Javier Ernesto", 27,"calle palmatitla"); //datos de la persona 
  console.log(persona3);

  ///**********union de la clase calendario */

  let calendario1:Calendar =new Calendar();

  calendario1.people=[persona1,persona2,persona3]