
import { Mobile } from './mobile';

export class MobileLibrary
{
    //ATRIBUTOS

    private nameL:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    //CONSTRUCTOR

    constructor(    nameL:string ="Una",
                    location:string = "Ninguno", 
                    mobiles:Mobile[] = [new Mobile ("Motorola","Moto")],
                    totalPrice:number = 100
                ){
        this.nameL = nameL;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = totalPrice;
    }

    //GETTERS & SETTERS
    // Get--------------
    public getName():string
    {
        return this.nameL;
    }

    public getLocation():string
    {
        return this.location;
    }

    public getMobiles():Mobile[]
    {
        return this.mobiles;
    }

    public getTotalPrice()
    {
        return this.totalPrice;
    }

    // Set---------------------

    public setName(nombre:string):void
    {
        this.nameL = nombre;
    }

    public setLocation(loc:string):void
    {
        this.location = loc;
    }

    public setMobiles(movs:Mobile[]):void
    {
        this.mobiles = movs;
    }

    public setTotalPrice(precioT:number)
    {
        this.totalPrice = precioT;
    }

    //totalPriceCalculation()-> salida un number 
    // -> Suma de todos los precios de la libreria 
    public totalPriceCalculation():number
    {
        let sumPrecios:number = 0;

        let itemMobile = this.mobiles;

       itemMobile.forEach(  function (it, indice)
                            {
                                sumPrecios += it.getPrice();
                            });

        return sumPrecios;
    }
}

