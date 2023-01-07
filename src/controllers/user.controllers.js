const userCtrl = {};

userCtrl.getUsers = (req, res) => res.send('Users Routes')

userCtrl.createUser = (req, res) => res.send('Users created')

userCtrl.deleteUser = (req, res) => res.send('Users Routes')

module.exports = userCtrl;