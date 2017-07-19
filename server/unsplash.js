const axios = require('axios');
const apiKeys = require('../src/constants/apiKeys');

function getRandomImage(req, res, next) {
  const api = `https://api.unsplash.com/photos/`;
  const options = `random`;
  const clientId = `?client_id=${apiKeys.unsplashAppId}`;
  const url = api+options+clientId;

  axios.get(url).then(response => response.data)
  .then((data) => {
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR', error);
  })
}

module.exports = {
  getRandomImage
};
