"use strict";
// Question 105:
// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.
// Answer:
// Define a function to simulate a dice roll
function rollDice() {
    // Generate a random integer between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}
// Call the function to simulate a dice roll
console.log(rollDice());
