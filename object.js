// object = a collection of related properties and/or methods
//.         can represent real world objects(people, products, places)
//.        object = {key:value,
//                    function()}
// objects cant have the same name
// if the value is a sting it needs to be in a ""
// methods are functions that an object can perform
// properties are key value pairs
//you can access an objects properties using either dot notation or bracket notation console.log(obj.name); or console.log(obj[name]);
//properites in an object can be modified by reassinging their values
// you can dynamically add new properties to an object using dot or bracket notation
// delete operator removes properties from an object delete obj.color;
// you can check if an object has a property using the in operator or hasownproperty console.log("color" in obj); console.log(obj.hasownproperty("model"));


const person1 = {
    firstName: "barbie",
    lastName: "racheal",
    age: 20,
    isemployed: true,
    sayhello: function(){console.log("hi am barbie")},
}

const person2 = {
    firstName: "ken",
    lastName: "kim",
    age: 30,
    isemployed: false,
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isemployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isemployed);

// js method is an object property  that has a function value
// method invoked with an object called employee.
// object method must be called with parentheses to invoke them. the this keyword in a method rferes to the object that owns the method, and itmust always be written in lowercase
let employee = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
};
console.log(employee.details());