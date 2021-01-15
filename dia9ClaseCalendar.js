"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var dia9TypeScript_1 = require("./dia9TypeScript");
var Calendar = /** @class */ (function () {
    //Implementación del método Constructor
    function Calendar() {
        this.people = new Array();
    }
    // Métodos Publicos
    Calendar.prototype.printCalendar = function () {
        for (var i = 0; this.people.length; i++) {
            console.log(this.people[i].mostrarDatos());
        }
        console.log("a ver que pasa");
    };
    return Calendar;
}());
exports.Calendar = Calendar;
// let personaCalendar= new Calendar();
// personaCalendar.people[persona1,persona2]; //datos de la persona 
//  // console.log(persona1)
var person1 = new dia9TypeScript_1.Person("TANIA", 24, "retiro"); //objetos personas
var person2 = new dia9TypeScript_1.Person("SONIA", 29, "retiro");
var person3 = new dia9TypeScript_1.Person("CARMEN", 34, "retiro");
var calendar1 = new Calendar(); //objeto de la clase calendar
calendar1.people = [person1, person2, person3]; // accedemos a la clase calendar y comprobamos los datos de la propiedad objetoy de las propiedades de person
console.log(calendar1.people); //accedemos a la clase person de la propiedad people
console.log(calendar1.people[0].age); //acceso de calendar1 de la propiedad people en la pocicion 1 que es tania  y la edad
console.log(calendar1.printCalendar()); // muestra todos los datos de la clase Calendar
console.log(calendar1.people[1].yearOfBirth(2020)); //
