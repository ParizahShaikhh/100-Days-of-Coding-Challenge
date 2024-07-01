"use strict";
// Question 97:
// Write a function that returns the current date in the format "DD-MM-YYYY".
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.
// Answer:
// Define a function to return the current date in the format "DD-MM-YYYY"
function getCurrentDate() {
    // Get the current date
    const date = new Date();
    // Get the day, month, and year
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    // Return the current date in the format "DD-MM-YYYY"
    return `${day}-${month}-${year}`;
}
// Call the function and print the result
console.log(getCurrentDate());
