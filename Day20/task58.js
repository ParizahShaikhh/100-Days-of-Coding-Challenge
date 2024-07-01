"use strict";
// Question 58:
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define a function to calculate the average score
function calculateAverageScore(scores) {
    // Calculate the sum of the scores
    let sum = scores.reduce((total, score) => total + score);
    // Calculate the average score
    let average = sum / scores.length;
    // Print the average score
    console.log(`The average score is ${average}.`);
}
// Define an array of scores
let scores = [80, 85, 89, 97, 90, 91, 96];
// Call the function to calculate the average score
calculateAverageScore(scores);
