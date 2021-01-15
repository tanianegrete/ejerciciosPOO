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

var mensaje = String("")

// if (arrayPersonas[0].dni.colorPelo == "Negro") {
//     console.log(arrayPersonas[0].nombre);
//     mensaje = "tiene el pelo de color negro"

// } else if (arrayPersonas[1].dni.colorPelo == "Negro") {
//     console.log(arrayPersonas[1].nombre);
//     mensaje = "tiene el pelo de color negro"

// } else if (arrayPersonas[2].dni.colorPelo == "Negro") {
//     console.log(arrayPersonas[2].nombre);
//     mensaje = "tiene el pelo de color negro"

// } else if (arrayPersonas[3].dni.colorPelo == "Negro") {
//     console.log(arrayPersonas[3].nombre);
//     mensaje = "tiene el pelo de color negro"


// } else {
//     mensaje = "es de otro color"
// }

// console.log(mensaje);

//** */

if (arrayPersonas[0].anyoNacimiento < 1990) {
    console.log(arrayPersonas[0].anyoNacimiento);
    mensaje = ""

} else if (arrayPersonas[1].anyoNacimiento < 1990) {
    console.log(arrayPersonas[1].anyoNacimiento);
    mensaje = ""

} else if (arrayPersonas[2].anyoNacimiento < 1990) {
    console.log(arrayPersonas[2].anyoNacimiento);
    mensaje = ""

} else if (arrayPersonas[3].anyoNacimiento < 1990) {
    console.log(arrayPersonas[3].anyoNacimiento);
    mensaje = ""


} else {
    mensaje = "es de otro color"
}

console.log(mensaje);