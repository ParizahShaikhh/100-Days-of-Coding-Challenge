// Question 61:
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Answer:
import VehicleCategory from "./VehicleCategory61.js";
function describeVehicle(category) {
    switch (category) {
        case VehicleCategory.Car:
            console.log("This is a car. It's designed for personal transportation.");
            break;
        case VehicleCategory.Truck:
            console.log("This is a truck. It's designed for transporting goods.");
            break;
        case VehicleCategory.Motorcycle:
            console.log("This is a motorcycle. It's designed for individual travel.");
            break;
        default:
            console.log("This is an unknown vehicle category.");
            break;
    }
}
// Example usage
const myVehicles = VehicleCategory.Car;
describeVehicle(myVehicles);
