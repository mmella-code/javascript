//class provides a more structured and cleaner way to work with objects(objects with shared properties and methods) compared to traditional constructor function
// it will include a constructor

class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

//method
    displayproduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.tofixed(2)}`);
    }
    // method with one parameter sales tax
    calculatetotal(salesTax){
        return this.price = (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new product("shirt", 19.99);
const product2 = new product("pants", 22.50);
const product3 = new product("underwear", 100.00);

// the output is the instance created which is product1 together with the method which is displayproducts
product1.displayproduct();

const total = product1.calculatetotal(salesTax);
console.log(`total price(with tax): $${total.toFixed(2)}`);




class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    d() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
let my = new Car("Toyota", "Corolla", 2021);
my.d();



//inheritance in class
// electric car inherits from car, using super to set properties and adds batterylife and d method
// an instance calls both di to display car details and d to show battery lif

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    di() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    d() {
        console.log(`Battery life: ${this.batteryLife} hours`);
    }
}
let tesla = new ElectricCar("Tesla", "Model S", 2022, 24);
tesla.di()
tesla.d();

// creating multiple objects from class

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    d() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
let c1 = new Car("Toyota", "Corolla", 2021);
let c2 = new Car("Honda", "Civic", 2020);
c1.d();
c2.d();

class A {
    constructor(name){
        this.name = name;
    }
    show() {
        console.log(this.name)
    }
}
let obj = new A("JS");
obj.show();
