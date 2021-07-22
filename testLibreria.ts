import { Mobile } from './mobile';
import { MobileLibrary } from './mobileLibrary';



let movil1 = new Mobile("Nokia", "3210");
movil1.setTrademark( "Nokia" );
movil1.setSdSize(12);
movil1.setColor("rojo");
movil1.setIs5G(false);
movil1.setCameraNum(2);
movil1.setPrice(250);

let movil2 = new Mobile("Iphone","3G");
movil2.setTrademark("Apple");
movil2.setSdSize(24);
movil2.setColor("plata");
movil2.setIs5G(false);
movil2.setCameraNum(4);
movil2.setPrice(650);

let movil3 = new Mobile("Samsung","Galaxy 10");
movil3.setTrademark("Samsung");
movil3.setSdSize(48);
movil3.setColor("rosa");
movil3.setIs5G(true);
movil3.setCameraNum(4);
movil3.setPrice(720);

let movil4 = new Mobile("Poco","F2 Pro");
movil4.setTrademark("Xiaomi");
movil4.setSdSize(64);
movil4.setColor("verde");
movil4.setIs5G(true);
movil4.setCameraNum(4);
movil4.setPrice(359);



let misTelef:Mobile[] = [movil1,movil2,movil3,movil4];

//Creo libreria
let miLibrery = 
        new MobileLibrary ();

//Pruebo get
console.log("\nCompruebo Get***************\n");

console.log("Nombre libreria-> " + miLibrery.getName());
console.log("Localizacion-> " + miLibrery.getLocation());
let arrM = miLibrery.getMobiles();
for(let m in arrM)
{
    console.log(arrM[m].print());
    
}
console.log("Precio-> " + miLibrery.getTotalPrice());

//Pruebo set
console.log("\nCompruebo Set***************\n");
miLibrery.setName("mistelefonos");
miLibrery.setLocation("Málaga");
miLibrery.setMobiles(misTelef);
// console.log(miLibrery.getMobiles());

miLibrery.setTotalPrice(1000);
console.log("Nombre libreria-> " + miLibrery.getName());
console.log("Localizacion-> " + miLibrery.getLocation());
;
for(let m in miLibrery.getMobiles())
{
    console.log(miLibrery.getMobiles()[m].print());
    
}
console.log("Precio-> " + miLibrery.getTotalPrice());

//Pruebo TotalPriceCalculation
// console.log("\nCompruebototalPriceCalculation***************\n");

// // console.log(miLibrery.totalPriceCalculation());

//Pruebo ImprimoLibreria
console.log("\nCompruebo Imprimir Libreria***************\n");
console.log(miLibrery.printLibrary());