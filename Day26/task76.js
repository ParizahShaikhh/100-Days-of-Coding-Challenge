"use strict";
// Question 76:
// Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like personal assistants that do a specific task for you and report back with the results.
// Answer:
// Define a function that adds two numbers together
function add(num1, num2) {
    return num1 + num2;
}
// Call the function and log the result
let result = add(10, 20);
console.log("The sum of 10 and 20 is:", result);
