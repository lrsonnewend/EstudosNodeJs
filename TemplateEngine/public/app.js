var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlEncodedParser = bodyParser.urlencoded({ extended:false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('../assets'));


app.get('/', function(req, res){
    res.render('partials/index');
});

app.get('/contact', function(req, res){
    res.render('partials/contact', {qs: req.query});
});

app.post('/contact-success', urlEncodedParser, function(req, res){
    console.log(req.body);
    res.render('partials/contact-success', {data: req.body});
});

app.get('/profile/:name', function (req, res){
    var data = {
        age: 18,
        job: 'Dev Systems',
        hobbies: [
            'Read books',
            'Ride bike',
            'Play to guitar',
            'Watch TV'
        ],
    };

    res.render('profile', {person: req.params.name, data: data});
});

app.listen(5000);