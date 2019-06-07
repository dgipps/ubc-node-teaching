const axios = require('axios');
var express = require('express');
var router = express.Router();

/* GET albums remotely. */
router.get('/', function(req, res, next) {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(function (response) {
        res.send(response.data)
      })
      .catch(function (error) {
        throw new Error('Cannot return albums right now')
      })
});

module.exports = router;