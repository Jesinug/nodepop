const advertsCtrl = {};

const Advert = require('../models/Advert');

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

advertsCtrl.createAdvert = async (req, res) => {
  const { name, isForSale, price, picture, tags } = req.body;
  const newAdvert = new Advert ({
    name: name,
    isForSale: isForSale,
    price: price,
    picture: picture,
    tags: tags
  })
  await newAdvert.save();
  res.json({
    message: 'Your advert is published'
  })
}

advertsCtrl.getAdvert = (req, res) => 
{
  res.json({
    message: 'This is the advert you was looking for'
  })
}

advertsCtrl.updateAdvert = (req, res) => 
{
  res.json({
    message: 'Advert is updated'
  })
}

advertsCtrl.deleteAdvert = (req, res) => 
{
  res.json({
    message: 'Advert is deleted'
  })
}


module.exports = advertsCtrl;