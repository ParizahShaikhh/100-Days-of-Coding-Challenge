"use strict";
// Question 78:
// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.
// Answer:
// Define a function declaration that squares a number
function squareDeclaration(number) {
    return number * number;
}
// Define a function expression that squares a number
const squareExpression = function (number) {
    return number * number;
};
// Call the functions
console.log(squareDeclaration(5));
console.log(squareExpression(5));
