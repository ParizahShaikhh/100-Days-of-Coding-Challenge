"use strict";
// Question 122:
// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.
// Answer:
let count = 10;
while (count > 0) {
    if (count === 5) {
        break;
    }
    console.log(count);
    count--;
}
