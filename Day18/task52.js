"use strict";
// Question 52:
// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen,
//  and how long its battery lasts.
Object.defineProperty(exports, "__esModule", { value: true });
// Create an instance of a smartphone object
let mySmartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    storage: "256GB",
    screenSize: "6.2 inches",
    batteryLife: "Up to 12 hours"
};
// Log the details of the smartphone
console.log("Smartphone Details:");
console.log("Brand:", mySmartphone.brand);
console.log("Model:", mySmartphone.model);
console.log("Storage:", mySmartphone.storage);
console.log("Screen Size:", mySmartphone.screenSize);
console.log("Battery Life:", mySmartphone.batteryLife);
