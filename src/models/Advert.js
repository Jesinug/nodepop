// Fichero que definirá de qué modo la base de datos va a estar interactucando con las
const mongoose = require('mongoose');

const advertSchema = mongoose.Schema({
  name: String,
  isForSale: Boolean,
  price: Number,
  picture: String,
  tags: [String]
  });

  advertSchema.statics.list = function( filter ) {
    const query = Advert.find(filter);
    return query.exec();
  }

  const Advert = mongoose.model('Advert', advertSchema);

  module.exports = Advert;