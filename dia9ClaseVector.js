"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    //Implementacion del constructor 
    function Vector(n, k) {
        this.elemento = new Array; //declaracion  del array
        for (var i = 0; i < n; i++) {
            this.elemento[i] = Math.round(Math.random() * k);
        }
    }
    //metodos
    Vector.prototype.print = function () {
        for (var i = 0; i = this.elemento.length; i++) {
            var numerosMatriz = this.elemento[i];
            console.log(numerosMatriz);
        }
    };
    Vector.prototype.add = function (v1) {
        var suma = new Vector(this.elemento.length, 2);
        for (var i = 0; i < this.elemento.length; i++) {
            suma.elemento[i] = this.elemento[i] + v1.elemento[i];
        }
        return suma;
    };
    Vector.prototype.subs = function (v1) {
        var resta = new Vector(this.elemento.length, 1);
        for (var i = 0; i < this.elemento.length; i++) {
            resta.elemento[i] = this.elemento[i] - v1.elemento[i];
        }
        return resta;
    };
    Vector.prototype.multi = function (v1) {
        var por = new Vector(this.elemento.length, 1);
        for (var i = 0; i < this.elemento.length; i++) {
            por.elemento[i] = this.elemento[i] * v1.elemento[i];
        }
        return por;
    };
    Vector.prototype.multiVector = function (n) {
        var porV = new Vector(this.elemento.length, 1);
        for (var i = 0; i < this.elemento.length; i++) {
            porV.elemento[i] = this.elemento[i] * n;
        }
        return porV;
    };
    return Vector;
}());
exports.Vector = Vector;
// let prueba = new Vector (6,6);
// console.log(prueba);
// let vector2= new Vector(6,6);
// //console.log(vector2);
// //console.log(prueba.add(vector2));//suma
// //console.log(prueba.subs(vector2));//resta
// //console.log(prueba.multi(vector2));//multiplicacion
// console.log(prueba.multiVector(2));
