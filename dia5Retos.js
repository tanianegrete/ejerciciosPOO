var espaya = Boolean = false;

var precio = 2000;

if (espaya === true) {
    if (precio >= 2000) {
        var operacion = precio * 0.16;
        var total = precio - operacion;
        console.log("Tu descuento es de: ");
        console.log(total);
    } else {
        var operacion = precio * 0.10;
        var total = precio - operacion;
        console.log(("Tu descuento  es de: "));
        console.log(total);
    }
} else {
    if (precio >= 2000) {
        var operacion = precio * 0.26;
        var total = precio - operacion;
        //  console.log("Tu descuento por estar fuera de españa es de: ");
        // console.log(total);
    } else {
        var operacion = precio * 0.20;
        var total = precio - operacion;
        //console.log(("Tu descuento por estar fuera de españa es de: "));
        // console.log(total);
    }

}

//console.log(espaya)

//**SUMA DE LOS PRIMEROS  100 NUMEROS AL CUADRADO

var numeroAcombertir = 7;

var resultado = Math.pow(i, 2);
//console.log(resultado);

var arrayNumeros = []
var suma = 0;

for (var i = 1; i < 4; i++) {
    var resultado = Math.pow(i, 2);
    console.log([i]);
    console.log(resultado);
    suma = suma + resultado;

}
console.log("la suma es:");
console.log(suma);
// console.log(arrayNumeros);




///*** */

var libros = ["ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "origen"];

var caracter = libros[4].length; //EL LIBRO EN LA POSICION 4 Y TAMAÑO  EN NUMERO DE LETRAS ENTRE CORCHETES. 
console.log("El numero de letras son:")
console.log([caracter])

console.log(libros.length);

//**el nombre que es mas largo */
let totales = [];
for (var libro of libros) {
    totales.push(libro.length);
}

let maximo = Math.max.apply(null, totales);

for (let elemento of libros) {
    if (elemento.length === maximo) {
        console.log("La palabra mas larga es:");
        console.log(elemento);
    }
}


//*CREAR UNA MATRIZ VECTOR DE VECTORES.

// var matrizDeMatriz = [
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     []
// ]

// console.log(matrizDeMatriz)
// console.log(matrizDeMatriz.length)

// for (var i = 0; i < matrizDeMatriz.length; i++) {


// }

var valores = []
var x = (Math.floor(Math.random() * (20 - 0)) + 0)
for (x = 0; x < 10; x++) {
    valores.push([
        3 ** x,
        2 * x ** 2,
        1 * x ** 3,
        4 * x ** 4,
        5 * x ** 5,
        6 * x ** 6,
        7 * x ** 7,
        8 * x ** 8,
        9 * x ** 9,
        10 * x ** 10,

    ])
}
console.table(valores)