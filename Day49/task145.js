"use strict";
// Question 145:
// Create a function that accepts a callback and invokes it with some arguments.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.
// Answer:
// Define a function that accepts a callback and invokes it with some arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
// Example callback function that adds two numbers
let add = (a, b) => {
    console.log(a + b);
};
executeCallback(add, 5, 3);
