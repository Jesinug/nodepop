const mongoose = require('mongoose');

const advertSchema = mongoose.Schema({
  name: String,
  isForSale: Boolean,
  price: Number,
  picture: String,
  tags: [String]
  });

advertSchema.statics.list = function( filter, pagLimit, pagSkip ) {
  const query = Advert.find(filter).skip(pagSkip).limit(pagLimit);
  return query.exec();
}

advertSchema.statics.tags = function(){
  return Advert.distinct('tags').exec(); 
}

const Advert = mongoose.model('Advert', advertSchema);

module.exports = Advert;