var http = require('http');
var fs = require('fs');


//SERVER
var http = require('http');

//funcao para criar um servidor
var server = http.createServer(function (req, res) {
    
    console.log('request was made: '+req.url);

    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } 
    
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    
    else if(req.url === '/api/person'){
        res.writeHead(200, {'Content-Type':'application/json'});
        var ninjas = [
            {name: 'Adorval Pereira', age: 19},
            {name: 'Rogeria Skyllab', age: 45}
        ];
        res.end(JSON.stringify(ninjas));
    }

    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/notFound.html').pipe(res);
    }
});   

//servidor ouvindo na porta 3000 
server.listen(3000, '127.0.0.1');

console.log('ouvindo na porta 3000!');