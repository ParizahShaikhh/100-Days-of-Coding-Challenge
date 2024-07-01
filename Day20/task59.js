"use strict";
// Question 59:
// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// This program makes a function to add a specific number to any other number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
