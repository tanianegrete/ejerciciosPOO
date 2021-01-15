var persona = {
    "nombre": "Tania",
    "edad": 29,
    "esMujuer": true,
    "aficiones": ["ejercicio", "pintar", "computacion"],
    "dni": {
        "numero": 722668001,
        "fechaExpedicion": "2 DE fEBRERO 2021"
    }
}

// console.log(persona.dni.fechaExpedicion); //devueleve los datos de fecha de expedicion
// console.log(persona.aficiones);
// console.log("Datos de DNI: \n");
// console.log(persona.dni); //datos de todo el dni
// console.log(persona.aficiones[1]); //**mostrar solo la segunda afición */
// console.log(persona.nombre); //muestra su nombre

var persona2 = {
    "nombre": "Ana",
    "edad": 32,
    "esMujuer": true,
    "aficiones": ["trabajar", "bailar", "leer"],
    "dni": {
        "numero": 001,
        "fechaExpedicion": "22 DE fEBRERO 2021"
    }
}

var persona3 = {
    "nombre": "Fabis",
    "edad": 35,
    "esMujuer": true,
    "aficiones": ["leer", "gritar", "dormir"],
    "dni": {
        "numero": 002,
        "fechaExpedicion": "2 DE enero 2021"
    }
}

var persona4 = {
    "nombre": "Yeye",
    "edad": 39,
    "esMujuer": true,
    "aficiones": ["cocinar", "dormir", "tv"],
    "dni": {
        "numero": 003,
        "fechaExpedicion": "10 Diciembre 2021"
    }
}

var arrayPersonas = [persona, persona2, persona3, persona4]; //array de personas
//console.log(arrayPersonas); //datos de todas las personas
//console.log(arrayPersonas[3].nombre) //nombre de la persona del array en la pocision 3 que setia la 4ta persona

console.log(arrayPersonas[0].edad); //edad de personas