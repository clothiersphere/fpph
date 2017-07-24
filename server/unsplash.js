const axios = require('axios');
const apiKeys = require('../src/constants/apiKeys');

function getRandomImage(req, res, next) {

  console.log(req.params, "params")
  const api = `https://api.unsplash.com/photos/`;
  const options = `random`;
  const clientId = `?client_id=${apiKeys.unsplashAppId}`;
  var url = api+options+clientId;
  var width;
  var height;

  if (req.params.width) {
    width = `&w=${req.params.width}`;
    height = `&h=${req.params.width}`;
    url = api+options+clientId+width+height;
    
  }
  if (req.params.height) {
    height = `&h=${req.params.height}`;
    url = api+options+clientId+width+height;
  }

  axios.get(url).then(response => response.data)
  .then((data) => {
    if (data.urls.custom) {
      res.redirect(data.urls.custom)
    } else {
      res.send(data);
    }
    next();
  })
  .catch((error) => {
    console.log('ERROR', error);
  })
}

module.exports = {
  getRandomImage
};
