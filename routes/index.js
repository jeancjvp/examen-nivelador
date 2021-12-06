var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:cowsay', function(req, res, next) {
    let cowsayUser = req.params.cowsay;
    res.send(cowsayUser);
});

/* POST home page. */
router.post('/', function(req, res, next) {
    let cowsayUser = req.body.cowsay;
    res.send(cowsayUser);
});

module.exports = router;
