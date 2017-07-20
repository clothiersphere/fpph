const express = require('express');
const unsplash = require('./server/unsplash');
const app = express();



app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/jerk', function (req, res) {
  res.send('Hello JERK!')
})

app.get('/api/getRandomImage', unsplash.getRandomImage)

// Route path: /api/getImage/:width/:height
//             /api/getImage/fruit/:width/:height
//             /api/getImage/dessert/:width/:height    
       

app.listen(1234, () => {
  console.log('%s listening at %s', app.name, app.url);
});


module.exports = 'api';

