// Importo desde Express un objeto llamado Router (en realidad es una función) que es un enrutador
// Nos permite crear rutas y gestionar lo que se nos pide
//  1) Usando destructuring adquiero el objeto Router que está dentro de Express
const { Router } = require('express')

// 2) Agrego la ejecución del objeto Router() a la constante 'router'
const router = Router();

const { getAdverts, createAdvert, getAdvert, deleteAdvert, updateAdvert } = require('../controllers/adverts.controlers')

// 3) 
require('../controllers/adverts.controlers')

// Invoco el método route que recibirá un ......
// Cada uno de los métodos http deberá recibir una función
router.route('/')
  .get(getAdverts)
  .post(createAdvert);

router.route('/:id')
  .get(getAdvert)
  .put(updateAdvert)
  .delete(deleteAdvert);
 
  module.exports = router;



