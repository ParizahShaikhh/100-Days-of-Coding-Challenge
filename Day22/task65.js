"use strict";
// Question 65:
// Determine the Remainder:
// Make a function that gets two numbers and show the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more.
// Answer:
// This function finds the leftover of dividing two numbers
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(5, 2)); // Shows 1
