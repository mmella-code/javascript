// object = a collection of related properties and/or methods
//.         can represent real world objects(people, products, places)
//.        object = {key:value,
//                    function()}
// objects cant have the same name
// if the value is a sting it needs to be in a ""
// methods are functions that an object can perform
// properties are key value pairs

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