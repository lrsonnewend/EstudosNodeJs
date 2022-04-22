var http = require('http');
var fs = require('fs');


//SERVER
var http = require('http');

//funcao para criar um servidor
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var myObject = {
        name: 'Lucas',
        job: 'Dev System',
        age: 21,        
    };

    res.end(JSON.stringify(myObject));
});

//servidor ouvindo na porta 3000 
server.listen(3000, '127.0.0.1');

console.log('ouvindo na porta 3000!');