"use strict";
// Question 54:
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
Object.defineProperty(exports, "__esModule", { value: true });
//   Function to dynamically set keys
function setDynamicKey(obj, key, value) {
    obj[key] = value;
}
//   Function to get the value by key
function getDynamicKey(obj, key) {
    return obj[key];
}
//   Example usage
const sections = {};
//  Setting dynamic keys based on user choices
const userChoice1 = "personInfo";
const userChoice2 = "preferences";
setDynamicKey(sections, userChoice1, { name: "Parizah Shaikh", age: 16 });
setDynamicKey(sections, userChoice2, { theme: "dark", language: "en" });
//   Accessing the values
console.log(getDynamicKey(sections, userChoice1)); // Output: { name: 'John Doe', age: 16 }
console.log(getDynamicKey(sections, userChoice1)); // Output: { theme: 'dark', language: 'en' }
//   Output the entire object
console.log(sections);
