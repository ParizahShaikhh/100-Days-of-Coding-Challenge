"use strict";
// Question 128:
// Create an arrow function that takes multiple parameters and returns the product of all parameters.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.
// Answer:
let multiplyParams = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParams(2, 3, 4));
