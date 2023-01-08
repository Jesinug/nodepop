const { Router } = require('express')
const router = Router();

const { getAdverts, createAdvert, getAdvert, deleteAdvert, updateAdvert, getTags } = require('../controllers/adverts.controlers')
require('../controllers/adverts.controlers')

router.route('/')
  .get(getAdverts)

router.route('/tags')
  .get(getTags)
 
  module.exports = router;



