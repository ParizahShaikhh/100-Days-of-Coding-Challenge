// Question 89:
// Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.


// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.



// Answer:

// Function to convert a string to a number

function stringToNumber(str: string): number {
    return parseFloat(str);
}


// Example usage

console.log(stringToNumber("123.45"));

console.log(stringToNumber("98"));

