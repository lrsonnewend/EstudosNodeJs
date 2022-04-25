var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//conexao com database
mongoose.connect('mongodb+srv://blogdb:sonnewend2006@clusterblog.xqpbz.mongodb.net/clusterblog?retryWrites=true&w=majority');

//criando schema
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'Estudar Node'}, {item: 'Andar de bike'}, {item: 'Lavar a moto'}];

var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app){ 

    app.get('/todo', function (req, res){
        // pegar dados do MongoDB e renderizar na view
        Todo.find({}, function (err, data){
            if(err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlEncodedParser, function(req, res){
        //pegar os dados da view e adicinar à tabela no mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json({todo: data});
        });                
    });

    app.delete('/todo/:item', function (req, res){
        //deletar o item selecionado do mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data){
            if(err) throw err;
            res.json({todo: data});
        });
    });
};