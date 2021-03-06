const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');


const productsRouter = express.Router();

productsRouter.route('/').get((req, res) => {
  const url =
    ''; //To Be added in dev time
  const dbName = '';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      console.log('Connected to the mongo DB');
      const db = client.db(dbName);

      const products = await db.collection('products').find().toArray();

      res.render('products', { products });
      client.close();
    } catch (error) {
      console.log(error.stack);
    }
    
  })();
});

productsRouter.route('/:id').get((req, res) => {
  const id = req.params.id;
  const url =
    ''; //To Be added in dev time
  const dbName = '';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      console.log('Connected to the mongo DB');

      const db = client.db(dbName);

      const product = await db
        .collection('products')
        .findOne({ _id: new ObjectID(id) });

      res.render('product',  {product});
      client.close();
    } catch (error) {
      console.error(error.stack);
    }
    
  })();
});

module.exports = productsRouter;
