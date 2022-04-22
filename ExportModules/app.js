/*function callFunction(fun){
    fun();
}

//function expression
var sayBye = function () {
    console.log('im say bye');
};

callFunction(sayBye); */

var stuff = require('./stuff');

console.log(stuff.counter(['um', 'array', 'com', 'cinco', 'posicoes'])+'\n');
console.log(stuff.adder('cuba', 'tao')+'\n');
console.log(stuff.adder(12, 12)+'\n');
console.log('valor de pi: ',stuff.pi+'\n');