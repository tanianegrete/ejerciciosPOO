var persona = {
    "nombre": "ANA",
    "apellido": "morales",
    "anyoNacimiento": 1998,
    "aficiones": ["COMER", "BEBER"],
    "dni": {
        "fechaExpedicion": "10 Diciembre 2021",
        "lugarDeNacimiento": "Mexico",
        "colorPelo": "Negro",

    }
}

var persona2 = {
    "nombre": "TANA",
    "apellido": "morales",
    "anyoNacimiento": 1991,
    "aficiones": ["ejercicio", "programacion"],
    "dni": {
        "fechaExpedicion": "29 diciembre 2020",
        "lugarDeNacimiento": "Mexico",
        "colorPelo": "Castaño",

    }
}

var persona3 = {
    "nombre": "pepito",
    "apellido": "negrete",
    "anyoNacimiento": 1988,
    "aficiones": ["COMER", "BEBER"],
    "dni": {
        "fechaExpedicion": "10 Diciembre 2021",
        "lugarDeNacimiento": "Mexico",
        "colorPelo": "Rojo",

    }
}

var persona4 = {
    "nombre": "BANANA",
    "apellido": "mora",
    "anyoNacimiento": 2020,
    "aficiones": ["sercomida", "gritar"],
    "dni": {
        "fechaExpedicion": "10 noviembre 1996",
        "lugarDeNacimiento": "eua",
        "colorPelo": "verde",

    }
}

var arrayPersonas = [persona, persona2, persona3, persona4]
    //console.log(arrayPersonas[0].dni.colorPelo);

// var resultado = "";
// for (i = 0; i < arrayPersonas.length; i++) {
//     resultado += arrayPersonas[i]
//     console.log(arrayPersonas[i]);

// }

// var resultado = "";
// for (i = 0; i < arrayPersonas.length; i++) {
//     resultado += arrayPersonas[i]
//         //console.log(arrayPersonas[i]);
//     if (arrayPersonas[i].anyoNacimiento < 2000 || arrayPersonas.anyoNacimiento > 1878) {
//         console.log("*Tu edad esta entre 20 y 40 años de edad :")
//         console.log(arrayPersonas[i].nombre)
//     } else {
//         console.log("*Tu edad es menor de 20")
//         console.log(arrayPersonas[i].nombre)
//     }

// }



//**AÑADIR JUGAR PLAY A TODOS LOS ELEMENTOS DEL ARRAY */


// for (i = 0; i < arrayPersonas.length; i++) {
//     arrayPersonas[i].aficiones.push("jugar play")
//     console.log(arrayPersonas[i]);

// }

//**dado un array de numeros, buscar los numeros multiplos de 2 sentencia while */

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var resultado = "";
// var i = 0;

// while (i < numeros.length) {
//     resultado += numeros[i];
//     console.log(resultado[i] * 2);
//     i++;
// }

//suma de 100 numeros
// var i;
// var suma = 0;
// for (i = 0; i < 10; i++) {
//     suma = suma + i;
//     console.log([i]);

//     console.log(suma);

// }

//**** */

// var arrayNombres = ["ana", "laura", "morales", "negrete", "pepe"];
// var i;
// for (i = 0; i < arrayNombres.length; i++) {
//     if (arrayNombres[i] === "pepe") {
//         console.log("hay pepe")
//         console.log([i])
//             // } else {
//             //     console.log("no hay pepe")
//     }

// }

//*** */

//**numeros aleatorios */
// var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lista = lista.sort(function() { return Math.random() - 0.5 });
// console.log(lista);


//**numeros que se repiten */
// var arr = []; 
// for (var i = 0, t = 12; i < t; i++) {
//     arr.push(Math.round(Math.random() * t))
// }
// console.log(arr);


//** dos vectores con numeros aleatorios entre el 0 y 20 */

// var myArray = [];
// var myArray2 = [];
// var matriz = [myArray, myArray2]

// for (var i = 0; i < 5; i++) {
//     myArray.push(Math.floor(Math.random() * (20 - 0)) + 0);
//     // console.log(myArray);
//     // console.log("sipasa222");

//     if (myArray2 < 5) {
//         for (var n = 0; n < 5; n++) {
//             myArray2.push(Math.floor(Math.random() * (20 - 0)) + 0);
//             //console.log(myArray2);
//             // console.log("si pasa");
//         }
//     }

//     // console.log(matriz);
// }
// console.log(matriz);

//**suma de dos vectores */



var myArray = [];
var myArray2 = [];
var matriz = [myArray, myArray2];
var suma = 0;
var suma2 = 0;

for (var i = 0; i < 5; i++) {
    myArray.push(Math.floor(Math.random() * (20 - 0)) + 0);
    suma = suma + myArray[i];
    //console.log(suma);
    // console.log("sipasa222");

    if (myArray2 < 5) {
        for (var n = 0; n < 5; n++) {
            myArray2.push(Math.floor(Math.random() * (20 - 0)) + 0);
            suma2 = suma2 + myArray2[n];
            console.log(suma2);
            // console.log("si pasa");
        }
    }

    // console.log(matriz);
}
console.log(matriz);
console.log(suma);
console.log(suma2);
var totales = suma + suma2;
console.log("****** La suma total es de:******");
console.log(totales);