"use strict";
// Question 139:
// List three reserved words in JavaScript and create a valid use case for each.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.
// Answer:
// 1. let
let count = 5;
// 2. if
if (count > 0) {
    console.log("Count is greater than 0. ");
}
// 3. return
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
