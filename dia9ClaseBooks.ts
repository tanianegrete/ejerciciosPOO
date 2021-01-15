 export class Book{

  //Declaración de atributos y propiedades  
    private title:string;
    private nPages:number;
    private issn:string;
    private author:string;
    private editorial:string;

  //Constructor
  constructor(title:string,nPages:number, issn:string, author:string, editorial:string){
      this.title=title;
      this.nPages=nPages;
      this.issn=issn;
      this.author=author;
      this.editorial=editorial;
  }

  //Metodos
      public gettitle():string{
          return this.title;
      } 

      public getnPages():number{
          return this.nPages;
      }

      public getIssn():string{
          return this.issn;
      }

      public getAutor():String{
          return this.author;
      }

      public getEditorial():string{
          return this.editorial;
      }

      public settitle(title:string){
         this.title=title;
      }

      public setnPages(nPages:number){
          this.nPages=nPages;
      }

      public setIssn(issn:string){
          this.issn=issn;
      }

      public setAutor(author:string){
          this.author=author;
      }

      public setEditorial(editorial:string){
          this.editorial=editorial;
      }

      //Metodos

      public toString():string{ //devuelve toda la informacion del libro.

          return "El nombre del libro es: "+this.title+"\n"+"Numero de paginas:"+ this.nPages +"\n"+"Escritor:"+ this.issn +"\n"+"Autor: "+this.author+"\n"+"Editorial: " + this.editorial;
      }
}

let libro1:Book= new Book("100 años de soledad",158,"Gabriel","Gabriel Marquez","Porrua");
console.log (libro1);

let metodoComprobar= libro1.toString();  //prueba enl metodo de dar valores
console.log(metodoComprobar);

libro1.setEditorial("Cambio de editorial");
let editonialNueva= libro1.getEditorial();
console.log(editonialNueva);

libro1.setAutor("Cambio de autor");
let autorCambio= libro1.getAutor();
console.log(autorCambio);

libro1.setIssn("Cambio de Issn");
let issnCambio= libro1.getIssn();
console.log(issnCambio);

libro1.setnPages(123456);
let cambioPages= libro1.getnPages();
console.log("cambio de paginas"+cambioPages);
