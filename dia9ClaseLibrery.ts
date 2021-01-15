 import {Book} from "./dia9ClaseBooks"
 
export class Library{
     //declaracion de atributos y propiedades
     public books:Book[];
     private address:string;
     private manager:string;
     constructor( books:Book[],address:string,manager:string){
         this.books=books;
         this.address=address;
         this.manager=manager;
     }
 //metodos publicos
     public getAdress():string{
         return this.address;
     }

     public getManeger():string{
         return this.manager;
     }

     public setAdrees(addres:string){
         this.address=addres;
     }

     public setManager(manager:string){
         this.manager=manager;
     }


 //metodos
    todosLibros():string{
        let resultadoLibros="";
        for(let i =0; i<this.books.length; i++){
          resultadoLibros+= this.books[i].toString()  + "\n";
        }
        return resultadoLibros;
    }

    getNumberOfBooks():number{ //devuelve el numero de cuantos libros hay.
        return this.books.length;
    }

    findByAutor(author:string):Book[]{
        let resultadoAutor;
        for(let i =0; i<this.books.length; i++) {
             if(this.books[i].getAutor()==author){
                resultadoAutor=this.books[i] + "\n"+"Libro encontrado";
             }

        }
        return  resultadoAutor;
        
    }

 }

 let libro1:Book= new Book("100 años de soledad",158,"Gabriel","Gabriel Marquez","Porrua");
 //console.log (libro1); 

 let libro2:Book= new Book("La estrella de Lisa",58,"Gabrielita","TANIA MORALES","Editores");
 //console.log (libro2); 

 let libro3:Book= new Book("La miseria del torpe",0.01,"Charlito","Soto Godinez","Delfines");
 //console.log (libro3); 



 let libreria1:Library=new Library([libro1,libro2,libro3],"calle Paltatitla","taniaMorales"); //clase al ultimo de agrgan estos datos ;
// console.log(libreria1);

 let comprobacionMetodo= libreria1.todosLibros();
// console.log(comprobacionMetodo);

 let cuantosLibros=libreria1.getNumberOfBooks();
 //console.log(cuantosLibros);

 let esAutorIgual= libreria1.findByAutor("TANIA MORALES");
 console.log("es el autor**********************");
 console.log(esAutorIgual);