// Question 51: Refactoring to Arrow Functions:
// Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


// Answer:
// Original function to calculate the area of a rectangle
function calculateRectangleAreas(length: number, width: number): number {
    return length * width;
}

// Refactored version using an arrow function
let calculateRectangleArea = (length: number, Width: number): number => length * Width;


// Call the function and log the result
let length = 5;
let width = 7;
console.log("Area of the rectangle:", calculateRectangleAreas(length, width));