var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('this is the homepage');
});

app.get('/contact', function(req, res){
    res.send('Contact page');
});

app.get('/profile/:id', function (req, res){
    res.send('Você entrou na página de perfil para o ID ' + req.params.id);
});

app.listen(3000);