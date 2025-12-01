// callback = a function that is passed as an argument to another function
//used to handle asynchronous operations

hello(goodbye);
function hello(callback){
    console.log("hello!");
    callback();
}
function goodbye(){
    console.log("goodbye!");
}

function sum( callback, x, y){
    let result = x + y;
    callback(result);
}

function displayconsole(result){
    console.log(result);
}

sum(displayconsole, 2, 3)