"use strict";
exports.__esModule = true;
exports.Person = void 0;
console.log("Tipos de datos en TypeScript");
var myNumber;
var mycadena;
var mysi;
var myarranumeros;
var myarraystring;
myNumber = 15;
mycadena = "Mi nuevo String";
mysi = true;
myarranumeros = [1, 2, 3, 4, 5, 6, 7];
myarraystring = ["a", "ab", "abc"];
console.log(myarraystring);
console.log(mycadena);
console.log(mysi);
console.log(myarranumeros);
//**** */
console.log("Clases en typescript");
var Direccion = /** @class */ (function () {
    //implementación de método de constructor.
    function Direccion(calle, numero, piso, puerta) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.puerta = puerta;
    }
    //Implementación de métodos setters y getters
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Direccion.prototype.pisoPar = function () {
        return this.piso % 2 == 0;
    };
    Direccion.prototype.showDireccion = function () {
        console.log(this.toString());
    };
    Direccion.prototype.toString = function () {
        return "Dirección: " + this.calle + ", Número: " + this.numero + ", Piso: " + this.piso + ", Puerta: " + this.puerta;
    };
    return Direccion;
}());
//ACCEDER A DATOS:
var miCalle = new Direccion("av.Mendez Alvaro", 26, 3, "BajoIzquierdo");
console.log(miCalle);
console.log(miCalle.pisoPar()); //comprueba el metodo
miCalle.setCalle("Nuevo nombre de calle"); // cambia el nombre de la calle 
console.log(miCalle);
var verNumero = miCalle.getNumero(); //accede al numero de la direcion
console.log(verNumero);
var verTodaCalle = miCalle.showDireccion();
console.log(verTodaCalle);
console.log("****************   RETOS:   ******************");
var Person = /** @class */ (function () {
    //Implementación del método constructor
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Metodos
    Person.prototype.setAdrees = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.printName = function () {
        console.log("El nombre de la persona es:" + this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age; //devuelve el año de nacimiento;
    };
    //devuelve todos los datos de persona
    Person.prototype.mostrarDatos = function () {
        return "Nombre: " + this.name + ", Edad: " + this.age + ", Dirección: " + this.address;
    };
    return Person;
}());
exports.Person = Person;
//  let persona1:Person=new Person("Tania Morales", 29,"calle pepito Mendez 19");
//  console.log(persona1);
