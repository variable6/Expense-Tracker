
const path = require('path');
const express = require( 'express');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {

  const homePath = path.resolve(__dirname, './home.html');

  res.sendFile(homePath);
})

app.get('/about', (req, res) => {

  const homePath = path.resolve(__dirname, './home.html');

  res.sendFile(homePath);
})

app.listen(3201, () => {
  console.log('Server is running at port 3201');
  console.log('http://localhost:3201');
})