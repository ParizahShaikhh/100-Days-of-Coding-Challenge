"use strict";
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
//  each with properties make, model, and year,
//  use array destructuring to assign the first and second laptops to variables. Then, log these variables.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define the array of laptop objects
let laptops = [
    { make: "Dell", model: "XPS 13", year: 2021 },
    { make: "HP", model: "Spectre x360", year: 2020 },
    { make: "Apple", model: "MacBook Pro", year: 2019 }
];
// Use array destructuring to assign the first and second laptops to variables
let [firstLaptop, secondLaptop] = laptops;
// Log the first and second laptops
console.log("First Laptop:", firstLaptop);
console.log("second Laptop:", secondLaptop);
