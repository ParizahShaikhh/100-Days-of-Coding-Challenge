"use strict";
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
// Define arrays representing prices of two sets of laptops
let pricesSet1 = [1000, 1500, 1200];
let pricesSet2 = [1000, 1500, 1200];
// Combine the arrays using the spread operator and sort them in ascending order
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
// Log the combined and sorted array
console.log("Combined and Sorted Prices:", combinedPrices);
