import { Mobile } from "./mobile";
// Probando Set
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

//Probar Get
console.log("\nProbar Gets********************");

console.log("nombre-> " + movil1.getName());
console.log("modelo-> " + movil1.getModel());
console.log("sdSize-> " + movil1.getSdSize());
console.log("color-> " + movil1.getColor());
console.log("Num camaras-> " + movil1.getCameraNum());
console.log("precio-> " + movil1.getPrice());

console.log("\nProbar Print********************");

let misMoviles:Mobile[] = [movil1,movil2,movil3];
for(let mov in misMoviles)
{
    console.log("\n------------------------");
    console.log(misMoviles[mov].print());  
}



