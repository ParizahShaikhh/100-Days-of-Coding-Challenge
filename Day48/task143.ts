// Question 143:
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

import { error } from "console";
import { resolve } from "path";

// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.



// Answer:

const promise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    } else {
        reject(new Error("Failure"));
    }
    
});

promise.then((result) =>
{
    console.log(result)
});

promise.catch((error) => {
    console.log(error.message)
});


