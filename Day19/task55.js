"use strict";
// Question 55:
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Function to double the numbers in an array
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}
// Example usage
const originalNumbers = [20, 40, 60, 80, 100];
const doubledNumbers = doubleNumbers(originalNumbers);
console.log("Original numbers:", originalNumbers);
console.log("Doubled numbers:", doubledNumbers);
