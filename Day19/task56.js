"use strict";
// Question 56:
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define an empty array to hold the words.
let wordsArray = [];
// Define an array of mixed items.
let mixedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"];
//  Use a loop (like a forEach loop) to go through each item in the original list.
for (let item of mixedArray) {
    // If the item is a string, add it to the new list.
    if (typeof item === "string") {
        wordsArray.push(item);
    }
}
console.log(wordsArray);
