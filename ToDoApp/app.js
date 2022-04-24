var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();

//configurando template engine
app.set('view engine', 'ejs');

//arquivos estáticos (css, js)
app.use(express.static('./public'));

//instancia de controller
todoController(app);

//configura porta de acesso 
app.listen(3000);
console.log('servidor ouvindo na porta 3000!');