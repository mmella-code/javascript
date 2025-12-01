// .reduce() = reduce the elements of an array to a single value

const prices = [10, 20, 30, 13, 5];
const total = prices.reduce(sum);
console.log(`$${total}`);
//console.log(`$${total.toFixed(2)}`);, the tofixed is used if you want to add cents and the number is to how many decimal places.
// you can rename parameters function add(accumulator, element) accumulator and element are the parameters

function sum(accumulator, element){
    return accumulator + element;
}

const grades = [80,90,45, 60, 25];
const max = grades.reduce(getmarks);
console.log(max);

function getmarks(accumulator, element){
    return Math.max(accumulator,element);
}