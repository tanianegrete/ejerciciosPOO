//clases son lo que definen las caracteristicas, funciones o capacidades de un objeto ejemplo clase persona abstracta
//Objeto: instanciacion de una clase , un elemento particular de ese conjunto ejemplo: sera una persona en concreto
//Propiedad: es la caracteristica  al objeto ejemplo:color de ojos **que se definen en el constuctor de la clase**que se definen en el constuctor de la clase
//Metodo: accion o capacidad que tiene un objeto ejemplo:poder hablar (funciones accesibles para cada objeto de la clase que creemos) 
//Constructor:es una funcion de la clase que define todas las caracteristicas de los objetos "fabrica que los construye" (se comporta como una funcion)
//getters:(adquiridor) accedes a los atributos de una clase para una consulta
//setters: modificas el valor de los atributos de una clase


// esqueleto de clase "CLASE BASE" el no0mbre de la clase debe de tener la letra principal en mayuscula

class Poligono {
    constructor(alto, ancho) { //(alto, ancho) : parametros 
            this.alto = alto; //this.alto = atributos/propiedades (this se coloca al principio de las varibles: atributos es la manera en que un objeto tenga este atributo)
            this.ancho = ancho;
        }
        //getters  obtiene valor de los atributos de la clase
    get area() {
            return this.calcularArea(); //Devuelve un valor que el cuerpo del metodo ha calculado
        }
        //metodo
    calcularArea() { //NOMBRE DE METODO
        return this.alto * this.ancho; //accionessecuenciales que ocurre dentro del metodo (calcula el areade un poligono)
    }

}

//llamadaS a los objetos de las clases 
const cuadrado = new Poligono(10, 10); //new: nuevo objeto de clase Poligono.
console.log(cuadrado);
const valor = cuadrado.alto; //accede a valores del objeto= cuadrado.alto nombre del objeto . con el atributo que queremos observar
console.log("el alto es :" + valor);

var areaPoligono = cuadrado.calcularArea()
console.log("el area del cuadrado es :" + areaPoligono); // resultado del objeto cuadrado


const cuadrado2 = new Poligono(20, 10);
var areaCuadrado2 = cuadrado2.calcularArea();
console.log("el area del cuadrado2 es :" + areaCuadrado2); // resultado del objeto cuadrado


//////////***********GETTERS Y SETTERS */

class Punto {
    constructor(coordenadaX, coordenadaY) {
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
    }
    get X() {
        return this.coordenadaX;
    }
    get Y() {
        return this.coordenadaY;
    }

    getX() {
        return this.coordenadaX;
    }

    getY() {
        return this.coordenadaY;
    }


    set X(nuevaX) {
        this.coordenadaX = nuevaX
    }
    set Y(nuevaY) {
        this.coordenadaY = nuevaY
    }
    setX(nuevaX) {
        this.coordenadaX = nuevaX
    }
    setY(nuevaY) {
        this.coordenadaY = nuevaY
    }

}

//llamadas 
p1 = new Punto(10, 20);
console.log(p1.coordenadaX);
console.log(p1.X);
console.log(p1.getX());

console.log(p1.coordenadaY);
console.log(p1.Y);
console.log(p1.getY());
/// MODIFICACIONES DE COORDENADAS 
console.log("\n");

p1.coordenadaX = 11;
console.log(p1.coordenadaX);

p1.X = 12;
console.log(p1.coodenadaX);

p1.setX(13);
console.log(p1.coordenadaX);
console.log("\n");

p1.coordenadaY = 21;
console.log(p1.coordenadaY);

p1.Y = 22;
console.log(p1.coordenadaY);

p1.setY(23);
console.log(p1.coordenadaY);

//////////////////////////////////// RETOS
console.log("\n");
console.log("retos");

class Persona {
    constructor(nombre, altura, peso, colorPelo, anyoNacimiento, aficiones) { //() : parametros 
            this.nombre = nombre; //this.alto = atributos/propiedades (this se coloca al principio de las varibles: atributos es la manera en que un objeto tenga este atributo)
            this.altura = altura;
            this.peso = peso;
            this.colorPelo = colorPelo;
            this.anyoNacimiento = anyoNacimiento;
            this.aficiones = aficiones;
        }
        //getters  obtiene valor de los atributos de la clase
    get nombres() {
        return this.nombre; //Devuelve un valor que el cuerpo del metodo ha calculado
    }

    //setters modificaciones:
    set nombres(nuevoNombre) {
            this.nombre = nuevoNombre;
        }
        //metodo
    calcularIMC() { //NOMBRE DE METODO
        return this.altura * this.peso; //accionessecuenciales que ocurre dentro del metodo ()
    }
    calcularEdad() { //NOMBRE DE METODO
        return 2020 - this.anyoNacimiento;
    }

    mostrarTodos() { //NOMBRE DE METODO
        return ["El nombre de persona es:" + this.nombre + "la altura es:" +
            this.altura + "peso:" +
            this.peso + "color de pelo" +
            this.colorPelo + "año de nacimiento: " +
            this.anyoNacimiento
        ]; //sin comas 
    }

    mostrarAficiones() { //NOMBRE DE METODO
        return ["las aficiones son:" + this.aficiones]; //sin comas 
    }
}

//llamada a los objetos de la clase persona
const persona1 = new Persona("TANIA", 160, 60, "Morena", 1991, ["comer", "practicar codigo"]); //new: nuevo objeto de clase Poligono.
console.log(persona1); //se ve todos los datos de persona
const verPersona = persona1.nombre; //accede a valores del objeto= cuadrado.alto nombre del objeto . con el atributo que queremos observar
console.log("el nombre es :" + verPersona); //solo se ve el nombre del objeto persona

//cambios del objeto persona1

persona1.nombre = "tania";
console.log("Nombre modificado");
console.log(persona1.nombre);
persona1.colorPelo = "rojo";
console.log("Pelo modificado");
console.log(persona1.colorPelo);
console.log(persona1);

//ACCEDER A LOS METODOS:
console.log("El IMC es:  ");
console.log(persona1.calcularIMC());

console.log("La edad es:  ");
console.log(persona1.calcularEdad());

console.log("Los Datos de la persona son:  ");
console.log(persona1.mostrarTodos());

console.log("Las aficiones son:  ");
console.log(persona1.mostrarAficiones());


////////////////////////// clase que genera los datos e la clase anterior SUBCLASES
class Agenda extends Persona {


    printPersonas() { //NOMBRE DE METODO
        return this.nombre; //accionessecuenciales que ocurre dentro del metodo ()
    }

}

const agenda1 = new Agenda("NUEVOO NOMBRE", 120, 20, "blanco", 1999, ["sopa", "silla"]);

console.log(agenda1)