"use strict";
exports.__esModule = true;
var dia9TypeScript_1 = require("./dia9TypeScript"); // Importar la clase person
var dia9ClaseCalendar_1 = require("./dia9ClaseCalendar");
var persona1 = new dia9TypeScript_1.Person("Tania Morales", 29, "calle pepito Mendez 19"); //datos de la persona 
console.log(persona1);
var nombreP = persona1.name; //accede al nombre de la persona mediante el metodo.
console.log("Nombre de de la persona es: " + nombreP);
var ayoN = persona1.yearOfBirth(2020);
console.log(ayoN);
persona1.setAdrees("DIRECCION modificada."); //cambia el nombre de la dirección
var devuelveF = persona1.getAddress(); //devuelve la nueva direccion 
console.log(devuelveF);
var persona2 = new dia9TypeScript_1.Person("Ana Morales", 31, "calle palmatitla"); //datos de la persona 
console.log(persona2);
var persona3 = new dia9TypeScript_1.Person("Javier Ernesto", 27, "calle palmatitla"); //datos de la persona 
console.log(persona3);
///**********union de la clase calendario */
var calendario1 = new dia9ClaseCalendar_1.Calendar();
calendario1.people = [persona1, persona2, persona3];
