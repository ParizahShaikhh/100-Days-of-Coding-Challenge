"use strict";
// Question 64:
// Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.
// Answer:
// Define a function to merge a piece of text with a number
function mergeStringsAndNumbers(text, number) {
    // Return the merged string
    return text + number;
}
// Test the function
console.log(mergeStringsAndNumbers("Age:", 30));
