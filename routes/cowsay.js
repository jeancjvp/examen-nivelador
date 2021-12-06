var express = require('express');
var router = express.Router();

/* GET (With param) CowSay. */
router.get('/get/:cowsay', function(req, res, next) {
    // Getting Parameter
    let cowsayUser = req.params.cowsay;

    // Validating Parameter
    checkParameter(cowsayUser);

    return res.send(cowsayUser);
});

/* GET (With query) CowSay. */
router.get('/get', function(req, res, next) {
    // Getting Parameter
    let cowsayUser = req.query.cowsay;

    // Validating Parameter
    cowsayUser = checkParameter(cowsayUser);

    return res.send(cowsayUser);
});

/* POST CowSay. */
router.post('/post', function(req, res, next) {
    // Getting Parameter
    let cowsayUser = req.body.cowsay;

    // Validating Parameter
    cowsayUser = checkParameter(cowsayUser);

    return res.send(cowsayUser);
});

module.exports = router;

/* Check Parameter */
function checkParameter(cowSay) {

    // Error Message
    var errorMessage = 'Please provide the parameter "cowsay" with the value you want to display';

    // Validating Parameter
    if (!cowSay || cowSay.trim === '') return errorMessage;

    return cowSay;
}