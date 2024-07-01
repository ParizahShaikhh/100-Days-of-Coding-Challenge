// Question 142:
// Create a Promise that resolves with "Hello, World!" after 2 seconds.

import { resolve } from "path";

// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.



// Answer:

let helloPrommise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});


helloPrommise.then((value) => {
    console.log(value);
});