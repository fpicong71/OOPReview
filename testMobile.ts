import { Mobile } from "./mobile";

let movil1 = new Mobile("Nokia", "3210");
movil1.trademark = "Nokia";
movil1.sdSize = 12;
movil1.color ="rojo";
movil1.is5G = false;
movil1.cameraNumber = 2;
movil1.price = 250;

let movil2 = new Mobile("Iphone","3G");
movil2.trademark = "Apple";
movil2.sdSize = 24;
movil2.color ="plata";
movil2.is5G = false;
movil2.cameraNumber = 4;
movil2.price = 650;

let movil3 = new Mobile("Samsung","Galaxy 10");
movil3.trademark = "Samsung";
movil3.sdSize = 48;
movil3.color ="rosa";
movil3.is5G = true;
movil3.cameraNumber = 4;
movil3.price = 720;

console.log("MOVIL 1----------------"); 
movil1.print();

console.log("MOVIL 2----------------");
movil2.print();

console.log("MOVIL 3----------------");
movil3.print();


