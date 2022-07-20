const { greenBright } = require('chalk');
const express = require('express');
const debug = require('debug')('app:adminRouter');
const { MongoClient } = require('mongodb');


const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {
  const url =
    'mongodb+srv://nodejsapp:NWjr7aaG7baEod9A@cluster0.b1eod2e.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'nodeapp';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug('Connected to the mongo DB');

      const db = client.db(dbName);

      //const response = await db.collection('products').insertMany();
      res.json(response);
    } catch (error) {
      debug(error.stack);
    }
    client.close();
  })();
});

module.exports = adminRouter;
