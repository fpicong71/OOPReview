export class Mobile
{
    //ATRIBUTOS
    name:string;
    model:string;
    trademark:string;
    sdSize:number;
    color:string;
    is5G:boolean;
    cameraNumber:number;
    price:number;

    //CONSTRUCTOR
    constructor(    nombre:string,
                    modelo:string,
                    trademark:string = null,
                    sdSize:number = 8,
                    color:string = "black",
                    is5G:boolean = false,
                    cameraNumber:number = 2,
                    price:number = 200
               ){

    }

    //METODO 
    public print():void
    {
        let atributos = Object.getOwnPropertyNames(this);

        for(let atr in atributos)
        {  
            console.log(atributos[atr] + ": " + this[atributos[atr]]);
        }
    }

}