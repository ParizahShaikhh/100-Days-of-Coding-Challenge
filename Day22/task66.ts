// Question 66:
// Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.


// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.


// Answer:



// Define the checkBothTrue function to check if both are true
function checkBothTrue(a: boolean, b: boolean): boolean {
    return a && b;
}

// Test the checkBothTrue function
console.log(checkBothTrue(true, false));

console.log(checkBothTrue(true, true));
