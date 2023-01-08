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
  
  console.log("objeto para filtrar: ", filterQueries);
   
  const adverts = await Advert.list(filterQueries);

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