var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
    if (err) {
      throw err;
    }
    db.collection('mammals').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  });
  res.send('respond with a resource');
});



module.exports = router;
