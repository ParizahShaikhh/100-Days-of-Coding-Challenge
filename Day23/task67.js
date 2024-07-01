"use strict";
// Question 67:
// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation.
// Answer:
// Define a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number
function add(num, str) {
    return num + Number(str);
}
console.log(add(5, "5"));
