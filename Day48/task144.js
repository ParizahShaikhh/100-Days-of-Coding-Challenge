"use strict";
// Question 144:
// Explain the use of the Promise.all() method with an example.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
// Answer:
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
