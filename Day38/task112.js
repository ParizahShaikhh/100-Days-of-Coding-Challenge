"use strict";
// Question 112:
// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.
// Answer:
// Create a Map to store the names of countries as keys and their capitals as values
const capitals = new Map();
// Add three countries to the Map
capitals.set("France", "Paris"); // adds France to the Map 
capitals.set("USA", "Washington, D.C."); // adds USA to the Map 
capitals.set("Japan", "Tokyo"); // adds Japan to the Map 
console.log(capitals);
