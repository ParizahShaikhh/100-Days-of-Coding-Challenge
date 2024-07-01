"use strict";
// Question 114:
// Iterate over a Map of student IDs and names, and log each pair to the console.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
// Answer:
// Define a Map of student IDs and names
const studentMap = new Map([
    [1, "Parizah"],
    [2, "Sania"],
    [3, "Hunaina"],
    [4, "Arish"],
    [5, "Aries"]
]);
// Iterate over a Map of student IDs and names, and log each pair to the console
studentMap.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
