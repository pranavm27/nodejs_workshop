var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('heres');
  res.render('index', { title: 'Home' });
    //https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
});

/* GET search key*/
router.get('/showFilledDetails', function(req, res, next) {
    console.log(req.query)
    res.send(req.query)
});
module.exports = router;
