const { greenBright } = require('chalk');
const express = require('express');
//const debug = require('debug')('app:adminRouter');
const { MongoClient } = require('mongodb');


const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {
  const url =
    ''; // to be added in dev time 
  const dbName = '';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug('Connected to the mongo DB');

      const db = client.db(dbName);

      //const response = await db.collection('products').insertMany();
      res.json(response);
    } catch (error) {
      //debug(error.stack); // to be logged in another way
    }
    client.close();
  })();
});

module.exports = adminRouter;
