//.map() = accepts a callback and applies that function to each element of an array, then returns a new array
// it is similar to the for each but after completion the map method returns a new array whereas for each will change them.

const numbers = [1, 2, 3, 4, 5];

 const squares =numbers.map(square);
 console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

const students = ["pinky", "elsa","barbie", "racheal"  ];
const studentsupper = students.map(uppercase);



function uppercase(element){
    return element.touppercase();
}

const dates = ["2024-2-4", "2023-4-5", "2022-3-6"];
const formatdates = dates.map(formatdate);

function formatdate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[4]}/${parts[5]}`;
}