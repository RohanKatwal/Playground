const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', { coordinates: null });
});

app.post('/coordinates', (req, res) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  console.log(latitude, longitude);
  // Do whatever you want with the latitude and longitude here
  
  res.sendStatus(200);
});

const port = 9000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
