// .filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6];
let evennums = numbers.filter(isEven);
console.log(evennums);

function isEven(element){
    return element % 2 === 0;
}

const ages = [11, 15, 19, 21, 30]
const adults = ages.filter(isadult);
console.log(adults);

function isadult(element){
    return element >= 18;
}

const words = ["cake", "samosa", "mandazi", "cookies"];
const short = words.filter(shortwords);
console.log(short);

function shortwords(element){
    return element.length <= 6;
}