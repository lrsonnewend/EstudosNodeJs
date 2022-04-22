var counter = function(arr){
  return 'There are '+ arr.length + ' elements in this array';
};

var adder = function (a,b) {
  return `The sum of 2 args is ${a+b}`;
};

var pi = 3.142;


//exportando funções
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};