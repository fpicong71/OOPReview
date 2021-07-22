
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
        this.totalPrice = this.totalPriceCalculation();
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
    private totalPriceCalculation():number
    {
        let sumPrecios:number = 0;

        let itemMobile = this.mobiles;

       itemMobile.forEach(  function (it, indice)
                            {
                                sumPrecios += it.getPrice();
                            });

        return sumPrecios;
    }

    //printLibrary() -> Recorre todos los objetos del array
    //mostrando sus carracteristicas. Devuelve un string para imprimirlo
    public printLibrary():string
    {
        let impresion:string = "This are all my mobiles:\n";

        let movs:Mobile[] = this.getMobiles();

        for(let telf in movs)
        {
            impresion += movs[telf].print();
        }

        impresion += "\n Library Name: " + this.getName()
        impresion +=  "\n Library location: " + this.getLocation();
        impresion += "\n TotalPrice: " + this.getTotalPrice();

        return impresion;
    }
}

