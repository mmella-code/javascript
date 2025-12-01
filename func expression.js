// function expression = a way to define functions as values or variables

// used in; callbacks in asynchronous operations
// higher order functions
// closures
//event listners

const numbers = [2,4,5,6,7,2,1,];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});

const evennums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evennums);

