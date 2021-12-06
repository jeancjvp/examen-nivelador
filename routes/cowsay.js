var express = require('express');
var router = express.Router();
var cowsay = require('cowsay');

/* GET (With param) CowSay. */
router.get('/get/:cowsay', function(req, res, next) { return res.send(cowSay(req.params.cowsay)); });

/* GET (With query) CowSay. */
router.get('/get', function(req, res, next) { return res.send(cowSay(req.query.cowsay)); });

/* POST CowSay. */
router.post('/post', function(req, res, next) { return res.send(cowSay(req.body.cowsay)); });

module.exports = router;

/* Dynamic CowSay */
function cowSay(cowSay) {
    // Cow variables
    var cowEyes = 'Oo';
    var cowTongue = 'U';

    // Validating Parameter
    cowsayUser = checkParameter(cowSay);

    // Print Cow Response in console
    console.log(cowsay.say({text: cowsayUser, e: cowEyes, T: cowTongue}));

    // Return Cow Response
    return cowsay.say({text: cowsayUser, e: cowEyes, T: cowTongue});
}

/* Check Parameter */
function checkParameter(cowSay) {

    // Error Message
    var errorMessage = 'Please provide the parameter "cowsay" with the value you want to display';

    // Validating Parameter
    if (!cowSay || cowSay.trim === '') return errorMessage;

    return cowSay;
}