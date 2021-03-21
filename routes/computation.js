var express = require('express');
var router = express.Router();

var x ;


/* GET users listing. */
router.get('/', function (req, res, next) {
    
    x = Math.random();
    // res.send('hello');

    res.send('[Math.round()] applied to ' + `${ [x]}` + ' is ' + `${[Math.round(x)]}`);

});


module.exports = router;