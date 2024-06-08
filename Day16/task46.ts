// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,
// model, year, and a method describe() that logs a sentence about the laptop.

import { describe } from "node:test";



// Answer:
// Define an interface to represent the structure of a laptop object

interface Laptop {
    make: string;
    model: string;
    year: number;
    describe(): void; // Method to describe the laptop
}


// Define a class  for the laptop object
class LaptopObject implements Laptop {
    // Properties
    make: string;
    model: string;
    year: number;

    // Define constructor to initialize properties
    constructor( make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }


// Define method to describe the laptop
describe(): void {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model} laptop.`);
}
}

// Create an instance of the LaptopObject class
let myLaptop: Laptop = new LaptopObject("Dell", "XPS 13", 2021);

// Call the describe method to log information about the laptop
myLaptop.describe();