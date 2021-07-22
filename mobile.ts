export class Mobile
{
    //ATRIBUTOS
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    //CONSTRUCTOR
    constructor(    nombre:string,
                    modelo:string, )
    {
        this.name = nombre;
        this.model = modelo;
        this.trademark = null;
        this.sdSize = 8;
        this.color = "black";
        this.is5G = false;
        this.cameraNumber = 2;
        this.price = 200;
    }

    //GETTERS & SETTERS
    //Get----------------

    public getName():string
    {
        return this.name;
    }

    public getModel():string
    {
        return this.model;
    }

    public getTrademark():string
    {
        return this.trademark;
    }

    public getSdSize():number
    {
        return this.sdSize;
    }

    public getColor():string
    {
        return this.color;
    }

    public getIs5G():boolean
    {
        return this.is5G;
    }

    public getCameraNum():number
    {
        return this.cameraNumber;
    }

    public getPrice():number
    {
        return this.price;
    }

    //Set--------------------------
    public setName(nombre:string):void
    {
        this.name = nombre;
    }

    public setModel(modelo:string):void
    {
        this.model = modelo;
    }

    public setTrademark(marca:string):void
    {
        this.trademark = marca;
    }

    public setSdSize(tam:number):void
    {
        this.sdSize = tam;
    }

    public setColor(color:string):void
    {
        this.color = color;
    }

    public setIs5G(s:boolean):void
    {
        this.is5G = s;
    }

    public setCameraNum(num:number):void
    {
        this.cameraNumber = num;
    }

    public setPrice(precio:number):void
    {
        this.price = precio;
    }

    //METODOS

    public print():string
    {
        let imprim: string = "The characteristics of the mobile" 
                            + this.getName() + " " 
                            + this.getModel() + " are: \n";
        
        let misAtr = Object.getOwnPropertyNames(this);
        // console.log(misAtr);

        for(let atr in misAtr)
        {
            let letra = (misAtr[atr].charAt(0)).toLocaleUpperCase();
            
            let resto = misAtr[atr].substr(1);
            
            imprim += (letra + resto) + ": " + this[misAtr[atr]] + "\n";
        }

        return imprim;
    }
}