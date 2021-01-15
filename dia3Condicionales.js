//if, else if, else
var hora = Number();
var mensaje = String("");

if (hora < 12) {
    mensaje = "Buenos Dias"
} else if (hora < 20) {
    mensaje = "Buenas tardes"
} else {
    mensaje = "Buenas noches"
}

console.log(mensaje);

//*switch/case
var day = String("");
switch (new Date().getDate()) {
    case 0:
        day = "lunes";
        break;
    case 1:
        day = "martes";
        break;
    case 26:
        day = "miercoles";
        break;
    case 29:
        day = "jueves";
        break;
    case 4:
        day = "viernes";
        break;
    case 5:
        day = "sabado";
        break;
    case 6:
        day = "domingo";
        break;

}

console.log(day)

//**OPERADORES LOGICOS */

var ram = Number(16);
var disco = Number(512);
var tipoDisco = String("M2");

if (ram == 16 && (disco > 256 || (disco > 128 && tipoDisco == 'M2'))) {
    console.log("cumple con mis requisitos");
} else {
    console.log("no cumple");
}

//*** */

var color = String("rojo");
var mns = String("")

if (color == "verde") {
    mns = "adelante";
    // console.log("Cruza");
} else if (color == "rojo") {
    mns = "alto"
} else {
    mns = "oprecaucion"
}

console.log(mns);