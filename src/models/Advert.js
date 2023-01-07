// Fichero que definirá de qué modo la base de datos va a estar interactucando con las
const { Schema, model } = require('mongoose');

const advertSchema = new Schema({
  name: String,
  isForSale: Boolean,
  price: Number,
  picture: String,
  tags: [String]
  });

  module.exports = model('Advert', advertSchema)