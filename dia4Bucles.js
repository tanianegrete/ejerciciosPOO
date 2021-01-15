//for

// var corredores = ['pedro', 'toño', 'maria', 'javier', 'pedro', 'toño', 'maria', 'javier']
// var i;
// var guarda = '';

// for (i = 0; i < 8; i++) { // (i = 0; i < 6; i++) 
//     guarda += corredores[i] + "\n";
// }

// console.log(guarda + [i]);



//**while

// var corredores = ['pedro', 'toño', 'maria', 'javier', 'pedro', 'toño', 'maria', 'javier']
// var i = 0; //se inicializa el indice
// var guarda = '';

// while (i < 5) { //condicional
//     guarda += corredores[i] + "\n";
//     i++; //avanza el indice
// }

// console.log(guarda + [i]);

//**sistema que muestren numeros del 1 al 10 */

var i;
var resultado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var operacion;
for (i = 0; i < 10; i++) {
    console.log(resultado[i]); //muestra todos los numeros

    if (resultado[i] % 2 == 0) //operacion para saber si el numero es entero
        console.log("es entero" + resultado[i])
    else {
        console.log("no es entero" + resultado[i])

    }
}