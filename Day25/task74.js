"use strict";
// Question 74:
// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.
// Answer:
let p = 5;
let q = 10;
let temp = p;
p = q;
q = temp;
console.log(p);
console.log(q);
