// this = reference to the object where THIS is used(the object depends on the immediate context)
//person.name = this.name
// this keyword does not work with the arrow function

const person1 = {
    name: "spongebob",
    favfood: "crappypaddy",
    sayhello: function(){console.log(`i am ${this.name}`)}
}

person1.sayhello();