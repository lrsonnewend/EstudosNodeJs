var fs = require('fs');

fs.readFile('file.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

//var readMe = fs.readFileSync('file.txt', 'utf-8');
//console.log('arquivo original: '+readMe+'\n');