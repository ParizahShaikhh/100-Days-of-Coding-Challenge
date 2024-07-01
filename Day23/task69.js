// Question 69:
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.
// Answer:
// This function divides two numbers and returns both the quotient and the remainder
function devideAndRemainder(numerator, denominator) {
    // Calculate the quotient
    let quotient = Math.floor(numerator / denominator);
    // Calculate the remainder
    let remainder = numerator % denominator;
    // Return an object containing the quotient and remainder
    return {
        quotient: quotient,
        remainder: remainder,
    };
}
// Call the function and log the result
console.log(devideAndRemainder(10, 3));
console.log(devideAndRemainder(11, 3));
console.log(devideAndRemainder(12, 3));
console.log(devideAndRemainder(13, 3));
console.log(devideAndRemainder(14, 3));
console.log(devideAndRemainder(15, 3));
export {};
