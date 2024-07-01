"use strict";
// Question 85:
// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.
// Answer:
// Define a function to find the position of the word "code" within a string
function findCode(str) {
    // Return the position of the word "code" within a string
    return str.indexOf("code");
    // Return -1 if the word "code" is not found within a string
}
// Call the function with a string containing the word "code"
console.log(findCode("This is a string containing the word 'code'"));
