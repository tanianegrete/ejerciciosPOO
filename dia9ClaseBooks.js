"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    //Constructor
    function Book(title, nPages, issn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    //Metodos
    Book.prototype.gettitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIssn = function () {
        return this.issn;
    };
    Book.prototype.getAutor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.settitle = function (title) {
        this.title = title;
    };
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setIssn = function (issn) {
        this.issn = issn;
    };
    Book.prototype.setAutor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    //Metodos
    Book.prototype.toString = function () {
        return "El nombre del libro es: " + this.title + "\n" + "Numero de paginas:" + this.nPages + "\n" + "Escritor:" + this.issn + "\n" + "Autor: " + this.author + "\n" + "Editorial: " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
var libro1 = new Book("100 años de soledad", 158, "Gabriel", "Gabriel Marquez", "Porrua");
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
