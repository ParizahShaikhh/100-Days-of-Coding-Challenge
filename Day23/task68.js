"use strict";
// Question 68:
// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
// Answer:
// Define a function to 
function multiplyDecimals(num1, num2) {
    // Multiply the numbers and round to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2));
// Shows 0.02
// After multiplying, we round to make the result easier to read.
