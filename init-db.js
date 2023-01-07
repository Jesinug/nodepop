const readline = require('readline');
const Advert = require('./src/models/Advert');

async function main(){

    //Connecting to the database
    const connection = require('./src/database');

    await gg();

}

main().catch(err => console.log('asdasdsadasdasdasdasd', err));

async function gg(){
    await Advert.deleteMany();
    console.log(`pepe grillo borro`);

    await Advert.insertMany([
      {
        name: "Patines Rollerblade sin uso!",
        price: 80,
        isForSale: true,
        picture: "hola.png",
        tags: [ "lifestyle" ]
      },
      {
        name: "Barbacoa tipo chulengo. URGE VENT!",
        price: 50,
        isForSale: true,
        picture: "nodepop/src/img/barbacoa.png",
        tags: [ "lifestyle" ]
      },
      {
        name: "Casco de moto",
        price: 85,
        isForSale: true,
        picture: "nodepop/src/img/casco.png",
        tags: [ "lifestyle", "motor"]
      },
      {
        name: "Sillón de un cuerpo, seis meses de uso",
        price: 100,
        isForSale: true,
        picture: "nodepop/src/img/sillon.png",
        tags: [ "lifestyle" ]
      },
      {
        name: "Tienda de campaña, ideal climas fríos",
        price: 120,
        isForSale: true,
        picture: "nodepop/src/img/tienda-campaña.png",
        tags: [ "lifestyle" ]
      }

    ]);
    console.log(`pepe grillo creo`);
};