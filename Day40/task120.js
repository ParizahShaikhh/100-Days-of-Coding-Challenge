"use strict";
// Question 120:
// Use a for...of loop to iterate through an array of your favorite movies and log each one.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
// Answer:
// Define an array of your favorite movies
let favMovies = ["The Lion King", "Toy Story 4", "Finding Nemo"];
for (let movie of favMovies) {
    console.log(movie);
}
