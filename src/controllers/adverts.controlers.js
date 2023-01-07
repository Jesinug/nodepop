const advertsCtrl = {};

const Advert = require('../models/Advert');

advertsCtrl.getAdverts = async (req, res) => {
  const adverts = await Advert.find();
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