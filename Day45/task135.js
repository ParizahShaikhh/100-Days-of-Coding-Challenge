"use strict";
// Question 135:
// Explain how you can format a JSON string with proper indentation for readability.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.
// Answer:
// Create a JavaScript object
let myObj = {
    name: "Parizah",
    age: 16,
};
// Convert the object into a JSON string with indentation
let myJSON = JSON.stringify(myObj, null, 2);
console.log(myJSON);
