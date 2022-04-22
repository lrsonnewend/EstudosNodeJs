var events = require('events');

var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var p1 = new Person("Jeremia");
var p2 = new Person("Ariane");
var p3 = new Person("Rogerio");

var people = [p1,p2,p3];

people.forEach(function(p){
    p.on('speak', function (msg){
        console.log(p.name + ' said: ' +msg);
    });
});

p1.emit('speak', 'hey folks!');
p2.emit('speak', 'i love IT!');

/*var myEmitter = new eventos.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent', 'o evento foi emitido');*/