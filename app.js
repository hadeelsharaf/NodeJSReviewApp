const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const PORT = 3000;
const app = express();
const productsRouter = require('./src/routers/productsRouter');


app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.render('index', { title: 'Node App ', data: ['Home Page'] });
  });

app.listen(PORT);