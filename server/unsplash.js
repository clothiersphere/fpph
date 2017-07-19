const axios = require('axios');
const apiKeys = require('../src/constants/apiKeys');

function getRandomImage(req, res, next) {
  const url = '';
  axios.get(url).then(response => response.data)
  .then((data) => {
    console.log(data)
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR', error);
  })
}

module.exports = {
  getRandomImage
}