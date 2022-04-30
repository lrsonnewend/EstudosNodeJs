var http = require('http');
var fs = require('fs');

/*var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk recebido: ');
    console.log(chunk);
});*/


//SERVER
var http = require('http');

//funcao para criar um servidor
var server = http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('VIVENDO MAIS UM DIA');
  });
  //servidor ouvindo na porta 3000 
  server.listen(3000, '127.0.0.1');
  
  console.log('listen on port 3000');