"use strict";
// Question 130:
// Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// Explain & TIP: In modern JavaScript development, modules  allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
// Answer:
// Export a function from one file and import it into another
function add(a, b) {
    return a + b;
}
exports.add = add;
// import { add } from "./task130";
console.log(add(2, 5));
