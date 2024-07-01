// Question 127:
// Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.



// Answer:

// Define a traditional function expression

const add = function (a: number, b: number): number {
    return a + b;
};

// Convert the function expression to an arrow function

const arrowFunc = (a: number, b: number): number => {
    return a + b;
}


console.log(add(6, 3));
console.log(arrowFunc(7,8));
// Output: 9 / 15
