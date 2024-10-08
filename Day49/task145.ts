// Question 145:
// Create a function that accepts a callback and invokes it with some arguments.

// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.





// Answer:

// Define a function that accepts a callback and invokes it with some arguments

function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
): void {
    callback(arg1, arg2);
}

// Example callback function that adds two numbers

let add = (a: number, b: number) => {
    console.log(a + b);
};


executeCallback(add, 5, 3);