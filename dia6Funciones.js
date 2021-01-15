var borde = Number(3);

function volumenCubo(borde) {
    return borde * borde * borde;
}

//llamada de funcion puede ser de las dos maneras
var resultado = volumenCubo(6);
var resultado = volumenCubo(borde);

console.log(resultado);


function descuento(precio, descuento) {
    var descuentoDinero = precio * (descuento / 100);
    return precio - descuentoDinero;
}

//llamada de funcion
var total = descuento(164, 15);
console.log(total);


//funcion que cuanta elñ numero de caracteres de un parrafo
var textoLorem = String("Lorem ipsum "); //cuentan los espacio como lugar

function numeroCaracteres(texto) {
    return texto.length;
}

//llamada de funcion
var tamayoTexto = numeroCaracteres(textoLorem)
console.log(tamayoTexto);


//funciones de operaciones:
var numeroA = 10;
var numeroB = 10;

function suma(numeroA, numeroB) {
    return numeroA + numeroB;
}

var resultadoSuma = suma(numeroA, numeroB);
console.log("LA SUMA ES:" + resultadoSuma);


var numeroR1 = Number(15);
var numeroR2 = Number(5);

function restar(numeroR1, numeroR2) {
    return numeroR1 - numeroR2;
}

var resultadoResta = restar(numeroR1, numeroR2);
console.log("LA RESTA ES:" + resultadoResta);


////////////////////////////////// vector de n numeros aletorios y que van de 0 a m
var suma = 0;
var myArray = [];
for (var i = 0; i < 5; i++) {
    myArray.push(Math.floor(Math.random() * (20 - 0)) + 0);
    //suma = suma + myArray[i];
    // console.log(myArray);

}
//console.log(myArray);
var vectorAletorio1 = [];
var n = Number(5); //cantidad de numeros aleatotios
var m = Number(10); //numero mayor del array
function vectorAleatorios1(n, m) {
    for (var i = 0; i < n; i++) {
        console.log("el valor de letra n es:" + n);
        console.log("el valor de letra m es:" + m);
        vectorAletorio1.push(Math.floor(Math.random() * (m - 0)) + 0);
        //console.log(vectorAletorio);
        // console.log([i]);
    }
    return vectorAletorio1;

}

//llamada a funcion:
var resultadoVectores = vectorAleatorios1(n, m);
console.log("resultadoVectores 1 es :");
console.log(resultadoVectores);

/////
var vectorAletorio2 = [];
var n = Number(5); //cantidad de numeros aleatotios
var m = Number(10); //numero mayor del array
function vectorAleatorios2(n, m) {
    for (var i = 0; i < n; i++) {
        console.log("el valor de letra n es del vector2:" + n);
        console.log("el valor de letra m es del vector2:" + m);
        vectorAletorio2.push(Math.floor(Math.random() * (m - 0)) + 0);
        //console.log(vectorAletorio);
        // console.log([i]);
    }
    return vectorAletorio2;

}

// //llamada a funcion:
var resultadoVectores2 = vectorAleatorios2(n, m);
console.log("resultadoVectores 2 es:");
console.log(resultadoVectores2);



/////////




var array3 = [];
console.log("pasapasa222")
for (var i = 0; i < vectorAletorio2.length; i++) {
    console.log("pasapasa33")
    array3.push(vectorAletorio1[i] + vectorAletorio2[i]);
    console.log(vectorAletorio1[i]);
    console.log("pasapasa111")
}

for (var i = 0; i < array3.length; i++) {
    console.log("Resultado " + i + " : " + array3[i]);

}
console.log("Resultado total ");
console.log(array3);
console.log(vectorAletorio1);
console.log(vectorAletorio2);