const fibonacci = function(counter) {
    let sum = 0;
    let array = [0,1];
    if(counter < 0){
        return("OOPS");
    }
    for(let i = 0; i < counter; i++){
        sum=(array[array.length-1])+(array[array.length-2]);
        array.push(sum);
    }
    return array[counter];
};

// Do not edit below this line
module.exports = fibonacci;
