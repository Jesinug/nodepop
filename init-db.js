const readline = require('readline');
const Advert = require('./src/models/Advert');

async function deleteReq(){
  await Advert.deleteMany();
  console.log(`All adverts has bein deleted`);
}

async function insertReq(){
  await Advert.insertMany([
    {
      name: "Patines Rollerblade sin uso!",
      price: 80,
      isForSale: true,
      picture: "nodepop/src/public/img/patines.png",
      tags: [ "lifestyle" ]
    },
    {
      name: "Barbacoa tipo chulengo. URGE VENTA!",
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
      name: "Tienda de campaña para 4 adultos",
      price: 120,
      isForSale: false,
      picture: "nodepop/src/img/tienda-campaña.png",
      tags: [ "lifestyle" ]
    },
    {
      name: "Samsung Galaxy A33 5G, Black, 128 GB",
      price: 300,
      isForSale: true,
      picture: "nodepop/src/public/img/movil-samsung.png",
      tags: [ "mobile" ]
    },
    {
      name: "MacBook Pro 13\" 4 meses de uso ",
      price: 1300,
      isForSale: true,
      picture: "nodepop/src/public/img/macbook.png",
      tags: [ "work" ]
    }

  ]);
  console.log(`All existing adverts has bein inserted`);
};

async function main() {

    //Connecting to the database invoquing deleteReq and insertReq
    const connection = require('./src/database');

    await deleteReq();

    await insertReq();

}

main().catch(err => console.log('An error has ocurred', err));