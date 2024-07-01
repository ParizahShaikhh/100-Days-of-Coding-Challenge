"use strict";
// Question 134:
// Take a JSON string and parse it into a JavaScript object.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
// Define a JSON string
const jsonString = '{"name":"Parizah","age":16}';
// Parse the JSON string into a JavaScript object
const person = JSON.parse(jsonString);
console.log(person);
