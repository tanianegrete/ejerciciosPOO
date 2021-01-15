"use strict";
exports.__esModule = true;
var dia9ClaseVector_1 = require("./dia9ClaseVector");
var prueba = new dia9ClaseVector_1.Vector(6, 6);
console.log(prueba);
var vector2 = new dia9ClaseVector_1.Vector(6, 6);
console.log(vector2);
console.log(prueba.add(vector2)); //suma
console.log(prueba.subs(vector2)); //resta
console.log(prueba.multi(vector2)); //multiplicacion
console.log(prueba.multiVector(2));
