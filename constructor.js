// constructor = special method for defining the properties and methods of objects
// clearly define parameters for readability purposes
// special function used with the new keyword to create and initialize objects of a specific type, allowing multiple instances with similar structure but unique properties

function car(make, model, year, color){
    this.make = make,
     this.make = model,
      this.make = year,
       this.make = color;
}

const car1 = new car("ford", "hustang", 2024, "red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);


// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

//Creating Instances with a Constructor
const p1 = new Person("Akash", 30);
const p2 = new Person("Anvesh", 25);

p1.sayHello();
p2.sayHello();

