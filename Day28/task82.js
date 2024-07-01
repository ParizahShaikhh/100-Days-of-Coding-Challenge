"use strict";
// Question 82:
// Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The .length property of a string gives you the total number of characters it contains, helping you understand more about the data you're working with.
// Answer:
// Define a function to find the length of a string
function findLength(str) {
    // Return the length of the string
    return str.length;
}
// Test the findLength function
console.log(findLength("Parizah Shaikh"));
console.log(findLength("Parizah"));
console.log(findLength("Shaikh"));
