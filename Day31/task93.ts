// Question 93:
// Find the index of "Banana" in an array of fruits and replace it with "Mango".

// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.


// Answer:

// Define an array of fruits

let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Find the index of "Banana" in the array

let index = fruits.indexOf("Banana");

// Replace "Banana" with "Mango"

fruits[index] = "Mango";

// Print the updated array

console.log(fruits);

