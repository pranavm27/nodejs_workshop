var express = require('express');
var router = express.Router();
var Heros = require('../model/hero');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('heres');
  res.render('index', { title: 'Home' });
    //https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
});

/* GET search key*/
router.get('/save', function(req, res, next) {
    console.log('query : ' + req.query)
//    res.send(req.query)
    res.render('details', {title : 'My Details', data : req.query});
});

router.get('/getAllHeros', function(req, res){
    data = Heros.getAll();
    console.log(data);
    res.render('heros', {data : Heros.getAll()})
//    res.send(data)
})

router.get('/saveNew', function(rqe,res){
    Heros.saveNew({NEWDATA:'NEW DATA'})
    res.render('heros', {data : Heros.getAll()})
//    res.send(Heros.getAll())
})

module.exports = router;
