// Question 130:
// Explain how to export a function from one JavaScript file and import it into another file.

// Explain & TIP: In modern JavaScript development, modules  allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.



// Answer:

// Export a function from one file and import it into another

export function add(a: number, b: number): number {
    return a + b;
}

// import { add } from "./task130";

console.log(add(2, 5));