import{Vector}from "./dia9ClaseVector";

let prueba = new Vector (6,6);
console.log(prueba);

let vector2= new Vector(6,6);
console.log(vector2);
console.log(prueba.add(vector2));//suma
console.log(prueba.subs(vector2));//resta
console.log(prueba.multi(vector2));//multiplicacion
console.log(prueba.multiVector(2));
