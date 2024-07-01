"use strict";
// Question 71:
// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
// Answer:
// Declare a variable using let
let a = 10;
// Try to reassign the variable using let
a = 20;
// Declare a variable using const
const b = 10;
// Try to reassign the variable using const
// b = 20; it shows an error
console.log(a);
console.log(b);
