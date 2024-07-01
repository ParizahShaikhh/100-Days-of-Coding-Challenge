// Question 90:
// Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.
// Answer:
// Define a function to check if a value is NaN
function isValueNaN(value) {
    return isNaN(value);
    // Return true if the value is NaN
    // Return false if the value is  not NaN
}
console.log(isValueNaN("Hello"));
console.log(isValueNaN(123));
export {};
