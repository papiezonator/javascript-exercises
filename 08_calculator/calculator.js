const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(array) {
  if (array.length == 0){
    return 0;
  } 
  let starter = 0;
  let result;
  for (let i = 0; i < array.length; i++){
    result = starter+=array[i]
  }
  return result;
  
};

const multiply = function(array) {
  let starter = array[0];
  let result;
  for (let i = 1; i < array.length; i++){
    result = starter*=array[i]
  }
  return result;
};

const power = function(x,y) {
	return Math.pow(x,y)
};

const factorial = function(x) {
	let result = 1
  let b = x
  for (let i = 1; i < b; i++){
    result = (x*=i)
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
