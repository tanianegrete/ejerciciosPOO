
export class Vector{
    //Declaracion de atributos
    private elemento:number[];
    
    //Implementacion del constructor 
    
    constructor (n:number,k:number){

    this.elemento = new Array//declaracion  del array
      for(let i=0; i<n;i++){
          this.elemento[i]= Math.round(Math.random() * k)
      }
     
    }


    //metodos
     public print(){ //imprime por consola la matriz
      for(let i=0; i=this.elemento.length; i++){
          let numerosMatriz = this.elemento[i];
          console.log(numerosMatriz);
      }
    }

    public add(v1:Vector):Vector{ //realiza la suma de elementos con v1

        let suma=new Vector(this.elemento.length,2);
       
        for(let i=0; i<this.elemento.length;i++){
           suma.elemento[i] =this.elemento[i] + v1.elemento[i];
        }
        return suma;
    }

    public subs(v1:Vector):Vector{ //realiza la resta de elementos con v1

        let resta=new Vector(this.elemento.length,1);
       
        for(let i=0; i<this.elemento.length;i++){
           resta.elemento[i] =this.elemento[i] - v1.elemento[i];
        }
        return resta;
    }

    public multi(v1:Vector):Vector{ //realiza la multiplicacion de elementos con v1

        let por=new Vector(this.elemento.length,1);
       
        for(let i=0; i<this.elemento.length;i++){
          por.elemento[i] =this.elemento[i] * v1.elemento[i];
        }
        return por;
    }
    public multiVector(n:number):Vector{ //realiza la multiplicacion de elementos y n

        let porV=new Vector(this.elemento.length,1);
       
        for(let i=0; i<this.elemento.length;i++){
          porV.elemento[i] =this.elemento[i] * n;
        }
        return porV;
    }



}

// let prueba = new Vector (6,6);
// console.log(prueba);

// let vector2= new Vector(6,6);
// //console.log(vector2);
// //console.log(prueba.add(vector2));//suma
// //console.log(prueba.subs(vector2));//resta
// //console.log(prueba.multi(vector2));//multiplicacion
// console.log(prueba.multiVector(2));
