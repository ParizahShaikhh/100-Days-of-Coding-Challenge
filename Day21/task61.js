"use strict";
// Question 61:
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
const VehicleCategory61_js_1 = __importDefault(require("./VehicleCategory61.js"));
function describeVehicle(category) {
    switch (category) {
        case VehicleCategory61_js_1.default.Car:
            console.log("This is a car. It's designed for personal transportation.");
            break;
        case VehicleCategory61_js_1.default.Truck:
            console.log("This is a truck. It's designed for transporting goods.");
            break;
        case VehicleCategory61_js_1.default.Motorcycle:
            console.log("This is a motorcycle. It's designed for individual travel.");
            break;
        default:
            console.log("This is an unknown vehicle category.");
            break;
    }
}
// Example usage
const myVehicles = VehicleCategory61_js_1.default.Car;
describeVehicle(myVehicles);
