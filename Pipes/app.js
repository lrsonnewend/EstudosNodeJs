var http = require('http');
var fs = require('fs');


//SERVER
var http = require('http');

//funcao para criar um servidor
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');        

    myReadStream.pipe(res);
    
});

//servidor ouvindo na porta 3000 
server.listen(3000, '127.0.0.1');

console.log('ouvindo na porta 3000!');