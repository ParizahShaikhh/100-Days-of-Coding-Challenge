"use strict";
// Question 124:
// Create a function inside an object that returns the object's own name property using the this keyword.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.
// Answer:
// Define an object with a method that returns the object's own name property
const person = {
    name: "Parizah Shaikh",
    getName: function () {
        return this.name; // Return the object's own name property using the this keyword
    }
};
// Test the getName method
console.log(person.getName()); // Output: Parizah
