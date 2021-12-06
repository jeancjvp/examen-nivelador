var express = require('express');
var router = express.Router();

/* GET (With param) CowSay. */
router.get('/', function(req, res, next) {
    let renderTitle = 'Leveler Course Exam - Full Stack';
    let renderNote1 = '- For GET calls go to "/cowsay/get/:cowsay" or "/cowsay/get?cowsay=" and send the "cowsay" parameter with the value you want to display.';
    let renderNote2 = '- For POST calls go to "/cowsay/post" and send the "cowsay" parameter with the value you want to display.';

    res.render('index', { title: renderTitle, note1: renderNote1, note2: renderNote2 });
});

module.exports = router;
