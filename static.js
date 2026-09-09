//static keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class owns anything static, not the objects)
//anything declared a static belongs to the class itself and not any object created from the class

class Mathutil{
    static pi = 3.14159;
    // this is a method
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.pi * radius;
    }
    static getArea(radius){
        return this.pi * radius * radius;
    }
}

console.log(Mathutil.pi);
console.log(Mathutil.getDiameter(10));
console.log(Mathutil.getCircumference(10));
console.log(Mathutil.getArea(10));

// MIX OF REGULAR PROPERTIES AND METHODS AND STATIC PROPERTIES AND METHODS

class user{
    // static user count to keep a tract of the number/amount of users we create

    static userCount = 0;
// constructor is automatically called when we instantiate a new object
// we need one argument when we create a new user or argument 
    constructor(username){
        // we can write addtional code inside the constructor, its not only for assigning properties
        this.username = username;
        user.usercount++;

    }
}

const user1 = new user("spongebob");

console.log(user1.username);
console.log(user.userCount);






