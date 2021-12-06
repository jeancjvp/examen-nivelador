var express = require('express');
var router = express.Router();

/* GET (With param) CowSay. */
router.get('/', function(req, res, next) {
    res.send("Welcome");
});

module.exports = router;
