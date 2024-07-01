"use strict";
// Question 96:
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// Answer:
// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];
// Use the .reduce() method to calculate the sum of all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// Print the sum of all numbers in the array
console.log(`The sum of all numbers in the array is ${sum}.`);
