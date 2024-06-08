// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,
// model, year, and a method describe() that logs a sentence about the laptop.
// Define a class  for the laptop object
class LaptopObject {
    // Properties
    make;
    model;
    year;
    // Define constructor to initialize properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Define method to describe the laptop
    describe() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model} laptop.`);
    }
}
// Create an instance of the LaptopObject class
let myLaptop = new LaptopObject("Dell", "XPS 13", 2021);
// Call the describe method to log information about the laptop
myLaptop.describe();
export {};
