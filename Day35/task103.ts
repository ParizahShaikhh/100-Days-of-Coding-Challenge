// Question 103:
// Write a function that returns a random boolean value, true or false.

// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.



// Answer:

function randomBoolean(): boolean {
    return Math.random() > 0.5;

}

console.log(randomBoolean());