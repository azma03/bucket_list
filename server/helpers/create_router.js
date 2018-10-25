const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection){
  const router = express.Router();

  //INDEX
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });

  //GET One Item
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  //CREATE
  router.post('/', (req, res) => {
    // console.log(req.body);
    // debugger;
    collection.insertOne(req.body)
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    })
  });

  //DELETE
  router.delete('/:id', (req,res) => {
    const id = req.params.id;
    console.log('id',id);
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(() => collection.find().toArray())
    .then((docs) => {
      console.log("docs", docs);
      console.log("res.json(docs)", res.json(docs));
      // debugger;
      res.json(docs)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error:err });
    });
  });


  return router;
};

module.exports = createRouter;
