var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('../assets'));

app.get('/', function(req, res){
    res.render('partials/index');
});

app.get('/contact', function(req, res){
    res.render('partials/contact');
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

app.listen(3000);