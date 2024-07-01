"use strict";
// Question 137:
// Implement a try-catch block to handle potential errors in a block of code.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
// Answer:
// Define a try-catch block to handle potential errors in a block of code
try {
    throw new Error("Something went wrong");
}
catch (error) {
    // console.log(error.message);
}
