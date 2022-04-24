var bodyParser = require('body-parser');

var data = [{item: 'Estudar Node'}, {item: 'Andar de bike'}, {item: 'Lavar a moto'}];

var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app){ 

    app.get('/todo', function (req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlEncodedParser, function(req, res){
        data.push(req.body);
        res.json({todo: data});
    });

    app.delete('/todo/:item', function (req, res){
        data = data.filter(function (todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json({todo: data});
    });
};