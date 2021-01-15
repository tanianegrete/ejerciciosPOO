"use strict";
exports.__esModule = true;
exports.Library = void 0;
var dia9ClaseBooks_1 = require("./dia9ClaseBooks");
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //metodos publicos
    Library.prototype.getAdress = function () {
        return this.address;
    };
    Library.prototype.getManeger = function () {
        return this.manager;
    };
    Library.prototype.setAdrees = function (addres) {
        this.address = addres;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    //metodos
    Library.prototype.todosLibros = function () {
        var resultadoLibros = "";
        for (var i = 0; i < this.books.length; i++) {
            resultadoLibros += this.books[i].toString() + "\n";
        }
        return resultadoLibros;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAutor = function (author) {
        var resultadoAutor;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAutor() == author) {
                resultadoAutor = this.books[i] + "\n" + "Libro encontrado";
            }
        }
        return resultadoAutor;
    };
    return Library;
}());
exports.Library = Library;
var libro1 = new dia9ClaseBooks_1.Book("100 años de soledad", 158, "Gabriel", "Gabriel Marquez", "Porrua");
//console.log (libro1); 
var libro2 = new dia9ClaseBooks_1.Book("La estrella de Lisa", 58, "Gabrielita", "TANIA MORALES", "Editores");
//console.log (libro2); 
var libro3 = new dia9ClaseBooks_1.Book("La miseria del torpe", 0.01, "Charlito", "Soto Godinez", "Delfines");
//console.log (libro3); 
var libreria1 = new Library([libro1, libro2, libro3], "calle Paltatitla", "taniaMorales"); //clase al ultimo de agrgan estos datos ;
// console.log(libreria1);
var comprobacionMetodo = libreria1.todosLibros();
// console.log(comprobacionMetodo);
var cuantosLibros = libreria1.getNumberOfBooks();
//console.log(cuantosLibros);
var esAutorIgual = libreria1.findByAutor("TANIA MORALES");
console.log("es el autor**********************");
console.log(esAutorIgual);
