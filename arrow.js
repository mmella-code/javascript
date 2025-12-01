//arrow functions = a concise way to write function expressions good for simple functions that you use only once
// parameters => some code
// use curly braces{} if you need to write more than one statement

const hello = () => console.log("hey");
hello();

setTimeout(() => console.log("hello"), 3000);

const numbers = [2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);


