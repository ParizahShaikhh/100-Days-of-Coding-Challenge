"use strict";
// Question 72:
// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.
// Answer:
// Create a code block with {}
{
    // Declare a variable using let
    let x = 10;
    // Declare a variable using const
    const y = 20;
    // Print the value of x and y
    console.log(x);
    console.log(y);
}
// Print the value of x and y
// console.log(x, y);
// shows error
