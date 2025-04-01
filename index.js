
const dotenv = require('dotenv');
const path = require('path');
const express = require( 'express');
const mongoose = require('mongoose');
const apiRouter = require('./src/routes/index.js');

dotenv.config();

const dbURL = process.env.DATABASE_URL ?? "";
const port = process.env.PORT ?? 3201;

mongoose.connect(dbURL).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.log('Error connecting to the database');
  console.error(err);
})

const app = express();
app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {

  const homePath = path.resolve(__dirname,'public', './home.html');

  res.sendFile(homePath);
})
app.get('/about', (req, res) => {

  const homePath = path.resolve(__dirname, './home.html');

  res.sendFile(homePath);
})

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('Server is running at port', port);
  console.log('http://localhost:'+ port);
})