//identificador  o plabra reservada: this
//funcion basica

function pintar(elemento) {
    console.log(elemento);
}

let elemento = ("hola a todos");
console.log(elemento);

//funcion arrow

pintarElemento = (mensaje) => { console.log(mensaje) }

pintarElemento("adios a todos")

//templete string
let nombre1 = "javaScript";
let nombre2 = "asombroso";

console.log(`otra manera de dar resultado: ${nombre1} es ${nombre2}`);
console.log(" resultado 2: " + nombre1 + " es " + nombre2);

//Destructuring

var [a, b] = ["hello", "word"];
console.log(a);
console.log(b);

var persona = { name: "SOFIA", apellido: "Negrete" }
var { name, apellido } = persona;
console.log(persona);
console.log(name);

//valores por defecto

function sumaValores(v1, v2 = 1) {
    return v1 + v2
}

var totalS = sumaValores(4, 4);
console.log(totalS);

/////////////////////////////////////////// FUNCION DE PARAMETROS

imprimir = (parametros) => {
    if (parametros == null) {
        console.log("************NO tiene parametros INTRODUCE**********");
        console.log(parametros);
        return parametros
            // console.log(imprimir());
    } else {
        { console.log("TIENE PARAMETROS SON:   " + parametros) }
    }
}

let resultado = imprimir("hola que tal");


//////////////// MULTIPLICAR

function multiplicarV(v1, v2 = 0) {
    return v1 * v2
}
let resultadoM = multiplicarV(2, 4);
console.log("El resultado de la multiplicacion es:");
console.log(resultadoM);
//

pintarMultiplicacion = (n1, n2) => {
    console.log("El resultado de la segunda multiplicacion es:");
    console.log(n1 * n2)
}
pintarMultiplicacion(10, 10);

//
//let guardaValores = 0;
arraySumar = (sumaA = []) => {
    console.log(sumaA);
    let guardaValores = 0;
    for (var i = 0; i < sumaA.length; i++) {
        guardaValores = guardaValores + sumaA[i];
        console.log(guardaValores);
    }
    console.log(guardaValores);
}
arraySumar([1, 4, 5]);
///////

var contarASII = "ABC and java";
var caracterV = [];
console.log(contarASII.charCodeAt());

for (var i = 0; i < contarASII.length; i++) {
    caracterV.push(contarASII[i].charCodeAt())
    console.log(caracterV);
}
console.log(caracterV);

///

class Password {
    constructor(lengths = 8, password) {
            this.lengts = lengths;
            this.password = password;
        }
        //metodo
    isStrong() { //NOMBRE DE METODO CONTRASEÑA SEGURA
        console.log("ES MAYOR LA CONTRASEÑA" + this.password);
        console.log(this.password.length);
        var tamayoC = [];
        for (var i = 0; i < this.password.length; i++) {
            tamayoC.push(this.password[i].charCodeAt())
                //console.log(tamayoC);
        }

        return tamayoC; //accionessecuenciales que ocurre dentro del metodo ()
    }
    buenaContraseya() {
        if (this.password.length > 10) {
            console.log("es mayor que 10")
        } else {
            console.log("ingrese 10 a la contraseña caracteres")
        }
    }
    checkType() {
        this.password = String(this.password).trim();
        console.log(this.password)
        const regxs = {
            "lower": /^[a-z0-9 ]+$/,
            "upper": /^[A-Z0-9 ]+$/,
            "upperLower": /^[A-Za-z0-9 ]+$/
        }
        console.log(this.password)

        if (regxs.lower.test(this.password)) return 'solo es minuscula';
        console.log("pasa1");
        if (regxs.upper.test(this.password)) return 'solo mayusculas';
        console.log("pasa2");
        if (regxs.upperLower.test(this.password)) return 'combinación';
        console.log("pasa3");
        return this.password + "  onononononon";
    }
    generatePass() { //NOMBRE DE METODO
        return this.altura * this.peso; //accionessecuenciales que ocurre dentro del metodo ()
    }

}
let contraseya = new Password(8, "Esta es lA contraseña");

console.log(contraseya.isStrong()); //accede al metodo

controladorPassword = contraseya.buenaContraseya();
//console.log(contraseya.buenaContraseya());


//llamando al metodo
console.log(contraseya.checkType())

console.log("pruebas*****************************************************************");
/**
 * checkType
 * Comprueba si el texto dado {words} esta formado
 * unicamente por número, espacios y letras minisucalas, mayusculas o ambas
 * respectivamente.
 * retorna 0 - solo minusuclas
 *         1 - solo mayusculas
 *         2 - Combinación de mayusculas y minusuclas
 *         -1 - Si no cumple con ninguna de las anteriores.
 */
// function checkType(words) {
//     words = String(words).trim();
//     const regxs = {
//         "lower": /^[a-z0-9 ]+$/,
//         "upper": /^[A-Z0-9 ]+$/,
//         "upperLower": /^[A-Za-z0-9 ]+$/
//     }

//     if (regxs.lower.test(words)) return 'solo es minuscula';
//     if (regxs.upper.test(words)) return 'solo mayusculas';
//     if (regxs.upperLower.test(words)) return 'combinación';
//     return -1;
// }

// let checkTipoLetra = checkType("es solo minuscula");
// console.log(checkTipoLetra)