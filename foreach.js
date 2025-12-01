//foreach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element
let numbers = [1,2,3,4,5,6];

numbers.forEach(double);
numbers.forEach(display);


function double(element, index, array){
    array[index] = element * 2;
}
function display(element){
    console.log(element);
}

let friuts =["apple", "orange","pineapple","grapes"];
friuts.forEach(uppercase);
friuts.forEach(display);

function uppercase(element, index, array){
    array[index]=element.touppercase();
}
// for the first letter to be an uppercase
function capitalize(element, index, array){
    array[index]= element.charAt(0).touppercase() + element.slice(1);
}

function display(element){
    console.log(element)
}