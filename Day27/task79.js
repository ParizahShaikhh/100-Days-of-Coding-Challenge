// Question 79:
// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
// Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation.
// Answer:
// Define an object to represent a car
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
};
// Use dot notation to access the model property
console.log(car.model);
// Use bracket notation to access the model property
console.log(car["model"]);
export {};
