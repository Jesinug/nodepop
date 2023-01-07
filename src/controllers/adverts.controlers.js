const advertsCtrl = {};

advertsCtrl.getAdverts = (req, res) => {
  res.json({
    message: []
  })
}

advertsCtrl.getAdvert = (req, res) => 
{
  res.json({
    message: 'This is your advert'
  })
}

advertsCtrl.createAdvert = (req, res) => {
  res.json({
    message: 'Advert is published'
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