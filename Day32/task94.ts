// Question 94:
// Use the .map() method to create a new array that contains the length of each word from an array of words.

// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.



// Answer:

// Define an array of words

let words = ["Hello", "World", "in", "a", "frame"];

// Use the .map() method to create a new array that contains the length of each word from the array of words

let wordLengths = words.map(word => word.length);

console.log(wordLengths);

