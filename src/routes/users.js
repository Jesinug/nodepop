const { Router } = require('express')
const router = Router();

const { getUsers, createUser, deleteUser } = require('../controllers/user.controllers')

router.route('/')
  .get(getUsers)
  .post(createUser)

  .get((req, res) => res.send('Users Routes'))

router.route('/:id')
  .delete(deleteUser)




  module.exports = router;