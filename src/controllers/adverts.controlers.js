const Advert = require('../models/Advert');

const advertsCtrl = {};

advertsCtrl.getAdverts = async (req, res) => {
  const isForSale = req.query.isForSale;
  
  const filterQueries = {};
  if (isForSale) {
    filterQueries.isForSale = isForSale;  
  }

  const tags = req.query.tags
  if (tags) {
    filterQueries.tags = {$in: tags};  
  }

  const name = req.query.name
  if (name) {
    filterQueries.name = new RegExp('^' + name, "i"); ;  
  }

  const priceMax = req.query.priceMax;
  const priceMin = req.query.priceMin;
  if (priceMax && priceMin) {
    filterQueries.price = {$lt: priceMax, $gt: priceMin}
  } else if (priceMin) {
    filterQueries.price = {$gt: priceMin}
  } else if (priceMax) {
      filterQueries.price = {$lt: priceMax}
  }

  const pagLimit = req.query.pagLimit;
  const pagSkip = req.query.pagSkip;
  console.log(pagSkip)
  
  
  console.log("objeto para filtrar: ", filterQueries);
   
  const adverts = await Advert.list(filterQueries, pagLimit, pagSkip);

  res.json(adverts)
}

advertsCtrl.getTags = async (req, res) => {
  const tags = await Advert.tags();
  res.json(tags)
}

module.exports = advertsCtrl;