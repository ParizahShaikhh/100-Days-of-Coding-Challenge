"use strict";
// Question 77:
// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define a function that greets a user
function greetUser(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
}
// Call the greetUser function with no parameters
greetUser();
// Call the greetUser function with a parameter
greetUser("Parizah");
