console.log("Tipos de datos en TypeScript");

let myNumber: number;
let mycadena: string;
let mysi: boolean;
let myarranumeros: number[];
let myarraystring: string[];

myNumber=15;
mycadena="Mi nuevo String";
mysi= true;
myarranumeros=[1,2,3,4,5,6,7];
myarraystring=["a","ab","abc"];

console.log(myarraystring)
console.log(mycadena)
console.log(mysi)
console.log(myarranumeros);


//**** */
console.log("Clases en typescript");

class Direccion {
 //declaración de atributos y propiedades.
    private calle: string;
    private numero: number;
    private piso: number;
    private puerta:string;
//implementación de método de constructor.
constructor(calle:string,numero:number,piso:number,puerta:string){
    this.calle=calle;
    this.numero= numero;
    this.piso=piso;
    this.puerta=puerta;
}
//Implementación de métodos setters y getters
 public getCalle():string{
    return this.calle;
 }

 public getNumero():number{
   return this.numero;
 } 
 
 public setCalle(calle:string){
     this.calle=calle;
 }

 public setNumero(numero:number){
    this.numero=numero;
 }

 public pisoPar():boolean{
     return this.piso %2==0;
 }

 public showDireccion(){
     console.log(this.toString());
 }

 public toString():String{
     return "Dirección: "+this.calle+", Número: "+this.numero+", Piso: "+this.piso+", Puerta: "+this.puerta;
 }

}

//ACCEDER A DATOS:

let miCalle:Direccion = new Direccion ("av.Mendez Alvaro",26,3,"BajoIzquierdo");
console.log(miCalle);

console.log(miCalle.pisoPar());//comprueba el metodo

miCalle.setCalle("Nuevo nombre de calle");// cambia el nombre de la calle 
console.log(miCalle);

let verNumero= miCalle.getNumero();//accede al numero de la direcion
console.log(verNumero);

 let verTodaCalle=miCalle.showDireccion();
 console.log(verTodaCalle);

 console.log("****************   RETOS:   ******************");

  export class Person{
 //Declaración de atributos
     public name:string;
     public age:number;
     private address:string;
 //Implementación del método constructor
 constructor(name:string,age:number,address:string){
     this.name=name;
     this.age=age;
     this.address=address;
 }

 //Metodos
    public setAdrees(address:string){ //modifica el atributo address: dirección
      this.address=address;
    }
   
    public getAddress():string{ //devuelve la direccion ya que no es un atributo publico
        return this.address;
   
    }

    public printName(){
        console.log("El nombre de la persona es:"+ this.name)
    }
    public yearOfBirth(currentYear:number):number{  //recibe el año actual
   
       return currentYear-this.age; //devuelve el año de nacimiento;
    }

    //devuelve todos los datos de persona
    public mostrarDatos():string{
     return "Nombre: "+this.name+", Edad: "+ this.age+ ", Dirección: "+this.address;
    }
   
    
   
 }

//  let persona1:Person=new Person("Tania Morales", 29,"calle pepito Mendez 19");
//  console.log(persona1);
